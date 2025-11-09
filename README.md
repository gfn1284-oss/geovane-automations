# Geovane Automations — Site pronto

Este é um template estático para a sua plataforma **Geovane Automations**.

### O que contém
- `index.html` — página inicial
- `services.html` — listagem de serviços
- `contact.html` — página de contato/contratação (com link para o Google Form)
- `dashboard.html` — painel modelo (placeholder)
- `styles.css` — estilos
- `script.js` — pequenas interações
- `assets/logo.svg` — logo placeholder

### Links configurados
- WhatsApp: https://wa.me/5587991231363
- Google Forms: https://docs.google.com/forms/d/e/1FAIpQLSdEhK0dDG1fBY--PPKfD7O89_SalWLiIDNnTEUFzsUxbJBlmA/viewform?usp=sharing&ouid=110557612353379053563

---

## Deploy rápido (GitHub + Vercel)

1. Crie um repositório no GitHub e faça upload dos arquivos deste projeto.
2. Crie conta em https://vercel.com/ (se ainda não tem).
3. No Vercel, clique em **New Project** → importe o repositório GitHub.
4. Use as configurações padrão (é um site estático). Clique em Deploy.
5. Pronto — seu site ficará disponível em `https://<nome-do-projeto>.vercel.app`.

---

## Próximos passos sugeridos (após o deploy)
- Conectar `dashboard.html` ao Google Sheets para listar pedidos (usar Google Sheets API ou publicar como CSV).
- Criar automações (Make / n8n / Google Apps Script) para enviar mensagens ao WhatsApp.
- Substituir a `assets/logo.svg` pelo logo final em PNG/SVG que você desejar.
- Adicionar autenticação ao painel administrativo quando começar a exibir dados sensíveis.

Se quiser, eu já posso:
- Gerar a função serverless para buscar dados do Google Sheets.
- Ajudar a configurar a automação para enviar mensagens no WhatsApp.
