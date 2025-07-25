// Configuração correta do Google Sheets
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbxSm8pw-XIXywSUn7_0e0Vpb17tNEYv45RhQ0cllshTEWsZjvUZBWbDhtjSHsYZq7TI5w/exec';

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
    console.log('=== INICIANDO ENVIO ===');
    console.log('URL:', GOOGLE_SHEETS_URL);
    console.log('Dados enviados:', JSON.stringify(data, null, 2));
    
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Status da resposta:', response.status);
    console.log('Headers:', response.headers);
    
    const responseText = await response.text();
    console.log('Resposta bruta:', responseText);
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status} - ${responseText}`);
    }
    
    try {
      const result = JSON.parse(responseText);
      console.log('Resultado:', result);
      return result;
    } catch (parseError) {
      throw new Error(`Erro ao parsear JSON: ${responseText}`);
    }
    
  } catch (error) {
    console.error('=== ERRO COMPLETO ===');
    console.error('Tipo do erro:', error.constructor.name);
    console.error('Mensagem:', error instanceof Error ? error.message : error);
    console.error('Stack:', error instanceof Error ? error.stack : 'N/A');
    return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' };
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