import Head from 'next/head';
import Link from 'next/link';

export default function VariantB() {
  return (
    <>
      <Head>
        <title>Uncork Solutions | Architect Your Advantage</title>
        <meta name="description" content="Variant B – Alternate messaging for homepage testing." />
      </Head>

      <main style={{ maxWidth: '600px', margin: '3rem auto', padding: '0 1rem', fontFamily: 'sans-serif' }}>
        <h1>Architect Your Advantage</h1>
        <p>This is <strong>Variant B</strong> of your landing page. Test headline and conversion performance here.</p>
        <Link href="/">Back to root</Link>
      </main>
    </>
  );
}
