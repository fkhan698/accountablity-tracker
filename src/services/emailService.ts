import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.ROOT_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
})

const sendEmail = (to: any, subject: any, text: any) => {
  const mailOptions = {
    to,
    subject,
    text,
  }
  return transporter.sendMail(mailOptions)
}

export default sendEmail
