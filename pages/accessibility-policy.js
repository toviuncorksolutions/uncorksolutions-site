import Head from 'next/head';

export default function AccessibilityPolicy() {
  return (
    <>
      <Head>
        <title>Accessibility Policy & WCAG-AA Commitment | Uncork Solutions</title>
        <meta
          name="description"
          content="See how Uncork Solutions meets WCAG 2.1 AA and supports screen-readers, keyboard nav and more. Contact us if you encounter barriers."
        />
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="https://www.uncorksolutions.com/accessibility-policy" />
        <link rel="preload" as="image" fetchPriority="high" href="/uncork-solutions-logo.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:site_name" content="Uncork Solutions" />
        <meta
          property="og:title"
          content="Accessibility Policy & WCAG-AA Commitment | Uncork Solutions"
        />
        <meta
          property="og:description"
          content="See how Uncork Solutions meets WCAG 2.1 AA and supports screen-readers, keyboard nav and more."
        />
        <meta property="og:url" content="https://www.uncorksolutions.com/accessibility-policy" />
        <meta
          property="og:image"
          content="https://www.uncorksolutions.com/uncork-solutions-logo.png"
        />
        <meta property="og:image:alt" content="Uncork Solutions logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Accessibility Policy – Uncork Solutions" />
        <meta
          name="twitter:description"
          content="Uncork Solutions is committed to accessibility for all users. Read our accessibility policy and learn about the steps we take to ensure an inclusive experience."
        />
        <meta
          name="twitter:image"
          content="https://www.uncorksolutions.com/uncork-solutions-logo.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.uncorksolutions.com#org",
                  "name": "Uncork Solutions",
                  "url": "https://www.uncorksolutions.com",
                  "logo": "https://www.uncorksolutions.com/uncork-solutions-logo.png",
                  "sameAs": ["https://www.linkedin.com/company/uncorksolutions"]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.uncorksolutions.com/accessibility-policy#web",
                  "url": "https://www.uncorksolutions.com/accessibility-policy",
                  "name": "Accessibility Policy & WCAG-AA Commitment",
                  "description": "Uncork Solutions’ commitment to WCAG 2.1 AA compliance and ongoing accessibility improvement.",
                  "dateModified": "2025-07-27",
                  "inLanguage": "en",
                  "isPartOf": { "@id": "https://www.uncorksolutions.com#org" },
                  "accessibilitySummary": "The site supports screen-readers, keyboard navigation, alt-text and high-contrast modes."
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.uncorksolutions.com/accessibility-policy#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Which accessibility standard does Uncork Solutions follow?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We aim for WCAG 2.1 Level AA compliance across all pages and continually monitor for improvements."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How can I report an accessibility barrier?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Email hello@uncorksolutions.com or call +1-555-123-4567. We respond within two business days."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does your site support screen readers?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Landmarks, ARIA labels and semantic HTML are implemented site-wide for NVDA, JAWS and VoiceOver compatibility."
                      }
                    }
                  ]
                }
              ]
            }`,
          }}
        />
      </Head>

      {/* Skip to main content link for keyboard users */}
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
        tabIndex={-1}
        role="main"
        className="font-sans text-gray-800 w-full min-h-screen px-4 py-16 max-w-2xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-700">
          Accessibility Policy
        </h1>
        <div className="text-sm text-gray-500 mb-6">Last updated: July 2025</div>

        <section className="mb-8">
          <p>
            At <span className="font-semibold text-blue-700">Uncork Solutions</span>, we are
            committed to making our website accessible to everyone, including people with
            disabilities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Our Commitment</h2>
          <p>
            This website meets or exceeds the Web Content Accessibility Guidelines (WCAG) 2.1, Level
            AA—the current global standard for accessibility. However, we still review our site
            regularly to maintain and improve accessibility for all users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">How We Support Accessibility</h2>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
            <li>The site is designed for easy navigation with keyboard and screen readers.</li>
            <li>
              Text alternatives are provided for images and non-text content wherever possible.
            </li>
            <li>We strive for clear, simple language and a clean, readable layout.</li>
            <li>We periodically test and review our website for accessibility improvements.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Ongoing Improvement</h2>
          <p>
            We know accessibility is an ongoing process. If you have trouble accessing any part of
            our website, please let us know so we can make improvements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p>
            If you encounter any accessibility barriers or have suggestions, please contact us at{' '}
            <a
              href="mailto:hello@uncorksolutions.com"
              className="text-blue-700 underline focus:outline-2 focus:outline-blue-700"
            >
              hello@uncorksolutions.com
            </a>
            . We value your feedback and will do our best to address any issues promptly.
          </p>
        </section>
      </main>
    </>
  );
}
