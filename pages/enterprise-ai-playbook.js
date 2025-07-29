import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Placeholder = ({ label, height = 300 }) => (
  <div
    className={`w-full bg-gray-100 animate-pulse rounded-xl mb-4 flex items-center justify-center text-sm text-gray-500`}
    style={{ height }}
    role="status"
    aria-label={`Loading ${label} section`}
  >
    Loading {label} section…
  </div>
);
const EnterpriseAIPlaybookModal = dynamic(() => import('../components/EnterpriseAIPlaybookModal'), {
  ssr: false,
});
const EnterpriseAIPlaybookOutcomesSection = dynamic(
  () => import('../components/EnterpriseAIPlaybookOutcomesSection'),
  {
    ssr: false,
    loading: () => <Placeholder label="Outcomes" />,
  },
);
const EnterpriseAIPlaybookWhatsInsideSection = dynamic(
  () => import('../components/EnterpriseAIPlaybookWhatsInsideSection'),
  {
    ssr: false,
    loading: () => <Placeholder label="What's Inside" />,
  },
);
const EnterpriseAIPlaybookDifferenceTableSection = dynamic(
  () => import('../components/EnterpriseAIPlaybookDifferenceTableSection'),
  {
    ssr: false,
    loading: () => <Placeholder label="Comparison Table" />,
  },
);
const EnterpriseAIPlaybookWhoThisIsForSection = dynamic(
  () => import('../components/EnterpriseAIPlaybookWhoThisIsForSection'),
  {
    ssr: false,
    loading: () => <Placeholder label="Who This Is For" />,
  },
);
const EnterpriseAIPlaybookHowItWorksSection = dynamic(
  () => import('../components/EnterpriseAIPlaybookHowItWorksSection'),
  {
    ssr: false,
    loading: () => <Placeholder label="How It Works" />,
  },
);
const EnterpriseAIPlaybookFaq = dynamic(() => import('../components/EnterpriseAIPlaybookFaq'), {
  ssr: false,
  loading: () => <Placeholder label="Frequently Asked Questions" />,
});
const EnterpriseAIPlaybookFinalCTASection = dynamic(
  () => import('../components/EnterpriseAIPlaybookFinalCTASection'),
  {
    ssr: false,
    loading: () => <Placeholder label="Final CTA" />,
  },
);
const FounderSection = dynamic(() => import('../components/FounderSection'), {
  ssr: false,
  loading: () => <Placeholder label="Founder" />,
});

const FREE_EMAIL_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'aol.com',
  'outlook.com',
  'icloud.com',
  'mail.com',
  'mailinator.com',
  'msn.com',
];

const WEBHOOK_URL = process.env.NEXT_PUBLIC_AI_READINESS_ASSESSMENT_RESPONSES_WEBHOOK_URL;
const REQUIRED_FIELDS = ['email'];

