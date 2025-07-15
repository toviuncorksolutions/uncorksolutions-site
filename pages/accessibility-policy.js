import Head from 'next/head';

export default function AccessibilityPolicy() {
  return (
    <>
      <Head>
        <title>Accessibility Policy – Uncork Solutions</title>
        <meta
          name="description"
          content="Uncork Solutions is committed to accessibility. Learn how we design our website to meet or exceed global accessibility standards."
        />
      </Head>

      <main className="font-sans text-gray-800 w-full min-h-screen px-4 py-16 max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-700">Accessibility Policy</h1>
        <div className="text-sm text-gray-500 mb-6">Last updated: July 2025</div>

        <section className="mb-8">
          <p>
            At <span className="font-semibold text-blue-700">Uncork Solutions</span>, we are committed to making our website accessible to everyone, including people with disabilities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Our Commitment</h2>
          <p>
            This website is designed to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA—the current global standard for accessibility. We review our site regularly to maintain and improve accessibility for all users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">How We Support Accessibility</h2>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
            <li>The site is designed for easy navigation with keyboard and screen readers.</li>
            <li>Text alternatives are provided for images and non-text content wherever possible.</li>
            <li>We strive for clear, simple language and a clean, readable layout.</li>
            <li>We periodically test and review our website for accessibility improvements.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Ongoing Improvement</h2>
          <p>
            We know accessibility is an ongoing process. If you have trouble accessing any part of our website, please let us know so we can make improvements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p>
            If you encounter any accessibility barriers or have suggestions, please contact us at{' '}
            <a href="mailto:hello@uncorksolutions.com" className="text-blue-700 underline">hello@uncorksolutions.com</a>. We value your feedback and will do our best to address any issues promptly.
          </p>
        </section>

        <div className="text-gray-400 text-xs mt-12">Copyright &copy; {new Date().getFullYear()} Uncork Solutions.</div>
      </main>
    </>
  );
}