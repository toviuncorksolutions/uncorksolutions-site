import Head from 'next/head';

export default function AiPolicy() {
  return (
    <>
      <Head>
        <title>AI Usage Policy & Responsible-AI Commitment | Uncork Solutions</title>
        <meta name='description' content='Learn how Uncork Solutions uses AI responsibly—protecting client data, ensuring human oversight and transparency.' />
        <meta name='robots' content='index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='canonical' href='https://www.uncorksolutions.com/ai-policy' />
        <link rel='preload' as='image' fetchpriority='high' href='/uncork-solutions-logo.png' />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_CA' />
        <meta property='og:locale:alternate' content='en_US' />
        <meta property='og:site_name' content='Uncork Solutions' />
        <meta property='og:title' content='AI Usage Policy & Responsible-AI Commitment | Uncork Solutions' />
        <meta property='og:description' content='How Uncork Solutions deploys AI securely, ethically and transparently.' />
        <meta property='og:url' content='https://www.uncorksolutions.com/ai-policy' />
        <meta property='og:image' content='https://www.uncorksolutions.com/uncork-solutions-logo.png' />
        <meta property='og:image:alt' content='Uncork Solutions logo' />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='AI Usage Policy – Uncork Solutions' />
        <meta name='twitter:description' content='Our promise of responsible, secure and transparent AI.' />
        <meta name='twitter:image' content='https://www.uncorksolutions.com/uncork-solutions-logo.png' />

        <script
          type='application/ld+json'
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
                  "sameAs": [
                    "https://www.linkedin.com/company/uncorksolutions"
                  ]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://www.uncorksolutions.com/ai-policy#web",
                  "url": "https://www.uncorksolutions.com/ai-policy",
                  "name": "AI Usage Policy & Responsible-AI Commitment",
                  "description": "Uncork Solutions’ principles for ethical, secure and transparent use of AI tools.",
                  "inLanguage": "en",
                  "isPartOf": {
                    "@id": "https://www.uncorksolutions.com#org"
                  },
                  "dateModified": "2025-07-01",
                  "accessibilitySummary": "Policy page outlining responsible and transparent use of AI."
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.uncorksolutions.com/ai-policy#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Which AI tools does Uncork Solutions use?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We use leading models such as OpenAI GPT-4-o, Gemini 2 and Microsoft Copilot for research, code generation and content drafting—always under human review."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do you protect client data when using AI?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No confidential client data is fed into public models. We use private, SOC-2 compliant endpoints or internal deployments and enforce strict access controls."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do you disclose AI-generated content to clients?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We flag AI-assisted sections in deliverables and remain accountable for accuracy, bias checks and human validation."
                      }
                    }
                  ]
                }
              ]
            }`,
          }}
        />
      </Head>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute left-0 top-0 bg-white text-blue-700 p-2 z-50"
        tabIndex={0}
        style={{
          outline: '2px solid #2364e0',
          outlineOffset: '2px',
        }}
        onClick={e => {
          e.preventDefault();
          const main = document.getElementById('main-content');
          if (main) main.focus();
        }}
        onKeyDown={e => {
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
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-700">AI Usage Policy</h1>
        <div className="text-sm text-gray-500 mb-6">Last updated: July 2025</div>

        <section className="mb-8">
          <p>
            <span className="font-semibold text-blue-700">Uncork Solutions</span> is committed to using artificial intelligence (AI) tools responsibly, transparently, and securely—both for internal work and in client engagements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">1. Purpose</h2>
          <p>
            This policy outlines our approach to the ethical, secure, and transparent use of AI technologies, reflecting our values and obligations to clients and partners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">2. Scope of AI Usage</h2>
          <p>
            We may use generative AI tools (e.g., OpenAI, Gemini, Copilot) to support research, content drafting, code generation, and workflow automation.
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
            <li>AI tools are used to increase efficiency, creativity, and insight—not to replace human judgment.</li>
            <li>All AI-generated content and recommendations are reviewed and validated by a human before being shared with clients.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">3. Data Protection & Privacy</h2>
          <p>
            Protecting your data is a top priority:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
            <li>
              <span className="font-semibold">No client confidential data, personal information, or sensitive documents are ever entered into public AI tools or platforms without explicit consent and appropriate safeguards.</span>
            </li>
            <li>
              Only AI services with robust security, privacy, and compliance standards may be used for projects involving client or sensitive data.
            </li>
            <li>
              We maintain internal controls to ensure data is handled securely throughout the AI lifecycle.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">4. Bias, Ethics & Human Oversight</h2>
          <p>
            We recognize that AI systems may introduce bias or errors. Our commitments:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
            <li>
              AI-generated outputs are always reviewed for accuracy, relevance, and fairness before use in client deliverables.
            </li>
            <li>
              We do not rely on AI for any final decision-making or critical analysis without human validation.
            </li>
            <li>
              We actively monitor for potential bias or unintended consequences and will take corrective action if identified.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">5. Transparency & Disclosure</h2>
          <p>
            We are transparent about our use of AI:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
            <li>
              Clients are informed when AI-generated content or insights contribute materially to deliverables.
            </li>
            <li>
              We will answer any questions about our AI practices and decision-making process upon request.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">6. Compliance & Policy Review</h2>
          <p>
            We monitor legal, regulatory, and best-practice developments in AI.
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
            <li>
              This policy is reviewed annually, or sooner if regulations or technology change.
            </li>
            <li>
              We strive to ensure our AI practices remain current and compliant.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-2">Questions or Concerns?</h2>
          <p>
            For questions about this policy or our AI practices, please contact{' '}
            <a
              href="mailto:hello@uncorksolutions.com"
              className="text-blue-700 underline focus:outline-2 focus:outline-blue-700"
            >
              hello@uncorksolutions.com
            </a>.
          </p>
        </section>
      </main>
    </>
  );
}