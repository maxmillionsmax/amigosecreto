const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Configuração do transporte de e-mail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'seu-email@gmail.com',
    pass: 'sua-senha'
  }
});

// Método conviteEmail
app.post('/conviteEmail', (req, res) => {
  const { email, nome } = req.body;

  const mailOptions = {
    from: 'seu-email@gmail.com',
    to: email,
    subject: 'Convite para Amigo Secreto',
    text: `Olá ${nome},\n\nVocê foi convidado para participar de um amigo secreto!`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Convite enviado com sucesso!');
  });
});

const PORT = process.env.PORT || 3337;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

