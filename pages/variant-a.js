import Head from 'next/head';
import Link from 'next/link';

export default function VariantA() {
  return (
    <>
      <Head>
        <title>Uncork Solutions | Strategy Simplified</title>
        <meta name="description" content="Variant A – The original version of the homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main
        style={{
          maxWidth: '600px',
          margin: '3rem auto',
          padding: '0 1rem',
          fontFamily: 'sans-serif',
        }}
      >
        <h1>Be First to the Table</h1>
        <p>
          This is <strong>Variant A</strong> of your landing page. Identical for now — feel free to
          test a CTA or headline.
        </p>
        <Link href="/">Back to root</Link>
      </main>
    </>
  );
}
