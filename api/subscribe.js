import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: `Method not allowed. Received a ${req.method} instead of POST request` });
  }

  try {
    const { email} = req.body;
    // await resend.contacts.create({
    //     email: email,
    //     unsubscribed: false,
    //     audienceId: process.env.RESEND_AUDIENCE_ID
    //   });
      console.log(email);
      return res.status(200).json({ message: 'Contact saved successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message || 'Error saving contact' });
  }
}