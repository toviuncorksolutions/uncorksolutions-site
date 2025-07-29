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
const InitiativeReadinessScanOutcomesSection = dynamic(
  () => import('../components/InitiativeReadinessScanOutcomesSection'),
  {
    ssr: false,
    loading: () => <Placeholder label="Outcomes" />,
  },
);
const InitiativeReadinessScanHelpSection = dynamic(
  () => import('../components/InitiativeReadinessScanHelpSection'),
  {
    ssr: false,
    loading: () => <Placeholder label="Help" />,
  },
);
const InitiativeReadinessScanWhoWeServeSection = dynamic(
  () => import('../components/InitiativeReadinessScanWhoWeServeSection'),
  {
    ssr: false,
    loading: () => <Placeholder label="Who We Serve" />,
  },
);
const InitiativeReadinessScanHowItWorksSection = dynamic(
  () => import('../components/InitiativeReadinessScanHowItWorksSection'),
  {
    ssr: false,
    loading: () => <Placeholder label="How It Works" />,
  },
);
const InitiativeReadinessScanWhyUsSection = dynamic(
  () => import('../components/InitiativeReadinessScanWhyUsSection'),
  {
    ssr: false,
    loading: () => <Placeholder label="Why Us" />,
  },
);
const InitiativeReadinessScanFinalCTASection = dynamic(
  () => import('../components/InitiativeReadinessScanFinalCTASection'),
  {
    ssr: false,
    loading: () => <Placeholder label="Final CTA" />,
  },
);
const FounderSection = dynamic(() => import('../components/FounderSection'), {
  ssr: false,
  loading: () => <Placeholder label="Founder" />,
});
const InitiativeReadinessScanModal = dynamic(
  () => import('../components/InitiativeReadinessScanModal'),
  { ssr: false },
);

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

const WEBHOOK_URL = process.env.NEXT_PUBLIC_INITIATIVE_READINESS_SCAN_WAITLIST_WEBHOOK_URL;

const REQUIRED_FIELDS = [
  'firstName',
  'lastName',
  'email',
  'challenge',
  'outcome',
  'obstacle',
  'decisionAuthority',
  'timeline',
];

