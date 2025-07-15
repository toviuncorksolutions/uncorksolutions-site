import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – Uncork Solutions</title>
        <meta
          name="description"
          content="How Uncork Solutions protects your privacy, including details on analytics and information submitted via our website."
        />
      </Head>

      <main className="font-sans text-gray-800 w-full min-h-screen px-4 py-16 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-700">Privacy Policy</h1>
        <div className="text-sm text-gray-500 mb-6">Last updated: July 2025</div>

        <section className="mb-8">
          <p>
            At <span className="font-semibold text-blue-700">Uncork Solutions</span>, we value your privacy and are committed to being transparent about how your information is collected and used.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">1. Website Analytics</h2>
          <p>
            This website uses <span className="font-semibold">Google Analytics 4 (GA4)</span> to collect basic, anonymous information about how visitors use the site (such as pages visited, time spent, and browser type).
            <br /><br />
            <span className="font-semibold">What this means for you:</span>
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
            <li>This information is collected in aggregate and does <span className="font-semibold">not</span> include personally identifying details.</li>
            <li>Google Analytics uses cookies and similar technologies for this purpose.</li>
            <li>We use this data only to understand website usage and improve our content. No marketing or advertising use is made of this data.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">2. No Marketing or Advertising Trackers</h2>
          <p>
            We do <span className="font-semibold">not</span> use any marketing or advertising trackers, remarketing tools, or social media pixels on this site.
            <br />
            No information is shared with advertisers or third-party marketers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">3. Information You Provide</h2>
          <p>
            The only personal information we collect is what you choose to submit through our website forms (for example, when you contact us or request an Initiative Readiness Scan).
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
            <li>This may include your name, email address, company, and anything else you provide.</li>
            <li>We use this information solely to respond to your inquiry or provide the requested service.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">4. Data Sharing</h2>
          <p>
            We do <span className="font-semibold">not</span> sell, rent, or otherwise share your personal information with anyone outside of Uncork Solutions.
            <br />
            Data submitted through forms is never used for marketing purposes or shared with third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">5. Data Security & Retention</h2>
          <p>
            We take reasonable steps to protect your information from unauthorized access or disclosure.
            <br />
            We retain your information only as long as necessary to fulfill your request or comply with legal requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">6. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at any time by contacting us at{' '}
            <a href="mailto:hello@uncorksolutions.com" className="text-blue-700 underline">hello@uncorksolutions.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">7. Changes to This Policy</h2>
          <p>
            Any updates to our privacy practices will be posted on this page. Please check back periodically for the latest information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">Questions?</h2>
          <p>
            If you have questions or concerns about how your information is handled, contact us at{' '}
            <a href="mailto:hello@uncorksolutions.com" className="text-blue-700 underline">hello@uncorksolutions.com</a>.
          </p>
        </section>

        <div className="text-gray-400 text-xs mt-12">Copyright &copy; {new Date().getFullYear()} Uncork Solutions.</div>
      </main>
    </>
  );
}