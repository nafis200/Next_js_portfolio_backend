import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (from: string, subject:string,html:string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: config.node_mailer_email,
      pass: config.node_mailer_password,
    },
  });

  await transporter.sendMail({
    from, // sender address
    to:'nafisahamed14@gmail.com',
    subject, // Subject line
    text: '', // plain text body
    html, // html body
  });
};


