export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(404).json({ error: 'Invalid route' });

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.NODEMAILER_EMAIL,
    to: 'nickderaj@gmail.com',
    subject: `Contact Form Submission From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>Message: ${req.body.message}</div><p>From:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200).json({ status: 'ok' });
}
