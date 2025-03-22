import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()

const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
    user: 'richardgeek017@gmail.com',
    pass: `${process.env.GMAIL_SMTP_PASSWORD}`,
},
});

export const sendWelcomeEmail = (email) => {

    const mailOptions = {
    from: '"Socialize" <richardgeek017@gmail.com>',
    to: `${email}`,
    subject: 'Welcome To Socialize',
    text: 'Welcome to Socialize, A Social Media platform for everyone',
    };

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });

}