import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: `Method not allowed. Received a ${req.method} instead of POST request` });
  }

  try {
    const { name, country, city, email, product, quantity, units, price, notes } = req.body;
    await resend.emails.send({
      from: 'ExtraFreshFarm <emily@extrafreshfarm.com>',
      to: [process.env.BUSINESS_EMAIL, process.env.PERSONAL_EMAIL],
      reply_to: [email],
      subject: `New Enquiry Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Country: ${country}
        City: ${city}
        Product: ${product}
        Quantity: ${quantity} litres/kilos
        Price: $${price}
        Message: ${notes}
      `,
    });
    await resend.contacts.create({
      email: email,
      firstName: name,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID
    });
    return res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    return res.status(500).json({ message: error.message || 'An error occurred while sending the email' });
  }
}