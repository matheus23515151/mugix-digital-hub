import { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';
import path from 'path';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, company, position, challenge, date, time } = req.body;

    // Validate required fields
    if (!name || !email || !challenge) {
      return res.status(400).json({ 
        success: false, 
        error: 'Campos obrigatórios não preenchidos' 
      });
    }

    // Initialize Google Sheets API
    const credentialsPath = path.join(process.cwd(), 'sheetsapi.json');
    
    const auth = new google.auth.GoogleAuth({
      keyFile: credentialsPath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    const timestamp = new Date().toLocaleString('pt-BR');
    
    const values = [
      [
        timestamp,
        name,
        email,
        phone || '',
        company || '',
        position || '',
        challenge,
        date || '',
        time || ''
      ]
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: '1VtzKOImEaOMS0LvxxZwufRpDZOS9i3kCWQYHBObAfGs',
      range: 'A:I',
      valueInputOption: 'RAW',
      resource: {
        values: values,
      },
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Agendamento confirmado com sucesso!' 
    });

  } catch (error) {
    console.error('Error in sheets API:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Erro ao processar solicitação' 
    });
  }
}