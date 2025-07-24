/**
 * Google Apps Script para salvar agendamentos no Google Sheets
 * 
 * 1. Abra: https://script.google.com/
 * 2. Crie novo projeto
 * 3. Cole este código
 * 4. Faça deploy como Web App
 * 5. Copie a URL gerada e coloque no arquivo googleSheetsService.ts
 */

const SHEET_ID = '1VtzKOImEaOMS0LvxxZwufRpDZOS9i3kCWQYHBObAfGs'; // Sua planilha
const SHEET_NAME = 'Agendamentos';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Validar dados obrigatórios
    if (!data.name || !data.email || !data.challenge) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'Campos obrigatórios não preenchidos'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Abrir planilha
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      // Adicionar cabeçalhos se for nova
      const headers = ['Data/Hora', 'Nome', 'Email', 'Telefone', 'Empresa', 'Cargo', 'Desafio', 'Data Preferida', 'Horário Preferido'];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    }
    
    // Preparar dados
    const rowData = [
      new Date(), // Timestamp
      data.name,
      data.email,
      data.phone || '',
      data.company || '',
      data.position || '',
      data.challenge,
      data.date || '',
      data.time || ''
    ];
    
    // Adicionar linha
    sheet.appendRow(rowData);
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Agendamento confirmado com sucesso!'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função de teste
function testSubmission() {
  const testData = {
    name: 'Teste Usuário',
    email: 'teste@example.com',
    phone: '(11) 99999-9999',
    company: 'Teste Empresa',
    position: 'CEO',
    challenge: 'Processos manuais',
    date: '2024-01-15',
    time: '14:00'
  };
  
  const response = doPost({
    postData: { contents: JSON.stringify(testData) }
  });
  
  console.log(response.getContent());
}