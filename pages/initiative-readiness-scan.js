import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Free email domains list (import from your utils if available)
const FREE_EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com', 'outlook.com', 'icloud.com', 'mail.com', 'msn.com'
];

const SOFT_GREY_BG = 'bg-[#f1f2f4]';

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL;

const REQUIRED_FIELDS = [
  'firstName',
  'lastName',
  'email',
  'challenge',
  'outcome',
  'obstacle',
  'alternatives',
  'lowPrice',
  'highPrice',
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
    alternatives: '',
    lowPrice: '',
    highPrice: '',
    decisionAuthority: '',
    timeline: '',
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const modalRef = useRef(null);
  const firstNameRef = useRef(null);

  useEffect(() => {
    if (showModal) {
      modalRef.current?.focus();
      setTimeout(() => {
        firstNameRef.current?.focus();
      }, 100);
    }
  }, [showModal]);

  useEffect(() => {
    if (showModal) setError('');
  }, [showModal]);

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

    const low = Number(formData.lowPrice);
    const high = Number(formData.highPrice);

    if (
      !Number.isFinite(low) ||
      !Number.isFinite(high) ||
      !Number.isInteger(low) ||
      !Number.isInteger(high) ||
      low < 0 ||
      high < 0
    ) {
      setError('Please enter positive whole numbers for price fields.');
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
        alternatives: '',
        lowPrice: '',
        highPrice: '',
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
        <title>Initiative Readiness Scan – Uncork Solutions</title>
        <meta
          name="description"
          content="Get early access to the Initiative Readiness Scan — a proven tool to de-risk and accelerate your change initiatives."
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://www.uncorksolutions.com#organization',
              name: 'Uncork Solutions',
              url: 'https://www.uncorksolutions.com',
              logo: 'https://www.uncorksolutions.com/uncork-solutions-logo.png',
              description:
                'Technology strategy and digital transformation consulting for mid-market and enterprise businesses.',
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
              makesOffer: {
                '@type': 'Service',
                name: 'Initiative Readiness Scan',
                serviceType: 'Organizational Assessment',
                provider: {
                  '@type': 'Organization',
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

      <main className="font-sans text-gray-800 w-full overflow-x-hidden">
        {/* HERO SECTION */}
        <section
          id="irs-hero"
          data-gtm="irs-section-hero"
          aria-label="Initiative Readiness Scan Hero"
          className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between py-8 md:py-14 px-4 md:px-8 lg:px-12 w-full max-w-screen-2xl mx-auto"
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
              Is Your Organization Actually <span className="text-blue-700">Ready for Transformation?</span>
            </h1>
            <p id="irs-hero-subtitle" className="text-lg md:text-xl text-gray-700 mb-6">
              Get early access to the <span className="font-semibold text-blue-700">Initiative Readiness Scan</span>&mdash;a proven tool to diagnose, de-risk, and accelerate your strategic change initiatives.
            </p>
            <ul className="text-base text-gray-700 mb-7 space-y-2 list-none" aria-label="Initiative Readiness Scan Benefits">
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-blue-700 text-lg">&#10003;</span>
                <span id="irs-benefit-1">Boardroom-ready, unbiased assessment &amp; action plan</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-blue-700 text-lg">&#10003;</span>
                <span id="irs-benefit-2">Identify risks. Align teams. Accelerate your next big win.</span>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-blue-700 text-lg">&#10003;</span>
                <span id="irs-benefit-3">Prepared for you&mdash;confidential &amp; proprietary</span>
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
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-white border-2 border-blue-700 text-blue-700 font-semibold text-lg shadow hover:bg-blue-50 transition"
                onClick={() => {
                  document.getElementById('irs-about')?.scrollIntoView({ behavior: 'smooth' });
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
            Look and feel clear, credible, proactive, and in control
            </p>
            <ul className="space-y-8 text-left max-w-2xl mx-auto">
            <li>
                <h3 className="font-semibold text-lg mb-1">1. Boardroom-Ready Confidence</h3>
                <p className="text-gray-700">
                You’ll walk into your next executive meeting with clarity on what needs to happen—able to answer tough questions and proactively surface (and solve) issues before they become problems.
                </p>
            </li>
            <li>
                <h3 className="font-semibold text-lg mb-1">2. Trusted Leadership</h3>
                <p className="text-gray-700">
                Instead of being caught off guard, you’ll be the leader who already has the roadmap, knows where the blind spots are, and brings the team together with a concrete plan.
                </p>
            </li>
            <li>
                <h3 className="font-semibold text-lg mb-1">3. Proactive Risk Management</h3>
                <p className="text-gray-700">
                You’ll move forward with the confidence of knowing you’ve stress-tested your plan—and can show the board, with evidence, where you’re ready and how you’ll close any gaps.
                </p>
            </li>
            <li>
                <h3 className="font-semibold text-lg mb-1">4. Accelerated Alignment</h3>
                <p className="text-gray-700">
                You’ll have immediate, visual clarity—so business and tech are finally rowing in the same direction, and your initiative moves from talk to traction.
                </p>
            </li>
            <li>
                <h3 className="font-semibold text-lg mb-1">5. Credible Execution, Not Just Talk</h3>
                <p className="text-gray-700">
                No more vague promises. You’ll have a prioritized, actionable plan that shows the organization (and your stakeholders) you’re prepared, realistic, and ready to deliver.
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
                Will It Help You Now?
              </h2>
              <p id="irs-help-desc" className="mb-6 text-gray-700">
                The Readiness Scan is built for leaders under real pressure. It benchmarks your organization across 6 axes, gives you a custom radar chart, and provides battle-tested strategies for next steps.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6" aria-label="Scan Outcomes">
                <li id="irs-help-li-1">Benchmark your team on the axes that drive transformation</li>
                <li id="irs-help-li-2">Spot blind spots and address them before you commit major spend</li>
                <li id="irs-help-li-3">Confidential, actionable, and boardroom-ready</li>
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
                src="/initiative-readiness-scan-sample-3.png"
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
        aria-label='Who We Serve'
        className={`${SOFT_GREY_BG} py-16 px-6 md:px-16`}
        >
        <div className='max-w-3xl mx-auto text-center'>
            <h2 id='irs-who-title' className='text-2xl font-bold mb-4'>
            Who We Serve
            </h2>
            <p className='mb-8 text-gray-700 text-lg'>
            This is for leaders who carry the weight of real business outcomes—typically:
            </p>
            <ul className='text-left space-y-4 text-base md:text-lg text-gray-800 mb-7 mx-auto max-w-xl list-none'>
            <li>
                <span className='font-semibold text-blue-700'>CIOs, CTOs, and CDOs:</span>
                {' '}Tech executives driving modernization, platform, or digital change. They&#39;ve been burned by past initiatives that missed the mark or failed to launch
            </li>
            <li>
                <span className='font-semibold text-blue-700'>Business and Digital Executives:</span>
                {' '}VPs and Chiefs tasked with tying digital to true P&amp;L impact. They&#39;re struggling to bridge the gap between bold boardroom promises and the practical realities of technology
            </li>
            <li>
                <span className='font-semibold text-blue-700'>Product, Engineering &amp; Ops Leaders:</span>
                {' '}They need clarity, alignment, and results — not another layer of consulting jargon. They&#39;re tired of strategy decks that never translate to action
            </li>
            </ul>
            <p className='text-gray-600 italic text-base md:text-lg mt-6'>
            My best-fit clients have either the battle scars of past failed change, or are &#39;caught in the middle&#39; of business ambition and technical constraints.<br />
            They want an <span className='font-semibold text-blue-700'>operator</span>, not a theorist; an <span className='font-semibold text-blue-700'>ally</span>, not just another advisor.
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
            <h2 id="irs-how-title" className="text-2xl font-bold mb-4">
              How It Works
            </h2>
            <ol className="list-decimal list-inside text-gray-700 text-lg mb-6 space-y-2" aria-label="Scan Steps">
              <li id="irs-how-step-1">Take the scan&mdash;complete a few questions about your current state.</li>
              <li id="irs-how-step-2">Get your readiness radar and next-step action plan.</li>
              <li id="irs-how-step-3">Access leadership tips and real-world examples based on your score.</li>
            </ol>
          </div>
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
              Our team has guided 100+ organizations through complex transformations across tech, finance, healthcare, and more. We know where the traps are&mdash;and how to help you avoid them.
              <br /><br />
              The Initiative Readiness Scan is your shortcut to insight, alignment, and risk reduction&mdash;designed for executives, by experts.
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
                This is a comprehensive, operator-built scan that surfaces hidden risks, aligns business and tech, and delivers a prioritized, board-ready action plan—so you know exactly where you stand and what to do next.
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
                src="/initiative-readiness-scan-sample-3.png"
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
                Placeholder bio copy here. Share your expertise, approach, or a personal note on why you help leaders succeed with transformation.<br />
                <span className="block mt-2 text-gray-500 italic">
                &quot;I believe every organization deserves a clear, data-backed path to confident execution.&quot;
                </span>
            </p>
            </div>
        </div>
        </section>

        {/* FOOTER */}
        <footer
          id="irs-footer"
          data-gtm="footer"
          aria-label="Site Footer"
          className="py-8 px-6 md:px-16 mt-4"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <Image
              id="irs-footer-logo"
              src="/uncork-solutions-logo.png"
              alt="Uncork Solutions logo"
              width={160}
              height={60}
              className="object-contain mb-4 md:mb-0"
            />
            <div className="text-gray-500 text-sm text-center md:text-right">
              &copy; {new Date().getFullYear()} Uncork Solutions. All rights reserved.
              <br />
              <a href="/privacy-policy" className="underline hover:text-blue-700">Privacy Policy</a>
              <span aria-hidden="true" className="text-gray-400"> | </span>
              <a href="/accessibility-policy" className="underline hover:text-blue-700">Accessibility Policy</a>
            </div>
          </div>
        </footer>

        {/* MODAL FORM POPUP */}
        {showModal && (
          <div
            id="irs-modal"
            data-gtm="waitlist-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-modal-title"
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            tabIndex={-1}
            ref={modalRef}
            onClick={() => setShowModal(false)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setShowModal(false);
            }}
          >
            <div
              className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl overflow-y-auto max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              <h2
                id="waitlist-modal-title"
                className="text-xl font-semibold mb-4 text-center"
              >
                You&apos;re Almost There&mdash;Help Us Tailor Your Experience
              </h2>
              <h3 className="text-base font-normal text-gray-600 mb-6 text-center">
                We keep this confidential and use it only to deliver the best possible scan for your unique situation.
              </h3>
              <form
                id="waitlist-form"
                aria-label="Initiative Readiness Scan Waitlist"
                autoComplete="on"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input
                      ref={firstNameRef}
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder="First name *"
                      className="p-2 border rounded w-full"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      autoComplete="given-name"
                      aria-label="First Name"
                      data-gtm="input-firstname"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder="Last name *"
                      className="p-2 border rounded w-full"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      autoComplete="family-name"
                      aria-label="Last Name"
                      data-gtm="input-lastname"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="w-full p-2 border rounded"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    aria-label="Work Email"
                    data-gtm="input-email"
                  />
                </div>
                <div>
                  <label htmlFor="challenge" className="sr-only">Main Challenge</label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    placeholder="What’s the main pain point you&apos;re solving for right now?"
                    className="w-full p-2 border rounded"
                    rows={1}
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                    aria-label="Main Challenge"
                    data-gtm="input-challenge"
                  />
                </div>
                <div>
                  <label htmlFor="outcome" className="sr-only">Desired Outcome</label>
                  <textarea
                    id="outcome"
                    name="outcome"
                    placeholder="What outcome are you trying to achieve?"
                    className="w-full p-2 border rounded"
                    rows={1}
                    value={formData.outcome}
                    onChange={handleChange}
                    required
                    aria-label="Desired Outcome"
                    data-gtm="input-outcome"
                  />
                </div>
                <div>
                  <label htmlFor="obstacle" className="sr-only">Obstacles</label>
                  <textarea
                    id="obstacle"
                    name="obstacle"
                    placeholder="What obstacles are in the way?"
                    className="w-full p-2 border rounded"
                    rows={1}
                    value={formData.obstacle}
                    onChange={handleChange}
                    required
                    aria-label="Obstacles"
                    data-gtm="input-obstacle"
                  />
                </div>
                <div>
                  <label htmlFor="alternatives" className="sr-only">Alternatives</label>
                  <textarea
                    id="alternatives"
                    name="alternatives"
                    placeholder="What other solutions or options are you considering?"
                    className="w-full p-2 border rounded"
                    rows={1}
                    value={formData.alternatives}
                    onChange={handleChange}
                    required
                    aria-label="Alternatives"
                    data-gtm="input-alternatives"
                  />
                </div>
                <div>
                  <label htmlFor="lowPrice" className="sr-only">Lowest Price</label>
                  <input
                    id="lowPrice"
                    type="number"
                    inputMode="numeric"
                    pattern="\d*"
                    name="lowPrice"
                    placeholder="What price would make this a great deal? *"
                    className="w-full p-2 border rounded"
                    value={formData.lowPrice}
                    onChange={handleChange}
                    required
                    min="0"
                    step="1"
                    aria-label="Lowest Price"
                    data-gtm="input-lowprice"
                  />
                </div>
                <div>
                  <label htmlFor="highPrice" className="sr-only">Highest Price</label>
                  <input
                    id="highPrice"
                    type="number"
                    inputMode="numeric"
                    pattern="\d*"
                    name="highPrice"
                    placeholder="What's the max you'd pay for high value? *"
                    className="w-full p-2 border rounded"
                    value={formData.highPrice}
                    onChange={handleChange}
                    required
                    min="0"
                    step="1"
                    aria-label="Highest Price"
                    data-gtm="input-highprice"
                  />
                </div>
                <div>
                  <label htmlFor="decisionAuthority" className="sr-only">Who will lead the decision for this?</label>
                  <select
                    id="decisionAuthority"
                    name="decisionAuthority"
                    className="w-full p-2 border rounded"
                    value={formData.decisionAuthority}
                    onChange={handleChange}
                    required
                    aria-label="Decision Authority"
                    data-gtm="input-decisionauthority"
                  >
                    <option value="" disabled>
                      Who will lead the decision for this? *
                    </option>
                    <option value="Myself">Myself</option>
                    <option value="Part of a team">I&apos;m part of a team</option>
                    <option value="Someone else">Someone else</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="sr-only">How soon will you move forward with a solution? *</label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full p-2 border rounded"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    aria-label="Decision Timeline"
                    data-gtm="input-timeline"
                  >
                    <option value="" disabled>
                      How soon will you move forward with a solution? *
                    </option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-3 months">1–3 months</option>
                    <option value="3-6 months">3–6 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
                {error && (
                  <div className="text-red-600 text-sm" role="alert" id="waitlist-form-error">
                    {error}
                  </div>
                )}
                <div className="flex justify-between gap-4">
                  <button
                    id="waitlist-submit"
                    type="submit"
                    className="w-full cta-btn bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800 transition"
                    disabled={submitting}
                    aria-label="Register"
                    data-gtm="register-submit"
                  >
                    {submitting ? 'Registering...' : 'Register'}
                  </button>
                  <button
                    id="waitlist-cancel"
                    type="button"
                    onClick={() => setShowModal(false)}
                    disabled={submitting}
                    className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    aria-label="Cancel"
                    data-gtm="modal-cancel"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </>
  );
}