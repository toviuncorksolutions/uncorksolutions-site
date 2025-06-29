import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import FREE_EMAIL_DOMAINS from '../utils/freeEmailDomains';
import Image from 'next/image';
import Link from 'next/link';

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

export default function Home() {
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
  const firstNameRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (showModal && firstNameRef.current) {
      firstNameRef.current.focus();
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
    } catch (err) {
      console.error(err); // or log to a service, etc.
      setError('There was a problem submitting the form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Claim My Initiative Readiness Scan Spot – Uncork Solutions</title>
        <meta
          name="description"
          content="Claim my spot to get early access to the Initiative Readiness Scan—a proven tool to de-risk and accelerate your change initiatives."
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

      <main className="text-gray-800 font-sans">
        {/* HERO SECTION */}
        <section id="hero" data-gtm="hero-section" className="bg-uncork-img text-center py-16 px-6">
          <h1 className="text-4xl font-bold mb-4">
            Is Your Organization Actually Ready for Transformation?
          </h1>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Get early access to the Initiative Readiness Scan—a proven tool to diagnose, de-risk,
            and accelerate your strategic change initiatives in 2025.
          </p>
          <button
            onClick={() => setShowModal(true)}
            id="hero-cta"
            data-gtm="cta-hero"
            className="cta-btn"
          >
            Claim My Initiative Readiness Scan Spot
          </button>
        </section>

        {/* FEATURES SECTION */}
        <section
          id="features"
          data-gtm="features-section"
          className="bg-uncork-img grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 items-center"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">Claim My Initiative Readiness Scan Spot</h2>
            <p className="mb-4">
              We’re building a powerful, data-backed framework to help leaders like you answer the
              critical question:
            </p>
            <blockquote className="italic mb-4 text-gray-700">
              &ldquo;Are we really ready for change&mdash;or are we about to waste 6 months and millions of
              dollars?&rdquo;
            </blockquote>
            <ul className="list-disc list-inside space-y-2">
              <li>Benchmark your organization across 6 critical axes of change readiness</li>
              <li>Get a custom radar chart with strengths, blind spots, and tactical next steps</li>
              <li>
                Access exclusive strategies and success patterns from tech, finance, and healthcare
                transformations
              </li>
              <li>
                Participate in a limited beta with feedback from top operators and executive coaches
              </li>
            </ul>
            <button
              onClick={() => setShowModal(true)}
              id="features-cta"
              data-gtm="cta-features"
              className="cta-btn"
            >
              Claim My Initiative Readiness Scan Spot
            </button>
          </div>
        </section>

        {/* OUTCOMES SECTION */}
        <section id="outcomes" data-gtm="outcomes-section" className="bg-white py-16 px-8">
          <h2 className="text-2xl font-bold text-center mb-10">
            Initiative Readiness Scan: What You&apos;ll Gain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mb-2 text-3xl">🏁</div>
              <h3 className="font-semibold mb-2">Getting More Wins</h3>
              <p>
                Learn how mastering transformation readiness can accelerate adoption, reduce
                resistance, and unlock strategic wins faster.
              </p>
            </div>
            <div>
              <div className="mb-2 text-3xl">🚫</div>
              <h3 className="font-semibold mb-2">Avoiding Costly Failure</h3>
              <p>
                Avoid the #1 reason major change efforts fail&mdash;launching without organizational
                readiness. Use this tool as your early-warning system.
              </p>
            </div>
            <div>
              <div className="mb-2 text-3xl">📈</div>
              <h3 className="font-semibold mb-2">Why It Matters</h3>
              <p>
                In today&apos;s environment, transformation is constant. But success still depends on
                people, process, and trust. This tool helps you assess&mdash;and address&mdash;all three.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section
          id="about"
          data-gtm="about-section"
          className="bg-uncork-img py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="mb-4">
              Our team has guided 100+ organizations through large-scale transformation efforts
              across Amazon, Meta, finance, and healthcare. We&apos;ve seen what works&mdash;and what fails.
              This scan distills that insight into a tool that helps leaders take action, not
              just reflect.
            </p>
            <button
              onClick={() => setShowModal(true)}
              id="about-cta"
              data-gtm="cta-about"
              className="cta-btn"
            >
              Claim My Initiative Readiness Scan Spot
            </button>
          </div>
        </section>

        {/* BONUS OFFER SECTION */}
        <section id="bonus" data-gtm="bonus-section" className="bg-white py-16 px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Bonus Offer 🎁</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Answer 5 quick questions and claim your Initiative Readiness Scan spot now. As a bonus,
            you&apos;ll get:
          </p>
          <ul className="list-disc list-inside max-w-xl mx-auto mb-6 text-left">
            <li>A free readiness radar chart template</li>
            <li>Priority access to the live beta cohort</li>
            <li>A chance to join our inner circle roundtable on transformation in July</li>
          </ul>
          <button
            onClick={() => setShowModal(true)}
            id="bonus-cta"
            data-gtm="cta-bonus"
            className="cta-btn"
          >
            Claim My Initiative Readiness Scan Spot
          </button>
          <p className="mb-6 max-w-2xl mx-auto">
            Ready to de-risk your next initiative — and avoid becoming the next cautionary tale?
            Claim your Initiative Readiness Scan spot before the next cohort fills.
          </p>
        </section>

        {/* FOOTER SECTION */}
        <footer className="footer-bg">
          <div className="footer-container">
            <Image
              src="/uncork-solutions-logo.png"
              alt="Uncork Solutions logo"
              className="object-contain mx-auto w-32 sm:w-44 h-auto"
              width={176}
              height={72}
              priority
            />
            <div className="footer-policies">
              <Link href="/cookie-policy" className="footer-policy-link">
                Cookie Policy
              </Link>
              <Link href="/privacy-policy" className="footer-policy-link">
                Privacy Policy
              </Link>
              <Link href="/accessibility-policy" className="footer-policy-link">
                Accessibility Policy
              </Link>
            </div>
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} Uncork Solutions. All rights reserved.
            </div>
          </div>
        </footer>

        {/* MODAL FORM POPUP */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            data-gtm="waitlist-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-modal-title"
            onClick={() => setShowModal(false)} // Closes modal if clicking the overlay
            tabIndex={-1}
            onKeyDown={(e) => {
              if (e.key === 'Escape') setShowModal(false);
            }}
          >
            <div
              className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()} // Prevents closing if clicking inside modal
            >
              <h2 id="waitlist-modal-title" className="text-xl font-semibold mb-4 text-center">
                You&apos;re Almost There&mdash;Help Us Tailor Your Experience
              </h2>
              <h3 className="text-base font-normal text-gray-600 mb-6 text-center">
                We keep this confidential and use it only to deliver the best possible scan
                for your unique situation.
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="firstName" className="sr-only">
                      First Name
                    </label>
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
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="lastName" className="sr-only">
                      Last Name
                    </label>
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
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
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
                  />
                </div>
                <div>
                  <label htmlFor="challenge" className="sr-only">
                    Main Challenge
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    placeholder="What’s the main pain point you&apos;re solving for right now?"
                    className="w-full p-2 border rounded"
                    rows="1"
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="outcome" className="sr-only">
                    Desired Outcome
                  </label>
                  <textarea
                    id="outcome"
                    name="outcome"
                    placeholder="What outcome are you trying to achieve?"
                    className="w-full p-2 border rounded"
                    rows="1"
                    value={formData.outcome}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="obstacle" className="sr-only">
                    Obstacles
                  </label>
                  <textarea
                    id="obstacle"
                    name="obstacle"
                    placeholder="What obstacles are in the way?"
                    className="w-full p-2 border rounded"
                    rows="1"
                    value={formData.obstacle}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="alternatives" className="sr-only">
                    Alternatives
                  </label>
                  <textarea
                    id="alternatives"
                    name="alternatives"
                    placeholder="What other solutions or options are you considering?"
                    className="w-full p-2 border rounded"
                    rows="1"
                    value={formData.alternatives}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lowPrice" className="sr-only">
                    Lowest Price
                  </label>
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
                  />
                </div>
                <div>
                  <label htmlFor="highPrice" className="sr-only">
                    Highest Price
                  </label>
                  <input
                    id="highPrice"
                    type="number"
                    inputMode="numeric"
                    pattern="\d*"
                    name="highPrice"
                    placeholder="What price is too expensive for high value? *"
                    className="w-full p-2 border rounded"
                    value={formData.highPrice}
                    onChange={handleChange}
                    required
                    min="0"
                    step="1"
                  />
                </div>
                <div>
                  <label htmlFor="decisionAuthority" className="sr-only">
                    Who will lead the decision for this?
                  </label>
                  <select
                    id="decisionAuthority"
                    name="decisionAuthority"
                    className="w-full p-2 border rounded"
                    value={formData.decisionAuthority}
                    onChange={handleChange}
                    required
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
                  <label htmlFor="timeline" className="sr-only">
                    How soon will you move forward with a solution? *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full p-2 border rounded"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
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
                {error && <div className="text-red-600 text-sm">{error}</div>}
                <div className="flex justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full cta-btn"
                    disabled={submitting}
                    aria-label="Register"
                    data-gtm="register-submit"
                  >
                    {submitting ? 'Registering...' : 'Register'}
                  </button>
                  <button
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