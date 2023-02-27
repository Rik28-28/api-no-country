import nodemailer from 'nodemailer'

const emailConfirmController = async (req, res) => {
  try {
    let transporter = await nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "robert@ciclos.studio", // generated ethereal user
        pass: "mrcatehbmfnmkpvl", // generated ethereal password
      },

    })
    const info = await transporter.sendMail({
      from: '"PLAY PLAY PLAY" <robert@ciclos.studio>', // sender address
      to: data.email, // list of receivers// Subject line
      subject: "Email confirmation",
      html: sendEmailConfirmTemplate(data),
      attachments: [
        {
          filename: 'logo.png',
          path: './public/logo.png',
          cid: 'logo'
        }
      ]
    })
  } catch (error) {

  }
  return
}

export default emailConfirmController