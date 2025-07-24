// Configuração correta do Google Sheets
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycby8v2tV3R4m9xY8Z9kY8w6xY8Z9kY8w6xY8Z9kY8w6xY8/exec';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  position?: string;
  challenge: string;
  date?: string;
  time?: string;
}

export const submitToGoogleSheets = async (data: FormData): Promise<{success: boolean; error?: string}> => {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return { success: false, error: 'Network error' };
  }
};

export const sendToWhatsApp = (formData: any): void => {
  const message = `🏢 *Nova Solicitação de Reunião - MugiX*

👤 *Dados do Cliente:*
• Nome: ${formData.nome}
• Email: ${formData.email}
• Telefone: ${formData.telefone}
• Empresa: ${formData.empresa || 'Não informado'}
• Cargo: ${formData.cargo || 'Não informado'}

🎯 *Desafio Principal:*
${formData.desafio}

⏰ *Horário Preferido:*
• Data: ${formData.data || 'Não especificado'}
• Horário: ${formData.horario || 'Não especificado'}

📅 *Data do envio:* ${new Date().toLocaleString('pt-BR')}

Solicitação enviada via site MugiX`;

  const whatsappUrl = `https://wa.me/556281540306?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};