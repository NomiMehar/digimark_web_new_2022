import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
  user: 'your-email@example.com',
  password: 'your-email-password',
  host: 'smtp.your-email.com',
  ssl: true,
});

export const sendEmail = async (text, from, subject) => {
  try {
    const message = await client.sendAsync({
      text,
      from,
      to: 'nomimehar667@gmail.com',  // Your email as the recipient
      subject,
    });
    return message; // Return message details if needed
  } catch (err) {
    console.error('Error sending email:', err);
    throw err; // Re-throw error for handling in component
  }
};