export default function InitiativeReadinessScan() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    challenge: '',
    outcome: '',
    obstacle: '',
    decisionAuthority: '',
    timeline: '',
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const modalRef = useRef(null);
  const firstNameRef = useRef(null);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          event: 'initiativeReadinessScanWaitlistFormSubmitted',
          category: 'Initiative Readiness Scan Waitlist Form',
          action: 'Submit',
          label: normalizedEmail,
          formData: { ...formData, email: normalizedEmail },
        });
      }

      setShowModal(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        challenge: '',
        outcome: '',
        obstacle: '',
        decisionAuthority: '',
        timeline: '',
      });
      await router.push('/initiative-readiness-scan-waitlist-confirmation');
    } catch {
      setError('There was a problem submitting the form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Initiative Readiness Scan: De-Risk Transformation | Solutions</title>
        <meta
          name="description"
          content="Expose hidden risks, benchmark 6 axes and get a boardroom-ready action plan in days—not quarters. Claim early access to the Initiative Readiness Scan."
        />
        <link rel="canonical" href="https://www.uncorksolutions.com/initiative-readiness-scan" />
        <meta
          name="robots"
          content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {/* <link rel="preload" as="image" href="/initiative-readiness-scan-1.png" /> */}
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:site_name" content="Uncork Solutions" />
        <meta property="og:title" content="Initiative Readiness Scan – Uncork Solutions" />
        <meta
          property="og:description"
          content="Get early access to the Initiative Readiness Scan — a proven tool to de-risk and accelerate your change initiatives."
        />
        <meta
          property="og:url"
          content="https://www.uncorksolutions.com/initiative-readiness-scan"
        />
        <meta
          property="og:image"
          content="https://www.uncorksolutions.com/initiative-readiness-scan-1.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Front cover of Uncork Solutions’ Initiative Readiness Scan booklet"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Initiative Readiness Scan – Uncork Solutions" />
        <meta
          name="twitter:description"
          content="Get early access to the Initiative Readiness Scan — a proven tool to de-risk and accelerate your change initiatives."
        />
        <meta
          name="twitter:image"
          content="https://www.uncorksolutions.com/initiative-readiness-scan-1.png"
        />
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
              makesOffer: {
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
        {/* HERO SECTION */}
        <section
          id="irs-hero"
          data-gtm="irs-section-hero"
          aria-label="Initiative Readiness Scan Hero"
          className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between py-8 md:py-8 px-4 md:px-8 lg:px-12 w-full max-w-screen-2xl mx-auto bg-[url('/dull-bg-compressed.png')] bg-cover bg-center bg-no-repeat bg-[#f1f2f4]"
        >
          {/* Booklet image, left */}
          <div
            className="flex-1 flex justify-center md:justify-end items-center md:items-start mb-10 md:mb-0 md:mr-12"
            style={{ minHeight: '420px' }}
          >
            <Image
              id="irs-hero-image"
              src="/initiative-readiness-scan-1.png"
              alt="Front cover of Uncork Solutions' Initiative Readiness Scan sample booklet."
              width={760}
              height={797}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAA1ADUANQA1ADkANQA8AEMAQwA8AFMAWgBQAFoAUwB7AHEAZwBnAHEAewC6AIUAjwCFAI8AhQC6ARsAsADOALAAsADOALABGwD6AS8A9gDmAPYBLwD6AcIBYQE5ATkBYQHCAgcBtAGdAbQCBwJ1AjMCMwJ1AxkC8QMZBAwEDAVwEQA1ADUANQA1ADkANQA8AEMAQwA8AFMAWgBQAFoAUwB7AHEAZwBnAHEAewC6AIUAjwCFAI8AhQC6ARsAsADOALAAsADOALABGwD6AS8A9gDmAPYBLwD6AcIBYQE5ATkBYQHCAgcBtAGdAbQCBwJ1AjMCMwJ1AxkC8QMZBAwEDAVw/8IAEQgAFQAUAwEiAAIRAQMRAf/EACkAAQEBAQAAAAAAAAAAAAAAAAAEAQMBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAL2aSqxN1AD/xAAeEAACAgICAwAAAAAAAAAAAAABAgARAxIEExBRYv/aAAgBAQABPwC4DM/E7n23gUVVVKHhXK4d/i6mV+tWPqMxBn//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AB//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AB//2Q=="
              sizes="(max-width: 767px) 90vw, (max-width: 1023px) 520px, (max-width: 1279px) 650px, 760px"
              priority
              fetchPriority="high"
              style={{ height: 'auto', width: '100%' }}
              className="w-full max-w-[420px] md:max-w-[520px] lg:max-w-[650px] xl:max-w-[760px] h-auto drop-shadow-xl"
            />
          </div>
          {/* Hero text, right */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            {/* 
            <div className="uppercase text-sm tracking-wide text-gray-700 mb-2" id="irs-free-tool-label">
              Free Digital Strategy Evaluation Tool
            </div>
            */}
            <h1
              id="irs-hero-title"
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight min-h-[128px]"
            >
              Most transformations fail.{' '}
              <span className="text-blue-700">Will yours be different?</span>
            </h1>
            <p id="irs-hero-subtitle" className="text-lg md:text-xl text-gray-700 mb-6">
              Don’t Gamble. Get Clarity.
              <br />
              <br />
              Unlock Early Access: The{' '}
              <span className="font-semibold text-blue-700">Initiative Readiness Scan</span> is your
              operator-built, boardroom-ready instrument to diagnose, de-risk, and accelerate
              high-stakes change—before momentum is lost and before reputations are on the line.
            </p>
            <ul
              className="text-base text-gray-700 mb-7 space-y-2 list-none"
              aria-label="Initiative Readiness Scan Benefits"
            >
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-blue-700 text-lg">
                  &#10003;
                </span>
                <span>Objective, confidential assessment&mdash;no consulting fluff</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-blue-700 text-lg">
                  &#10003;
                </span>
                <span>Rapid radar chart revealing real risks, alignment, and readiness</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-blue-700 text-lg">
                  &#10003;
                </span>
                <span>Actionable plan in days&mdash;not quarters</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-blue-700 text-lg">
                  &#10003;
                </span>
                <span>Made for decision-makers: CIOs, CTOs, CDOs, Product Leaders</span>
              </li>
            </ul>
            {/* Side-by-side CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start mb-4">
              <button
                id="irs-hero-cta-primary"
                ref={firstNameRef}
                aria-label="Claim my spot in the Initiative Readiness Scan"
                data-gtm="cta-hero-primary"
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition"
                onClick={() => setShowModal(true)}
              >
                Claim My Spot
              </button>
              <button
                id="irs-hero-cta-secondary"
                aria-label="Learn how the Initiative Readiness Scan works"
                data-gtm="cta-hero-secondary"
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-700 font-medium text-lg shadow hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={() => {
                  document.getElementById('irs-how')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                How It Works
              </button>
            </div>
            <div className="text-sm text-gray-500 mt-2" id="irs-early-access-label">
              Limited early access &ndash; priority to executive leaders
            </div>
          </div>
        </section>

        {/*  Dramatic Section Break */}
        <div className="text-center text-xl md:text-2xl italic text-slate-800 my-9">
          The graveyard of failed transformations is littered with good intentions, big budgets, and
          even bigger surprises.
        </div>
        <div className="text-center text-base md:text-lg text-slate-700 mb-8">
          Are you certain you’re not missing the risks that quietly kill most strategic initiatives
          before they deliver?
        </div>

        <InitiativeReadinessScanOutcomesSection />
        <InitiativeReadinessScanHelpSection />
        <InitiativeReadinessScanWhoWeServeSection />
        <InitiativeReadinessScanHowItWorksSection />
        <InitiativeReadinessScanWhyUsSection />
        <InitiativeReadinessScanFinalCTASection />
        <FounderSection />

        <InitiativeReadinessScanModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmit}
          formData={formData}
          onChange={handleChange}
          error={error}
          setError={setError}
          submitting={submitting}
          firstNameRef={firstNameRef}
          modalRef={modalRef}
        />
      </main>
    </>
  );
}
