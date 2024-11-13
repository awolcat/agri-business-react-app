import { Resend } from 'resend';
// import dotenv from 'dotenv';

// dotenv.config();
const resend = new Resend(process.env.RESEND_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: `Method not allowed. Received a ${req.method} instead of POST request` });
  }

  try {
    const { name, country, city, email, product, quantity, price, message } = req.body;
    
    await resend.emails.send({
      from: 'emily@extrafreshfarm.com',
      to: 'albertirura11@gmail.com',
      subject: `New Enquiry Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Country: ${country}
        City: ${city}
        Product: ${product}
        Quantity: ${quantity}
        Price: ${price} per kg/ltr
        Message: ${message}
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error sending email' });
  }
}