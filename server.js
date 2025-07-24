const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Google Sheets setup
const SPREADSHEET_ID = '1VtzKOImEaOMS0LvxxZwufRpDZOS9i3kCWQYHBObAfGs';
const RANGE = 'A:G';

let auth;
let sheets;

async function initializeGoogleSheets() {
  try {
    const credentialsPath = path.join(__dirname, 'sheetsapi.json');
    
    auth = new google.auth.GoogleAuth({
      keyFile: credentialsPath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    sheets = google.sheets({ version: 'v4', auth });
    console.log('Google Sheets API initialized successfully');
  } catch (error) {
    console.error('Error initializing Google Sheets:', error);
  }
}

// API endpoint to submit form data
app.post('/api/submit-form', async (req, res) => {
  try {
    const { name, email, date, time, phone, message } = req.body;

    if (!name || !email || !date || !time) {
      return res.status(400).json({ 
        success: false, 
        error: 'Campos obrigatórios não preenchidos' 
      });
    }

    const timestamp = new Date().toLocaleString('pt-BR');
    
    const values = [
      [timestamp, name, email, date, time, phone || '', message || '']
    ];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: 'RAW',
      resource: {
        values: values,
      },
    });

    console.log('Data saved to Google Sheets:', values);
    
    res.json({ 
      success: true, 
      message: 'Agendamento confirmado com sucesso!',
      data: response.data
    });

  } catch (error) {
    console.error('Error saving to Google Sheets:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Erro ao salvar agendamento' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
async function startServer() {
  await initializeGoogleSheets();
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();