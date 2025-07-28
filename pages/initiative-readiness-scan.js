import Head from 'next/head';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const InitiativeReadinessScanModal = dynamic(
  () => import('../components/InitiativeReadinessScanModal'),
  { ssr: false }
);

const FREE_EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com', 'outlook.com', 'icloud.com', 'mail.com', 'mailinator.com', 'msn.com'
];

const SOFT_GREY_BG = 'bg-[#f1f2f4]';

const WEBHOOK_URL = process.env.NEXT_PUBLIC_INITIATIVE_READINESS_SCAN_WAITLIST_WEBHOOK_URL;

const REQUIRED_FIELDS = [
  'firstName', 'lastName', 'email', 'challenge', 'outcome', 'obstacle', 'decisionAuthority', 'timeline',
];

export default function InitiativeReadinessScan() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',  lastName: '',  email: '',  challenge: '',  outcome: '',  obstacle: '',  decisionAuthority: '', timeline: '',
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const modalRef = useRef(null);
  const firstNameRef = useRef(null);

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
        <meta name='description' content='Expose hidden risks, benchmark 6 axes and get a boardroom-ready action plan in days—not quarters. Claim early access to the Initiative Readiness Scan.' />
        <link rel='canonical' href='https://www.uncorksolutions.com/initiative-readiness-scan' />
        <meta name='robots' content='index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='preload' as='image' fetchPriority='high' href='/initiative-readiness-scan-1.png' />        
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_CA' />
        <meta property='og:locale:alternate' content='en_US' />
        <meta property='og:site_name' content='Uncork Solutions' />
        <meta property='og:title' content='Initiative Readiness Scan – Uncork Solutions' />
        <meta property='og:description' content='Get early access to the Initiative Readiness Scan — a proven tool to de-risk and accelerate your change initiatives.' />
        <meta property='og:url' content='https://www.uncorksolutions.com/initiative-readiness-scan' />
        <meta property='og:image' content='https://www.uncorksolutions.com/initiative-readiness-scan-1.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image:alt' content='Front cover of Uncork Solutions’ Initiative Readiness Scan booklet' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Initiative Readiness Scan – Uncork Solutions' />
        <meta name='twitter:description' content='Get early access to the Initiative Readiness Scan — a proven tool to de-risk and accelerate your change initiatives.' />
        <meta name='twitter:image' content='https://www.uncorksolutions.com/initiative-readiness-scan-1.png' />
        <script
          type='application/ld+json'
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
        href='#main-content'
        id='skip-link'
        className='sr-only focus:not-sr-only absolute left-0 top-0 bg-white text-blue-700 p-2 z-50'
        tabIndex={0}
        style={{
          outline: '2px solid #2364e0',
          outlineOffset: '2px',
        }}
        onClick={e => {
          // Move focus to main content after skip link is activated
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

      <main id="main-content" tabIndex={-1} role="main" className="font-sans text-gray-800 w-full overflow-x-hidden">
        {/* HERO SECTION */}
        <section
          id="irs-hero"
          data-gtm="irs-section-hero"
          aria-label="Initiative Readiness Scan Hero"
          className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between py-8 md:py-8 px-4 md:px-8 lg:px-12 w-full max-w-screen-2xl mx-auto"
          style={{background: 'url("/dull-bg-compressed.png") center center / cover no-repeat',backgroundColor: SOFT_GREY_BG }}
        >
          {/* Booklet image, left */}
          <div className="flex-1 flex justify-center md:justify-end items-center md:items-start mb-10 md:mb-0 md:mr-12">
            <Image
              id="irs-hero-image"
              src="/initiative-readiness-scan-1.png"
              alt="Initiative Readiness Scan sample booklet"
              width={924}
              height={970}
              priority
              fetchPriority="high"
              className="w-full max-w-[420px] md:max-w-[520px] lg:max-w-[650px] xl:max-w-[820px] 2xl:max-w-[924px] h-auto drop-shadow-xl"
            />
          </div>
          {/* Hero text, right */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
            {/* 
            <div className="uppercase text-sm tracking-wide text-gray-700 mb-2" id="irs-free-tool-label">
              Free Digital Strategy Evaluation Tool
            </div>
            */}
            <h1 id="irs-hero-title" className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Most transformations fail. <span className="text-blue-700">Will yours be different?</span>
            </h1>
            <p id="irs-hero-subtitle" className="text-lg md:text-xl text-gray-700 mb-6">
              Don’t Gamble. Get Clarity.
              <br /><br />
              Unlock Early Access: The <span className="font-semibold text-blue-700">Initiative Readiness Scan</span> is your operator-built, boardroom-ready instrument to diagnose, de-risk, and accelerate high-stakes change—before momentum is lost and before reputations are on the line.
            </p>
            <ul className="text-base text-gray-700 mb-7 space-y-2 list-none" aria-label="Initiative Readiness Scan Benefits">
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-blue-700 text-lg">&#10003;</span>
                <span>Objective, confidential assessment&mdash;no consulting fluff</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-blue-700 text-lg">&#10003;</span>
                <span>Rapid radar chart revealing real risks, alignment, and readiness</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-blue-700 text-lg">&#10003;</span>
                <span>Actionable plan in days&mdash;not quarters</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-blue-700 text-lg">&#10003;</span>
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
          The graveyard of failed transformations is littered with good intentions, big budgets, and even bigger surprises.
        </div>
        <div className="text-center text-base md:text-lg text-slate-700 mb-8">
          Are you certain you’re not missing the risks that quietly kill most strategic initiatives before they deliver?
        </div>

        {/* OUTCOMES SECTION */}
        <section
        id="irs-outcomes"
        data-gtm="section-outcomes"
        aria-label="What You Get from the Initiative Readiness Scan"
        className={`${SOFT_GREY_BG} py-16 px-6 md:px-16`}
        >
        <div className="max-w-3xl mx-auto text-center">
            <h2 id="irs-outcomes-title" className="text-2xl md:text-3xl font-bold mb-6">
            From Uncertainty to Credible Action—in Days, Not Quarters.
            </h2>
            <p className="text-gray-700">
            Be the leader your organization turns to—clear, credible, proactive, and in control
            <br /><br />
            </p>
            <p> </p>
            <ul className="space-y-8 text-left max-w-2xl mx-auto">
            <li>
                <h3 className="font-semibold text-lg mb-1">1. Boardroom-Ready Confidence</h3>
                <p className="text-gray-700">
                Walk into your next executive meeting with a blueprint for success—ready to answer the tough questions, spotlight blind spots, and inspire confidence from the boardroom down.
                </p>
            </li>
            <li>
                <h3 className="font-semibold text-lg mb-1">2. Trusted Leadership</h3>
                <p className="text-gray-700">
                No surprises. You’ll own the roadmap, know the pitfalls, and bring your team together with a credible plan—before the risks become headlines.
                </p>
            </li>
            <li>
                <h3 className="font-semibold text-lg mb-1">3. Proactive Risk Management</h3>
                <p className="text-gray-700">
                Move forward with the confidence that your plan has been stress-tested—backed by real evidence you can share with the board and stakeholders.
                </p>
            </li>
            <li>
                <h3 className="font-semibold text-lg mb-1">4. Accelerated Alignment</h3>
                <p className="text-gray-700">
                Bring business and technology into immediate, visual clarity. No more siloed thinking—just momentum, traction, and execution.
                </p>
            </li>
            <li>
                <h3 className="font-semibold text-lg mb-1">5. Credible Execution, Not Just Talk</h3>
                <p className="text-gray-700">
                Turn ambition into action. Replace vague promises with a prioritized, actionable playbook—proving you’re ready, realistic, and already moving.
                </p>
            </li>
            </ul>
        </div>
        </section>

        {/* WILL IT HELP YOU NOW SECTION */}
        <section
          id="irs-help"
          data-gtm="section-help"
          aria-label="Will the Initiative Readiness Scan Help You Now"
          className="bg-white py-16 px-6 md:px-16"
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 id="irs-help-title" className="text-2xl font-bold mb-4">
                Will This Help You, Right Now?
              </h2>
              <p id="irs-help-desc" className="mb-6 text-gray-700">
                Most companies only see failure coming <em>after</em> the spend is committed. How certain are you this initiative will succeed—and how soon do you want the evidence? What would it cost if you found out too late?
                <br /><br />
                The Initiative Readiness Scan is built for leaders under real pressure. It benchmarks your organization across 6 axes, delivers a custom radar chart, and equips you with an operator’s battle-tested action plan to move forward with confidence.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6" aria-label="Scan Outcomes">
                <li id="irs-help-li-1">Benchmark your team on the metrics that drive transformation</li>
                <li id="irs-help-li-2">Address blind spots <em>before</em> you commit major resources</li>
                <li id="irs-help-li-3">Confidential, actionable, and designed for boardroom impact</li>
              </ul>
              <button
                id="irs-help-cta"
                aria-label="Get My Initiative Readiness Scan"
                data-gtm="cta-help"
                className="px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition"
                onClick={() => setShowModal(true)}
              >
                Get My Initiative Readiness Scan
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                id="irs-help-image"
                src="/initiative-readiness-scan-2.png"
                alt="Initiative Readiness Scan sample booklet"
                width={270}
                height={284}
                className="w-[220px] md:w-[270px] h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* WHO WE SERVE SECTION */}
        <section
        id='irs-who'
        data-gtm='section-who'
        aria-label='This Is For You If:'
        className={`${SOFT_GREY_BG} py-16 px-6 md:px-16`}
        >
        <div className='max-w-3xl mx-auto text-center'>
            <h2 id='irs-who-title' className='text-2xl font-bold mb-4'>
            Who Is This For?
            </h2>
            <p className='mb-8 text-gray-700 text-lg'>
            This isn’t for spectators or theorists. This is for leaders who carry the weight of real business outcomes:
            </p>
            <ul className='text-left space-y-4 text-base md:text-lg text-gray-800 mb-7 mx-auto max-w-xl list-none'>
            <li>
                <span className='font-semibold text-blue-700'>CIOs, CTOs, and CDOs:</span>
                {' '}Tech execs leading modernization, platform, or digital change. You&#39;ve felt the pain of past misses—and refuse to repeat them.
            </li>
            <li>
                <span className='font-semibold text-blue-700'>Business and Digital Executives:</span>
                {' '}VPs and Chiefs tasked with tying digital to real P&amp;L impact. You&#39;re bridging the gap between bold boardroom promises and operational realities.
            </li>
            <li>
                <span className='font-semibold text-blue-700'>Product, Engineering &amp; Ops Leaders:</span>
                {' '}You demand clarity, alignment, and results. Enough with consulting decks that never translate to action.
            </li>
            </ul>
            <p className='text-gray-600 italic text-base md:text-lg mt-6'>
            Our best-fit clients bear battle scars from past failed change, or are &#39;caught in the middle&#39; of bold ambition and real-world constraints.<br /><br />
            You want an <span className='font-semibold text-blue-700'>operator</span>, not a theorist. An <span className='font-semibold text-blue-700'>ally</span>, not just an advisor.
            </p>
            <button
            id='irs-who-cta'
            aria-label='Get My Initiative Readiness Scan'
            data-gtm='cta-who'
            className='mt-8 px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition'
            onClick={() => setShowModal(true)}
            >
            Get My Initiative Readiness Scan
            </button>
        </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section
        id="irs-how"
        data-gtm="section-how"
        aria-label="How Initiative Readiness Scan Works"
        className="bg-white py-16 px-6 md:px-16"
        >
        <div className="max-w-4xl mx-auto text-center">
            <h2 id="irs-how-title" className="text-2xl font-bold mb-8">
            How the Initiative Readiness Scan Works
            </h2>
            <p className="text-gray-700 text-lg mb-10">
            A methodical, operator-built process designed for clarity and action—delivered in days, not months.
            </p>
            <ol className="text-left space-y-8 max-w-2xl mx-auto">
            {/* Step 1 */}
            <li className="flex gap-4 items-start">
                <span className="text-3xl mt-1" aria-hidden="true">📝</span>
                <div>
                <div className="font-semibold text-lg mb-1">Step 1: Deep-Dive Online Readiness Survey</div>
                <div className="text-gray-700">
                    ~60 targeted questions, covering the 6 axes of transformation<br />
                    <span className="text-gray-500 text-sm">30–45 minutes, done at your convenience</span>
                </div>
                </div>
            </li>
            {/* Step 2 */}
            <li className="flex gap-4 items-start">
                <span className="text-3xl mt-1" aria-hidden="true">📊</span>
                <div>
                <div className="font-semibold text-lg mb-1">Step 2: Quantitative &amp; Qualitative Assessment</div>
                <div className="text-gray-700">
                    Auto-generated radar chart benchmarking your readiness vs. peers<br />
                    <span className="text-gray-500 text-sm">6-page RAG (Red-Amber-Green) scorecard spotlighting top risks</span>
                </div>
                </div>
            </li>
            {/* Step 3 */}
            <li className="flex gap-4 items-start">
                <span className="text-3xl mt-1" aria-hidden="true">🗺️</span>
                <div>
                <div className="font-semibold text-lg mb-1">Step 3: Prioritized Action Roadmap</div>
                <div className="text-gray-700">
                    8–10-page action plan with tactical next steps<br />
                    <span className="text-gray-500 text-sm">“Next 3 Moves” one-pager for immediate traction</span>
                </div>
                </div>
            </li>
            {/* Step 4 */}
            <li className="flex gap-4 items-start">
                <span className="text-3xl mt-1" aria-hidden="true">🤝</span>
                <div>
                <div className="font-semibold text-lg mb-1">Step 4: Executive Debrief &amp; Alignment</div>
                <div className="text-gray-700">
                    60-minute virtual session to align your team and kickstart execution
                </div>
                </div>
            </li>
            </ol>
            {/* What You Get Section */}
            <div className="mt-14 max-w-2xl mx-auto rounded-2xl bg-[#f1f2f4] p-8 shadow text-left">
            <div className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">🎯</span>
                What You Get
            </div>
            <ul className="space-y-2 text-gray-700 pl-1">
                <li className="flex gap-2 items-start"><span className="text-blue-700 mt-[2px]">&#10003;</span>Visual readiness dashboard (6-axis radar)</li>
                <li className="flex gap-2 items-start"><span className="text-blue-700 mt-[2px]">&#10003;</span>Clear, prioritized gap list and peer benchmarks</li>
                <li className="flex gap-2 items-start"><span className="text-blue-700 mt-[2px]">&#10003;</span>Immediate, actionable next steps—no jargon, no fluff</li>
                <li className="flex gap-2 items-start"><span className="text-blue-700 mt-[2px]">&#10003;</span>Boardroom-ready summary for fast leadership buy-in</li>
            </ul>
            </div>
        </div>
            <button
                id="irs-how-cta"
                aria-label="Get My Initiative Readiness Scan"
                data-gtm="cta-how"
                className="mt-10 mb-2 px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition block mx-auto"
                onClick={() => setShowModal(true)}
              >
                Get My Initiative Readiness Scan
            </button>
        </section>

        {/* WHY US SECTION */}
        <section
          id="irs-why"
          data-gtm="section-why"
          aria-label="Why Uncork Solutions"
          className={`${SOFT_GREY_BG} py-16 px-6 md:px-16`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="irs-why-title" className="text-2xl font-bold mb-4">
              Why Uncork Solutions?
            </h2>
            <p id="irs-why-desc" className="mb-5 text-gray-700 text-lg">
              We know the traps—and how to avoid them. Uncork Solutions delivers the clarity, alignment, and risk reduction leaders need to move decisively from intent to action. The Initiative Readiness Scan is your shortcut to real insight, built for executives by transformation experts.
            </p>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section
          id="irs-final"
          data-gtm="section-final"
          aria-label="Final Call to Action"
          className="bg-white py-16 px-6 md:px-16"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 id="irs-final-title" className="text-2xl font-bold mb-4">
                Ready to Accelerate Your Next Initiative?
              </h2>
              <p id="irs-final-desc" className="mb-6 text-gray-700 text-lg">
                This comprehensive, operator-built scan surfaces hidden risks, aligns business and tech, and delivers a prioritized, board-ready action plan—so you know exactly where you stand and what to do next.
              </p>
              <button
                id="irs-final-cta"
                aria-label="Get My Initiative Readiness Scan"
                data-gtm="cta-final"
                className="px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition"
                onClick={() => setShowModal(true)}
              >
                Get My Initiative Readiness Scan
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                id="irs-final-image"
                src="/initiative-readiness-scan-2.png"
                alt="Initiative Readiness Scan sample booklet"
                width={270}
                height={284}
                className="w-[220px] md:w-[270px] h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </section>
        
        {/* FOUNDER SECTION */}
        <section
        id="irs-founder"
        aria-label="Founder Highlight"
        className={`${SOFT_GREY_BG} py-12 px-6 md:px-16`}
        >
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Headshot */}
            <div className="flex-shrink-0 w-44">
            <div className="rounded-xl overflow-hidden border-b-4" style={{ borderColor: '#2364e0' /* CTA Blue */ }}>
                <Image
                src="/tovi-headshot.png"
                alt="Tovi Heilbronn, Founder, Uncork Solutions"
                width={305}
                height={305}
                className="w-full h-auto object-cover"
                />
            </div>
            </div>
            {/* Founder Text */}
            <div>
            <h3 className="text-lg font-semibold mb-2">Tovi Heilbronn</h3>
            <div className="text-sm text-gray-600 mb-1">Founder, Uncork Solutions</div>
            <p className="text-gray-700 leading-relaxed">
                17+ years driving digital transformation and technology strategy for enterprise clients—turning complexity into measurable business outcomes across digital, product, and platform modernization.<br />
                <span className="block mt-2 text-gray-500 italic">
                &quot;I believe every client deserves clear answers and practical direction—without the drag of drawn-out consulting engagements.&quot;
                </span>
            </p>
            </div>
        </div>
        </section>

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