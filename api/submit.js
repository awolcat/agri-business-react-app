import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: `Method not allowed. Received a ${req.method} instead of POST request` });
  }

  const createContact = async (email, name) => {
    
    const response = await resend.contacts.create({
      email: email,
      firstName: name,
      unsubscribed: false,
      audienceId: '2cd3c10b-72d4-4c57-96e7-9620e367f5c5',
    });
    console.log("Create Contact ", response);
    if (!response.ok) {
      throw new Error(response || 'Error creating contact');
    }
  }

  try {
    const { name, country, city, email, product, quantity, price, message } = req.body;
    await resend.emails.send({
      from: 'Test <emily@extrafreshfarm.com>',
      to: ['albertirura11@gmail.com'],
      reply_to: [email],
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
    await createContact(email, name);
    return res.status(200).json({ message: 'Email sent successfully' });

  } catch (error) {
    return res.status(500).json({ message: error.message || 'An error occurred while sending the email' });
  }
}