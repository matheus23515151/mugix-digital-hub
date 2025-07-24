import { google } from 'googleapis';
import path from 'path';

interface FormData {
  name: string;
  email: string;
  date: string;
  time: string;
  phone?: string;
  message?: string;
}

class GoogleSheetsService {
  private sheets;
  private auth;
  private spreadsheetId = '1VtzKOImEaOMS0LvxxZwufRpDZOS9i3kCWQYHBObAfGs';
  private range = 'A:F'; // Columns A through F

  constructor() {
    this.initializeAuth();
  }

  private async initializeAuth() {
    try {
      const credentialsPath = path.join(process.cwd(), 'sheetsapi.json');
      
      this.auth = new google.auth.GoogleAuth({
        keyFile: credentialsPath,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      this.sheets = google.sheets({ version: 'v4', auth: this.auth });
    } catch (error) {
      console.error('Error initializing Google Sheets service:', error);
    }
  }

  async appendToSheet(data: FormData) {
    try {
      const timestamp = new Date().toLocaleString('pt-BR');
      
      const values = [
        [
          timestamp,
          data.name,
          data.email,
          data.date,
          data.time,
          data.phone || '',
          data.message || ''
        ]
      ];

      const response = await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'A:G', // Update range to include all columns
        valueInputOption: 'RAW',
        resource: {
          values: values,
        },
      });

      console.log('Data appended to sheet:', response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error appending to sheet:', error);
      return { success: false, error: error };
    }
  }

  async getSheetData() {
    try {
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: 'A:G',
      });

      return response.data.values || [];
    } catch (error) {
      console.error('Error getting sheet data:', error);
      return [];
    }
  }
}

export const googleSheetsService = new GoogleSheetsService();