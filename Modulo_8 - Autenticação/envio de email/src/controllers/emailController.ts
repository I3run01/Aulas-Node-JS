import { Request, Response } from 'express';
import nodemailer from 'nodemailer'

export const contato = async (req: Request, res: Response) => {
    //Passo 1: Configurar o transporter
    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "b92243c4af5a2d",
          pass: "82889c4263f811"
        }
      });


    //Passo 2: Configurar a mensagem
      let message = {
            from: 'não-responda@b7web.com.br',
            to: 'suporte@b7web.com.br',
            replyto: req.body.from,
            subject: req.body.subject,
            html: req.body.email,
            text: req.body.email
      }

    //Passo 3: Enviar a mensagem
    let info = await transport.sendMail(message)

    console.log('Info', info)

    res.json({success: true})

}
