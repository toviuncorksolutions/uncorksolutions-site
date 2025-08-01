import Head from 'next/head';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Privacy Policy | GDPR- & CPRA-Ready Data Practices | Uncork Solutions</title>
        <meta
          name="description"
          content="See how Uncork Solutions collects, uses and protects your data. GDPR- & CPRA-ready, no marketing pixels, full user rights explained."
        />
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
        <link rel="canonical" href="https://www.uncorksolutions.com/privacy-policy" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:site_name" content="Uncork Solutions" />
        <meta
          property="og:title"
          content="Privacy Policy | GDPR- & CPRA-Ready Data Practices | Uncork Solutions"
        />
        <meta
          property="og:description"
          content="Learn exactly how we protect your data: no marketing trackers, GA4 only, full user rights. Updated July 2025."
        />
        <meta property="og:url" content="https://www.uncorksolutions.com/privacy-policy" />
        <meta
          property="og:image"
          content="https://www.uncorksolutions.com/uncork-solutions-logo.png"
        />
        <meta property="og:image:alt" content="Uncork Solutions logo" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy – Uncork Solutions" />
        <meta
          name="twitter:description"
          content="GDPR- & CPRA-compliant privacy practices. No ads, no pixels, your rights explained."
        />
        <meta
          name="twitter:image"
          content="https://www.uncorksolutions.com/uncork-solutions-logo.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://www.uncorksolutions.com#org',
                  'name': 'Uncork Solutions',
                  'url': 'https://www.uncorksolutions.com',
                  'logo': 'https://www.uncorksolutions.com/uncork-solutions-logo.png',
                  'sameAs': [
                    'https://www.linkedin.com/company/uncorksolutions'
                  ]
                },
                {
                  '@type': 'WebPage',
                  '@id': 'https://www.uncorksolutions.com/privacy-policy#web',
                  'url': 'https://www.uncorksolutions.com/privacy-policy',
                  'name': 'Privacy Policy | GDPR- & CPRA-Ready Data Practices',
                  'description': 'How Uncork Solutions collects, uses and protects data—no marketing pixels, GA4 only, full user rights.',
                  'dateModified': '2025-07-27',
                  'inLanguage': 'en',
                  'isPartOf': {
                    '@id': 'https://www.uncorksolutions.com#org'
                  },
                  'accessibilitySummary': 'Policy page describing data collection, analytics and user rights.'
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://www.uncorksolutions.com/privacy-policy#faq',
                  'about': {
                    '@id': 'https://www.uncorksolutions.com/privacy-policy#web'
                  },
                  'mainEntity': [
                    {
                      '@type': 'Question',
                      'name': 'Do you share my data with advertisers?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'No. We do not run ads, remarketing pixels or sell personal data to third-party marketers.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'Which analytics tool do you use?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'We use Google Analytics 4 in anonymous, aggregated mode to understand site usage. No personal identifiers are stored.'
                      }
                    },
                    {
                      '@type': 'Question',
                      'name': 'How can I request data deletion?',
                      'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': 'Email hello@uncorksolutions.com. We respond within 30 days to access, correction or deletion requests.'
                      }
                    }
                  ]
                }
              ]
            }`,
          }}
        />
      </Head>

      {/* Skip to main content link for keyboard and screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-0 top-0 bg-white text-blue-700 p-2 z-50"
        tabIndex={0}
        style={{
          outline: '2px solid #2364e0',
          outlineOffset: '2px',
        }}
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById('main-content');
          if (main) main.focus();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const main = document.getElementById('main-content');
            if (main) main.focus();
          }
        }}
      >
        Skip to main content
      </a>

      <main
        id="main-content"
        role="main"
        tabIndex={-1}
        className="font-sans text-gray-800 w-full min-h-screen px-4 py-16 max-w-2xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-700">Privacy Policy</h1>
        <div className="text-sm text-gray-500 mb-6">Last updated: July 2025</div>

        <section className="mb-8">
          <p>
            At <span className="font-semibold text-blue-700">Uncork Solutions</span>, we value your
            privacy and are committed to being transparent about how your information is collected
            and used.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">1. Website Analytics</h2>
          <p>
            This website uses <span className="font-semibold">Google Analytics 4 (GA4)</span> to
            collect basic, anonymous information about how visitors use the site (such as pages
            visited, time spent, and browser type).
            <br />
            <br />
            <span className="font-semibold">What this means for you:</span>
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
            <li>
              This information is collected in aggregate and does{' '}
              <span className="font-semibold">not</span> include personally identifying details.
            </li>
            <li>Google Analytics uses cookies and similar technologies for this purpose.</li>
            <li>
              We use this data only to understand website usage and improve our content. No
              marketing or advertising use is made of this data.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">2. No Marketing or Advertising Trackers</h2>
          <p>
            We do <span className="font-semibold">not</span> use any marketing or advertising
            trackers, remarketing tools, or social media pixels on this site. No information is
            shared with advertisers or third-party marketers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">3. Information You Provide</h2>
          <p>
            The only personal information we collect is what you choose to submit through our
            website forms (for example, when you contact us or request an Initiative Readiness
            Scan).
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
            <li>
              This may include your name, email address, company, and anything else you provide.
            </li>
            <li>
              We use this information solely to respond to your inquiry or provide the requested
              service.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">4. Data Sharing</h2>
          <p>
            We do <span className="font-semibold">not</span> sell, rent, or otherwise share your
            personal information with anyone outside of Uncork Solutions. Data submitted through
            forms is never used for marketing purposes or shared with third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">5. Data Security & Retention</h2>
          <p>
            We take reasonable steps to protect your information from unauthorized access or
            disclosure. We retain your information only as long as necessary to fulfill your request
            or comply with legal requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">6. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at
            any time by contacting us at{' '}
            <a
              href="mailto:hello@uncorksolutions.com"
              className="text-blue-700 underline focus:outline-2 focus:outline-blue-700"
            >
              hello@uncorksolutions.com
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">8. AI Usage</h2>
          <p>
            Uncork Solutions uses artificial intelligence (AI) tools in select services to enhance
            efficiency and quality. In doing so, we are committed to the responsible and ethical use
            of AI. To learn more about how we use AI, protect your data, and maintain transparency,
            please see our{' '}
            <Link
              href="/ai-policy"
              className="text-blue-700 underline focus:outline-2 focus:outline-blue-700"
            >
              AI Usage Policy
            </Link>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">7. Changes to This Policy</h2>
          <p>
            Any updates to our privacy practices will be posted on this page. Please check back
            periodically for the latest information.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">Questions?</h2>
          <p>
            If you have questions or concerns about how your information is handled, contact us at{' '}
            <a
              href="mailto:hello@uncorksolutions.com"
              className="text-blue-700 underline focus:outline-2 focus:outline-blue-700"
            >
              hello@uncorksolutions.com
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
}
