# Configuração Google Sheets - MugiX Digital Hub

## 📋 Pré-requisitos

1. **Conta Google com acesso ao Google Sheets**
2. **Google Cloud Console habilitado**
3. **Credenciais de serviço criadas**

## 🔧 Configuração Passo a Passo

### 1. Habilitar Google Sheets API

1. Acesse: [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Vá para "APIs & Services" > "Library"
4. Pesquise por "Google Sheets API" e habilite
5. Vá para "Credentials" > "Create Credentials" > "Service Account"
6. Configure o service account:
   - Nome: `mugix-sheets-service`
   - Email: `mugix-sheets@your-project.iam.gserviceaccount.com`
   - Role: `Editor`

### 2. Baixar Credenciais

1. Na página do service account, clique em "ADD KEY" > "Create new key"
2. Escolha formato JSON
3. Baixe o arquivo e renomeie para `sheetsapi.json`
4. Coloque o arquivo na raiz do projeto

### 3. Compartilhar Planilha

1. Abra sua planilha: [Google Sheets](https://docs.google.com/spreadsheets/d/1VtzKOImEaOMS0LvxxZwufRpDZOS9i3kCWQYHBObAfGs/edit)
2. Clique em "Compartilhar"
3. Adicione o email do service account (do arquivo JSON)
4. Dê permissão de "Editor"

### 4. Estrutura da Planilha

A planilha deve ter as seguintes colunas (A-I):

| Coluna | Campo         | Descrição                   |
|--------|---------------|----------------------------|
| A      | Timestamp     | Data/hora do envio         |
| B      | Nome          | Nome completo              |
| C      | Email         | Email do cliente           |
| D      | Telefone      | Telefone/WhatsApp          |
| E      | Empresa       | Nome da empresa            |
| F      | Cargo         | Cargo na empresa           |
| G      | Desafio       | Principal desafio          |
| H      | Data          | Data preferida             |
| I      | Horário       | Horário preferido          |

## 🚀 Como Executar

### Desenvolvimento Local

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar servidor backend:**
   ```bash
   node server.js
   ```

3. **Iniciar servidor frontend:**
   ```bash
   npm run dev
   ```

4. **Acessar aplicação:**
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3001

### Produção (Vercel)

1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Configurar variáveis de ambiente no Vercel:**
   - Adicionar `sheetsapi.json` como arquivo de ambiente

## 🔍 Testes

### Testar API Manualmente

```bash
curl -X POST http://localhost:3001/api/sheets \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste Usuário",
    "email": "teste@example.com",
    "phone": "(11) 99999-9999",
    "company": "Teste Empresa",
    "position": "CEO",
    "challenge": "Processos manuais",
    "date": "2024-01-15",
    "time": "14:00"
  }'
```

### Testar pelo Frontend

1. Acesse http://localhost:8080/agendamento
2. Preencha o formulário
3. Clique em "Solicitar Agendamento"
4. Verifique se os dados aparecem na planilha

## 📊 Monitoramento

### Erros Comuns

- **403 Forbidden**: Verifique se o service account tem acesso à planilha
- **404 Not Found**: Verifique o ID da planilha
- **401 Unauthorized**: Verifique se o arquivo `sheetsapi.json` está correto

### Logs

Os logs aparecerão no console do servidor backend:
- Sucesso: "Data saved to Google Sheets"
- Erro: "Error saving to Google Sheets"

## 🔒 Segurança

- Nunca commite o arquivo `sheetsapi.json`
- Adicione ao `.gitignore`
- Use variáveis de ambiente em produção
- Limite as permissões do service account

## 🆘 Troubleshooting

### Problema: "Cannot find module 'googleapis'"
```bash
npm install googleapis
```

### Problema: "Permission denied"
1. Verifique se o service account está compartilhado com a planilha
2. Verifique se as credenciais estão corretas
3. Reinicie o servidor

### Problema: "Network error"
1. Verifique a conexão com a internet
2. Verifique se as portas 8080 e 3001 estão disponíveis

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs no console
2. Confirme as credenciais
3. Teste a API manualmente
4. Verifique a estrutura da planilha