export default function EnterpriseAIPlaybook() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ email: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const modalRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    const openModal = () => setShowModal(true);
    document.addEventListener('openModal', openModal);
    return () => document.removeEventListener('openModal', openModal);
  }, []);

  function getDomain(email) {
    return email.trim().split('@')[1]?.toLowerCase() || '';
  }
  function isFreeEmail(domain) {
    return FREE_EMAIL_DOMAINS.some((d) => domain.endsWith(d));
  }
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setError('');
    if (!WEBHOOK_URL) {
      setError('Internal configuration error: missing webhook endpoint.');
      return;
    }
    const normalizedEmail = formData.email.trim().toLowerCase();
    for (const key of REQUIRED_FIELDS) {
      if (!String(formData[key]).trim()) {
        setError('Please complete all required fields.');
        return;
      }
    }
    if (!normalizedEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (isFreeEmail(getDomain(normalizedEmail))) {
      setError('Please use your work email address (not a free email provider).');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, email: normalizedEmail }),
      });
      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || 'Submission failed');
      }
      if (typeof window !== 'undefined') {
        if (!Array.isArray(window.dataLayer)) window.dataLayer = [];
        window.dataLayer.push({
          event: 'EnterpriseAIPlaybookWaitlistFormSubmitted',
          category: 'AI Readiness Assessment Waitlist Form',
          action: 'Submit',
          label: normalizedEmail,
          formData: { ...formData, email: normalizedEmail },
        });
      }
      setShowModal(false);
      setFormData({ email: '' });
      await router.push('/enterprise-ai-playbook-waitlist-confirmation');
    } catch {
      setError('There was a problem submitting the form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Enterprise AI Playbook & Readiness Assessment | Uncork Solutions</title>
        <meta
          name="description"
          content="Get a boardroom-ready Enterprise AI Readiness Playbook based on your company’s unique assessment. Fast, confidential, and built for executive leaders."
        />
        <link rel="canonical" href="https://www.uncorksolutions.com/enterprise-ai-playbook" />
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:site_name" content="Uncork Solutions" />
        <meta
          property="og:title"
          content="Enterprise AI Playbook & Readiness Assessment – Uncork Solutions"
        />
        <meta
          property="og:description"
          content="Get a boardroom-ready Enterprise AI Readiness Playbook based on your company’s unique assessment. Fast, confidential, and built for executive leaders."
        />
        <meta property="og:url" content="https://www.uncorksolutions.com/enterprise-ai-playbook" />
        <meta
          property="og:image"
          content="https://www.uncorksolutions.com/ai-readiness-scan-1.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Front cover of Uncork Solutions’ AI Readiness Assessment booklet"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Enterprise AI Playbook & Readiness Assessment – Uncork Solutions"
        />
        <meta
          name="twitter:description"
          content="Get a boardroom-ready Enterprise AI Readiness Playbook based on your company’s unique assessment. Fast, confidential, and built for executive leaders."
        />
        <meta
          name="twitter:image"
          content="https://www.uncorksolutions.com/ai-readiness-scan-1.png"
        />

        {/* SCHEMA MARKUP: Organization & Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              '@id': 'https://www.uncorksolutions.com#organization',
              name: 'Uncork Solutions',
              legalName: 'Uncork Solutions',
              url: 'https://www.uncorksolutions.com',
              logo: 'https://www.uncorksolutions.com/uncork-solutions-logo.png',
              description:
                'Technology strategy and digital transformation consulting for mid-market and enterprise businesses in B2C retail or B2B manufacturing.',
              sameAs: ['https://www.linkedin.com/company/uncorksolutions'],
              areaServed: [
                { '@type': 'Country', name: 'Canada' },
                { '@type': 'Country', name: 'United States' },
                { '@type': 'Country', name: 'United Kingdom' },
                { '@type': 'Country', name: 'Mexico' },
                { '@type': 'AdministrativeArea', name: 'European Union' },
                { '@type': 'AdministrativeArea', name: 'Latin America' },
              ],
              founder: {
                '@type': 'Person',
                name: 'Tovi Heilbronn',
              },
              foundingDate: '2025-06-25',
              makesOffer: [
                {
                  '@type': 'ConsultingService',
                  name: 'Enterprise AI Playbook & Readiness Assessment',
                  serviceType:
                    'AI Transformation, Boardroom AI Assessment, Digital Transformation Consulting, Organizational Assessment',
                  description:
                    'Boardroom-grade, enterprise-wide AI Readiness Assessment. Diagnose your entire business for AI transformation. Clear, actionable roadmap for leaders. Exportable, audit-ready results. Confidential, vendor-neutral.',
                  provider: {
                    '@type': 'ProfessionalService',
                    name: 'Uncork Solutions',
                  },
                  areaServed: [
                    { '@type': 'Country', name: 'Canada' },
                    { '@type': 'Country', name: 'United States' },
                    { '@type': 'Country', name: 'United Kingdom' },
                    { '@type': 'Country', name: 'Mexico' },
                    { '@type': 'AdministrativeArea', name: 'European Union' },
                    { '@type': 'AdministrativeArea', name: 'Latin America' },
                  ],
                },
                {
                  '@type': 'ConsultingService',
                  name: 'Initiative Readiness Scan',
                  serviceType: 'Digital Transformation Consulting, Organizational Assessment',
                  provider: {
                    '@type': 'ProfessionalService',
                    name: 'Uncork Solutions',
                  },
                  areaServed: [
                    { '@type': 'Country', name: 'Canada' },
                    { '@type': 'Country', name: 'United States' },
                    { '@type': 'Country', name: 'United Kingdom' },
                    { '@type': 'Country', name: 'Mexico' },
                    { '@type': 'AdministrativeArea', name: 'European Union' },
                    { '@type': 'AdministrativeArea', name: 'Latin America' },
                  ],
                },
              ],
            }),
          }}
        />

        {/* SCHEMA MARKUP: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is an AI Readiness Assessment?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "An AI Readiness Assessment evaluates your organization's ability to adopt and scale AI. Uncork’s version powers the Enterprise AI Playbook—your 16-page, boardroom-ready transformation plan.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is the Enterprise AI Playbook?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The Enterprise AI Playbook is a confidential 16-page, boardroom-grade diagnostic playbook personalized to your organization. It evaluates your entire organization’s readiness for enterprise AI. Unlike typical maturity models, it delivers actionable insights, clear next steps, and named owners—giving you a strategic advantage in AI transformation.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How is this different from other AI assessments or maturity models?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Most AI assessments are generic, IT-focused, or provide only a “score.” The AI Readiness Assessment is built for decision-makers. It’s enterprise-holistic, covers eight key business pillars, and provides a tailored action plan with deadlines and accountability—not just a checkbox exercise.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long does the assessment take to complete?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The assessment takes approximately 20 minutes to complete. It’s designed to be efficient for busy executives, while still covering all critical dimensions of AI readiness.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Who should participate in the assessment?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The assessment is intended for senior executives and their direct reports who are responsible for AI, technology, product, data, operations, or compliance. It’s ideal for CIOs, CTOs, CDOs, and other board-facing leaders.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is the assessment confidential?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, absolutely. All answers and the resulting report are strictly confidential. Your information is never shared with any third parties—no exceptions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How and when do I receive my results?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Your personalized, 16-page playbook is typically delivered to your inbox the same day you complete the assessment. It’s ready to share with your board or leadership team immediately.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is this a vendor pitch or truly neutral?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The AI Readiness Assessment is 100% vendor-neutral. There are no sales pitches or hidden agendas—just a clear-eyed, operator-grade assessment of your organization’s AI readiness.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What does the final deliverable include?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You receive a 16-page PDF report featuring an executive summary, a radar chart, deep dives across eight business dimensions, prioritized action plans, and exportable content for board, audit, and compliance needs.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How much does the assessment cost?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Early access to the AI Readiness Assessment is free for qualifying executives in enterprise or mid-market organizations. If you’re leading AI transformation at scale, request priority access to secure your complimentary assessment.',
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <a
        href="#main-content"
        id="skip-link"
        className="sr-only focus:not-sr-only absolute left-0 top-0 bg-white text-blue-700 p-2 z-50"
        tabIndex={0}
        style={{
          outline: '2px solid #2364e0',
          outlineOffset: '2px',
        }}
        onClick={(e) => {
          // Move focus to main content after skip link is activated
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
        className="font-sans text-gray-800 w-full overflow-x-hidden"
      >
        {/* HERO */}
        <section
          aria-labelledby="hero-title"
          className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between py-8 md:py-8 px-4 md:px-8 lg:px-12 w-full max-w-screen-2xl mx-auto bg-[url('/dull-bg-compressed.png')] bg-cover bg-center bg-no-repeat bg-[#f1f2f4]"
        >
          <div
            className="flex-1 flex justify-center md:justify-end items-center md:items-start mb-10 md:mb-0 md:mr-12"
            style={{ minHeight: '420px' }}
          >
            <Image
              id="hero-ai-booklet-img"
              src="/ai-readiness-scan-1a.png"
              alt="Front cover of Uncork Solutions' AI Readiness Assessment sample booklet."
              width={760}
              height={846}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 420px, (max-width: 1024px) 520px, (max-width: 1280px) 650px, 760px"
              priority
              fetchPriority="high"
              className="w-full max-w-[420px] md:max-w-[520px] lg:max-w-[650px] xl:max-w-[760px] h-auto drop-shadow-xl"
            />
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            <h1
              id="hero-title"
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight min-h-[128px]"
            >
              Be the Boardroom Hero Who{' '}
              <span className="text-blue-700">Delivers Enterprise AI,</span> Not Just Point
              Solutions.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Right now, most AI initiatives are stuck in &quot;theatre&quot;—big talk, little
              action. The <span className="font-semibold text-blue-700">AI Readiness Playbook</span>{' '}
              is your unfair advantage: a 16-page, boardroom-grade playbook built to turn your
              company into the market leader for enterprise-wide AI transformation.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              This isn’t a toolkit or a quick fix. It’s your <em>category-defining diagnostic</em>
              —the first and only assessment treating AI as a catalyst for holistic, and durable
              change to your business model, not just another IT project.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start mb-4"
              role="group"
              aria-label="Primary actions"
            >
              <button
                id="hero-cta-primary"
                ref={emailRef}
                aria-label="Get My AI Enterprise AI Playbook"
                aria-haspopup="dialog"
                data-gtm="cta-hero-primary"
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition focus:outline-none focus:ring-4 focus:ring-blue-400"
                onClick={() => document.dispatchEvent(new CustomEvent('openModal'))}
                tabIndex={0}
              >
                Get My Enterprise AI Playbook
              </button>
              <button
                id="hero-cta-secondary"
                aria-label="Learn how the Enterprise AI Playbook works"
                data-gtm="cta-hero-secondary"
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-700 font-medium text-lg shadow hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={() => {
                  document.getElementById('ai-how')?.scrollIntoView({ behavior: 'smooth' });
                }}
                tabIndex={0}
              >
                How It Works
              </button>
            </div>
            <div className="text-sm text-gray-500 mt-2" id="ai-early-access-label">
              Priority access is limited to executives ready to deliver, not just discuss. If
              that&#8217;s you&#8212;get your boardroom-ready plan and join the ranks of leaders who
              are actually moving the needle with AI.
            </div>
          </div>
        </section>

        {/* WHY THIS MATTERS */}
        <section
          className="bg-white py-14 px-6 md:px-16"
          id="ai-why-matters"
          aria-labelledby="why-title"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="why-title" className="text-2xl md:text-3xl font-bold mb-6">
              Why This Matters
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              AI isn’t a bolt-on tool—it’s rewriting business models, shifting markets, and
              redrawing the competitive landscape.
              <br />
              <br />
              While everyone else is busy plugging in chatbots or dabbling with point-solution
              automations, you’ll have the first enterprise-holistic assessment that defines what
              ‘AI-ready’ means for your entire company.
            </p>
            <div className="flex justify-center">
              <ul
                className="list-disc text-left ml-6 text-base space-y-2 text-gray-700 mb-6"
                aria-label="Why Outcomes"
              >
                <li>Win the board’s confidence (and budget)</li>
                <li>Prove real readiness—not just intent</li>
                <li>Unlock millions in value and future-proof your business</li>
              </ul>
            </div>
            <span className="font-semibold text-blue-700">Don’t guess. Diagnose.</span>
          </div>
        </section>

        <EnterpriseAIPlaybookOutcomesSection />
        <EnterpriseAIPlaybookWhatsInsideSection />
        <EnterpriseAIPlaybookDifferenceTableSection />
        <EnterpriseAIPlaybookWhoThisIsForSection />
        <EnterpriseAIPlaybookHowItWorksSection />
        <EnterpriseAIPlaybookFaq />
        <hr className="border-t border-gray-600 my-0 mx-auto w-full max-w-4xl" />
        <EnterpriseAIPlaybookFinalCTASection />
        <FounderSection />

        <EnterpriseAIPlaybookModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
          formData={formData}
          onChange={handleChange}
          error={error}
          setError={setError}
          submitting={submitting}
          emailRef={emailRef}
          modalRef={modalRef}
          ariaLabel="AI Readiness Assessment Signup Modal"
        />
      </main>
    </>
  );
}
