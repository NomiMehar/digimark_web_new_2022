// pages/landingpage/LetsTalk/mailerSend.js

import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

const mailerSend = new MailerSend({
    apiKey: process.env.NEXT_PUBLIC_MAILERSEND_API_KEY,
});

async function sendEmail({ name, email, subject, needs, message }) {
    try {
        
        const sentFrom = new Sender('info@trial-351ndgwmjpnlzqx8.mlsender.net', 'Development'); // Update with your email and name
        const recipients = [
            new Recipient('nomimehar667@gmail.com', 'Recipient Name'), // Replace with your recipient's email and name
        ];

        const emailParams = new EmailParams()
            .setFrom(sentFrom)
            .setTo(recipients)
            .setReplyTo(sentFrom)
            .setSubject(subject)
            .setText(`Name: ${name}\nEmail: ${email}\nNeeds: ${needs}\n\nMessage: ${message}`);

        const response = await mailerSend.email.send(emailParams);
        console.log('Email sent:', response);
        return response;
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email');
    }
}

export { sendEmail };
