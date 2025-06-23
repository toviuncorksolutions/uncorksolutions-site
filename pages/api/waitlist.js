export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, website } = req.body;

  // 🐝 Honeypot check
  if (website && website.trim() !== '') {
    return res.status(400).json({ message: 'Bot detected.' });
  }

  // 📛 Domain blocklist (e.g. competitors)
  const blocklist = ['@deloitte.', '@accenture.', '@mckinsey.', '@slalom.', '@ibm.', '@bain.'];
  if (blocklist.some(domain => email.toLowerCase().includes(domain))) {
    return res.status(403).json({ message: 'Email domain is not permitted.' });
  }

  // 🛠️ Replace with your Make.com webhook or email service
  console.log('New waitlist signup:', { name, email });

  return res.status(200).json({ message: 'Success' });
}
