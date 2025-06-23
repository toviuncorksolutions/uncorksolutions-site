import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', website: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.message || 'Submission failed.');
      }
    } catch (err) {
      setError('Something went wrong.');
    }
  };

  return (
    <>
      <Head>
        <title>Uncork Solutions | Technology Strategy</title>
        <meta name="description" content="Uncork complexity. Unlock growth." />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Uncork Solutions" />
        <meta property="og:description" content="Enterprise technology strategy for modern organizations." />
        <meta property="og:image" content="/og.jpg" />
      </Head>

      <main style={{ maxWidth: '600px', margin: '3rem auto', padding: '0 1rem', fontFamily: 'sans-serif' }}>
        <h1>Be First to the Table</h1>
        <p>Join the waitlist for Uncork Solutions. Get early access and insights before public launch.</p>

        {submitted ? (
          <p>Thanks! You're on the list.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" onChange={handleChange} required />
            </label>
            <br />
            <label>
              Email:
              <input type="email" name="email" onChange={handleChange} required />
            </label>
            <br />
            {/* Honeypot field (hidden from users) */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              style={{ display: 'none' }}
              autoComplete="off"
              tabIndex="-1"
            />
            <button type="submit">Join Waitlist</button>
          </form>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </main>
    </>
  );
}
