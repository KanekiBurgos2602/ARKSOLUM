import express, { json } from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// === Solución para __dirname en ESModules ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: './server/.env', override: true });

const app = express();
const PORT = 3000;

app.use(cors());
app.use(json());

app.post('/send-email', async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, 
      pass: process.env.MAIL_PASS 
    }
  });

  const mailOptions = {
    from: `"ArkSolum Constructora" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_RECEIVER,
    subject: 'Nuevo mensaje de contacto ArkSolum',
    html: `
    <div style="font-family:'Segoe UI', sans-serif; background-color:#0f1111; padding:2rem; color:#ffffff;">
      <div style="max-width:600px; margin:auto; background-color:#1a1a1a; border-radius:10px; padding:2rem; border:1px solid #333;">
          <div style="text-align:center; margin-bottom:20px;">
            <img src="cid:logoark" alt="ArkSolum Logo" style="width:80px; margin-bottom:10px;" />
            <h2 style="color:#FBAF42; margin:0;">ArkSolum Constructora</h2>
          </div>
          <p style="font-size:18px; margin-bottom:10px;">Has recibido un nuevo mensaje desde el formulario de contacto.</p>
          
          <table style="width:100%; font-size:16px; margin-top:20px;">
            <tr>
              <td style="font-weight:bold; padding:8px 0; width:100px;">Nombre:</td>
              <td style="padding:8px 0;">${nombre}</td>
            </tr>
            <tr>
              <td style="font-weight:bold; padding:8px 0;">Correo:</td>
              <td style="padding:8px 0;">${correo}</td>
            </tr>
            <tr>
              <td style="font-weight:bold; padding:8px 0; vertical-align:top;">Mensaje:</td>
              <td style="padding:8px 0;">${mensaje}</td>
            </tr>
          </table>

          <hr style="border:none; border-top:1px solid #444; margin:30px 0;">

          <p style="font-size:12px; color:#999; text-align:center;">
            Este mensaje fue generado automáticamente por el sitio <strong>arksolumconstructora.com</strong>
          </p>
      </div>
    </div>
    `,
    attachments: [
      {
        filename: 'Logo.png',
        path: `${__dirname}/Logo.png`,  
        cid: 'logoark'
      }
    ]
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar correo:', error);
    res.status(500).json({ success: false, message: 'Error al enviar el correo' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
