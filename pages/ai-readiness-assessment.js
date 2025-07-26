import Head from 'next/head';
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import AraModal from '../components/AraModal';

const FREE_EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com', 'outlook.com', 'icloud.com', 'mail.com', 'mailinator.com', 'msn.com'
];

const SOFT_GREY_BG = 'bg-[#f1f2f4]';

const WEBHOOK_URL = process.env.NEXT_PUBLIC_AI_READINESS_ASSESSMENT_RESPONSES_WEBHOOK_URL;
const REQUIRED_FIELDS = ['email'];

export default function AIReadinessAssessment() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ email: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const modalRef = useRef(null);
  const emailRef = useRef(null);

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
          event: 'aiReadinessAssessmentWaitlistFormSubmitted',
          category: 'AI Readiness Assessment Waitlist Form',
          action: 'Submit',
          label: normalizedEmail,
          formData: { ...formData, email: normalizedEmail },
        });
      }
      setShowModal(false);
      setFormData({ email: '' });
      await router.push('/ai-readiness-assessment-waitlist-confirmation');
    } catch {
      setError('There was a problem submitting the form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>AI Readiness Assessment & Enterprise AI Action Plan – Uncork Solutions</title>
        <meta
          name='description'
          content='Give your board something no consultant, vendor, or AI guru can: a boardroom weapon, not a checkbox. Diagnose your entire business for AI transformation. Boardroom-grade, enterprise-wide assessment.'
        />
        <link rel='canonical' href='https://www.uncorksolutions.com/ai-readiness-assessment' />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='AI Readiness Assessment & Enterprise AI Action Plan – Uncork Solutions' />
        <meta property='og:description' content='Give your board something no consultant, vendor, or AI guru can: a boardroom weapon, not a checkbox. Diagnose your entire business for AI transformation.' />
        <meta property='og:url' content='https://www.uncorksolutions.com/ai-readiness-assessment' />
        <meta property='og:image' content='https://www.uncorksolutions.com/ai-readiness-scan-1.png' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='AI Readiness Assessment & Enterprise AI Action Plan – Uncork Solutions' />
        <meta name='twitter:description' content='Give your board something no consultant, vendor, or AI guru can: a boardroom weapon, not a checkbox. Diagnose your entire business for AI transformation.' />
        <meta name='twitter:image' content='https://www.uncorksolutions.com/ai-readiness-scan-1.png' />

        {/* SCHEMA MARKUP: Organization & Service */}
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
              makesOffer: [
                {
                  '@type': 'ConsultingService',
                  name: 'AI Readiness Assessment',
                  serviceType: 'AI Transformation, Boardroom AI Assessment, Digital Transformation Consulting, Organizational Assessment',
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
        type='application/ld+json'
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
                {
                '@type': 'Question',
                name: 'What exactly is the AI Readiness Assessment?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The AI Readiness Assessment is a 16-page, boardroom-grade diagnostic playbook that evaluates your entire organization’s readiness for enterprise AI. Unlike typical maturity models, it delivers actionable insights, clear next steps, and named owners—giving you a strategic advantage in AI transformation.'
                }
                },
                {
                '@type': 'Question',
                name: 'How is this different from other AI assessments or maturity models?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Most AI assessments are generic, IT-focused, or provide only a “score.” The AI Readiness Assessment is built for decision-makers. It’s enterprise-holistic, covers eight key business pillars, and provides a tailored action plan with deadlines and accountability—not just a checkbox exercise.'
                }
                },
                {
                '@type': 'Question',
                name: 'How long does the assessment take to complete?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The assessment takes approximately 20 minutes to complete. It’s designed to be efficient for busy executives, while still covering all critical dimensions of AI readiness.'
                }
                },
                {
                '@type': 'Question',
                name: 'Who should participate in the assessment?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The assessment is intended for senior executives and their direct reports who are responsible for AI, technology, product, data, operations, or compliance. It’s ideal for CIOs, CTOs, CDOs, and other board-facing leaders.'
                }
                },
                {
                '@type': 'Question',
                name: 'Is the assessment confidential?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, absolutely. All answers and the resulting report are strictly confidential. Your information is never shared with any third parties—no exceptions.'
                }
                },
                {
                '@type': 'Question',
                name: 'How and when do I receive my results?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Your personalized, 16-page playbook is typically delivered to your inbox the same day you complete the assessment. It’s ready to share with your board or leadership team immediately.'
                }
                },
                {
                '@type': 'Question',
                name: 'Is this a vendor pitch or truly neutral?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The AI Readiness Assessment is 100% vendor-neutral. There are no sales pitches or hidden agendas—just a clear-eyed, operator-grade assessment of your organization’s AI readiness.'
                }
                },
                {
                '@type': 'Question',
                name: 'What does the final deliverable include?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You receive a 16-page PDF report featuring an executive summary, a radar chart, deep dives across eight business dimensions, prioritized action plans, and exportable content for board, audit, and compliance needs.'
                }
                },
                {
                '@type': 'Question',
                name: 'How much does the assessment cost?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Early access to the AI Readiness Assessment is free for qualifying executives in enterprise or mid-market organizations. If you’re leading AI transformation at scale, request priority access to secure your complimentary assessment.'
                }
                }
            ]
            })
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

      <main id='main-content' tabIndex={-1} role='main' className='font-sans text-gray-800 w-full overflow-x-hidden'>

        {/* HERO */}
        <section aria-labelledby='hero-title' className='relative overflow-hidden flex flex-col md:flex-row items-center justify-between py-8 md:py-8 px-4 md:px-8 lg:px-12 w-full max-w-screen-2xl mx-auto'
          style={{
            background: 'url("/dull-bg-compressed.png") center center / cover no-repeat',
            backgroundColor: SOFT_GREY_BG,
          }}
        >
          <div className='flex-1 flex justify-center md:justify-end items-center md:items-start mb-10 md:mb-0 md:mr-12'>
            <Image
              id='hero-ai-booklet-img'
              src='/ai-readiness-scan-1.png'
              alt="Front cover of Uncork Solutions' AI Readiness Assessment sample booklet."
              width={924}
              height={970}
              priority
              className='w-full max-w-[420px] md:max-w-[520px] lg:max-w-[650px] xl:max-w-[820px] 2xl:max-w-[924px] h-auto drop-shadow-xl'
            />
          </div>
          <div className='flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl'>
            <h1 id='hero-title' className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight'>
              Be the Boardroom Hero Who <span className="text-blue-700">Delivers Enterprise AI Results</span>, Not Just Point Solutions.
            </h1>
            <p className='text-lg md:text-xl text-gray-700 mb-6'>
              Right now, most AI initiatives are stuck in &quot;theatre&quot;—big talk, little action. The <span className="font-semibold text-blue-700">AI Readiness Assessment</span> is your unfair advantage: a 16-page, boardroom-grade playbook built to turn your company into the market leader for enterprise-wide AI transformation.
            </p>
            <p className='text-base md:text-lg text-gray-700 mb-6'>
              This isn’t a toolkit or a quick fix. It’s your <em>category-defining diagnostic</em>—the first and only assessment designed to treat AI as a new era of business, not just another IT project.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start mb-4' role='group' aria-label='Primary actions'>
              <button
                id='hero-cta-primary'
                ref={emailRef}
                aria-label='Get My AI Readiness Assessment'
                aria-haspopup='dialog'
                data-gtm='cta-hero-primary'
                className='w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition focus:outline-none focus:ring-4 focus:ring-blue-400'
                onClick={() => setShowModal(true)}
                tabIndex={0}
              >
                Get My AI Readiness Assessment
              </button>
              <button
                id='hero-cta-secondary'
                aria-label='Learn how the AI Readiness Assessment works'
                data-gtm='cta-hero-secondary'
                className='w-full sm:w-auto px-8 py-3 rounded-xl bg-white border-2 border-blue-700 text-blue-700 font-semibold text-lg shadow hover:bg-blue-50 transition focus:outline-none focus:ring-4 focus:ring-blue-400'
                onClick={() => { document.getElementById('ai-how')?.scrollIntoView({ behavior: 'smooth' }); }}
                tabIndex={0}
              >
                How It Works
              </button>
            </div>
            <div className='text-sm text-gray-500 mt-2' id='ai-early-access-label'>
              Priority access is limited to executives ready to deliver, not just discuss. If that&#8217;s you&#8212;get your boardroom-ready plan and join the ranks of leaders who are actually moving the needle with AI.
            </div>
          </div>
        </section>

        {/* WHY THIS MATTERS */}
        <section className="bg-white py-14 px-6 md:px-16" id="ai-why-matters" aria-labelledby="why-title">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="why-title" className="text-2xl md:text-3xl font-bold mb-6">Why This Matters</h2>
            <p className="text-lg text-gray-700 mb-8">
              AI isn’t a bolt-on tool—it’s rewriting business models, shifting markets, and redrawing the competitive landscape.
                <br /><br />
              While everyone else is busy plugging in chatbots or dabbling with point-solution automations, you’ll have the first enterprise-holistic assessment that defines what ‘AI-ready’ means for your entire company.
              </p>
              <div className="flex justify-center">
                <ul className="list-disc text-left ml-6 text-base space-y-2 text-gray-700 mb-6" aria-label="Why Outcomes">
                    <li id="ara-why-matters-li-1">Win the board’s confidence (and budget)</li>
                    <li id="ara-why-matters-li-2">Prove real readiness—not just intent</li>
                    <li id="ara-why-matters-li-3">Unlock millions in value and future-proof your business</li>
                </ul>
              </div>
              <span className="font-semibold text-blue-700">Don’t guess. Diagnose.</span>
          </div>
        </section>
        
        {/* WHAT SETS THIS APART */}
        <section id='ai-outcomes' data-gtm="section-outcomes" aria-labelledby="outcomes-title" className={`${SOFT_GREY_BG} py-16 px-6 md:px-16`}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="outcomes-title" className="text-2xl md:text-3xl font-bold mb-7">What Sets This Apart</h2>
            <div className="text-lg text-gray-700 mb-8">
                A Category of One: Boardroom-Level, Enterprise-First
            </div>
            <ul className="space-y-8 text-left max-w-2xl mx-auto">
              <li>
                <h3 className="font-semibold text-lg mb-1">1. A 16-Page Custom Playbook—Not a &quot;Scorecard&quot;</h3>
                <p className="text-gray-700">Instantly see your AI strengths, critical gaps, and &quot;unknown unknowns&quot;—across 8 axes that matter.</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg mb-1">2. Operator-Level Insight, Not Vendor Hype</h3>
                <p className="text-gray-700">Each section includes the real questions top operators ask—challenging blind spots and driving momentum.</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg mb-1">3. Proof of Readiness, Not Promises</h3>
                <p className="text-gray-700">Evidence for your board, your auditors, and your shareholders—delivered in a format built to impress and to activate.</p>
              </li>
              <li>
                <h3 className="font-semibold text-lg mb-1">4. Enterprise-HOLISTIC, Not IT-SILOED</h3>
                <p className="text-gray-700">Designed for the entire business: From product and compliance to data and operations.</p>
              </li>            </ul>
            <div className="my-10 mx-auto max-w-2xl p-6 bg-white rounded-xl shadow border" aria-label="Testimonial">
              <div className="italic text-gray-700 text-lg mb-2">
                “That’s different, and that’s worth it. We’ve seen enough AI maturity models. This is the first one that names owners, sets deadlines, and delivers a playbook we can actually execute—no fluff, no hype.”
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <section id="ai-whats-inside" aria-labelledby="whats-inside-title" className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
            <h2 id="whats-inside-title" className="text-2xl font-bold mb-6">
            What’s Inside Your Assessment
            </h2>
            <p className="text-lg text-gray-700 mb-10">
            This isn&#39;t a survey, nor a quiz. It&#39;s your 16-page boardroom playbook, delivered in minutes.<br />
            <span className="block mt-2 font-semibold">Here’s exactly what you get:</span>
            </p>
            <div className="flex justify-center" aria-label="What You Get - Details">
                <ul className="list-disc text-left ml-6 text-base space-y-1">
                    <li>Executive summary for immediate board alignment</li>
                    <li>Eight-pillar deep dive: Strengths, critical risks, and “unknown unknowns”</li>
                    <li>Action plan: Owners, deadlines, quick wins, and “what’s at stake”</li>
                    <li>Exportable summaries for board, audit, and compliance</li>
                    <li>Confidential, immediate delivery—ready for your next leadership meeting</li>
                </ul>
            </div>
            <p className="text-lg text-gray-700 my-10">
            While everyone else is guessing, you’ll have the only assessment that shows exactly where you stand, what to do, and who owns the next move.<br />
            </p>            
        </div>
        </section>

        {/* DIFFERENCE TABLE */}
        <section id="ai-difference" aria-labelledby="diff-title" className={`${SOFT_GREY_BG} py-16 px-6 md:px-16`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="diff-title" className="text-2xl font-bold mb-8">Typical Assessment vs. The Boardroom-Ready Standard</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-left text-base text-gray-700 border border-gray-200 rounded-xl overflow-hidden" aria-labelledby="diff-title">
                <caption className="sr-only">Comparison of typical AI assessment vs. boardroom-ready playbook</caption>
                <thead className="bg-[#e5eaf3]">
                  <tr>
                    <th className="py-3 px-4" scope="col"></th>
                    <th className="py-3 px-4 font-semibold" scope="col">Typical AI Assessment</th>
                    <th className="py-3 px-4 font-semibold" scope="col">Uncork’s Boardroom-Ready Playbook</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="py-3 px-4" scope="row">Approach</th>
                    <td className="py-3 px-4">Generic, high-level, and vague</td>
                    <td className="py-3 px-4">Enterprise-holistic, specific, practical, and defensible</td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4" scope="row">Output</th>
                    <td className="py-3 px-4">No actions, just “scores”</td>
                    <td className="py-3 px-4">16-page playbook, owners, real next steps</td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4" scope="row">Value</th>
                    <td className="py-3 px-4">Theoretical, IT-only</td>
                    <td className="py-3 px-4">Whole-business transformation</td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4" scope="row">Accountability</th>
                    <td className="py-3 px-4">None</td>
                    <td className="py-3 px-4">Named owners, deadlines, clear support</td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4" scope="row">Credibility</th>
                    <td className="py-3 px-4">Vendor slides</td>
                    <td className="py-3 px-4">Boardroom weapon you can use <em>tomorrow</em></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section id="ai-who" aria-labelledby="who-title" className="bg-white py-16 px-6 md:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 id="who-title" className="text-2xl font-bold mb-4">Who This Is For</h2>
            <p className="mb-8 text-gray-700 text-lg">
              For senior leaders who want to set the industry standard—while others settle for &quot;AI theatre.&quot;
            </p>
            <ul className='text-left space-y-4 text-base md:text-lg text-gray-800 mb-7 mx-auto max-w-xl list-none'>
            <li>
                <span className='font-semibold text-blue-700'>CIOs, CTOs, CDOs:</span>
                {' '}Accountable for turning investment into impact; delivering, not just discussing.
            </li>
            <li>
                <span className='font-semibold text-blue-700'>Product, Data, Ops, and Compliance Leaders:</span>
                {' '}Need clarity, alignment, and an exact actionable plan.
            </li>
            <li>
                <span className='font-semibold text-blue-700'>Board-facing execs who know &quot;good&quot; isn’t good enough:</span>
                {' '}You want to confidently prove readiness and unlock the next era.
            </li>
            </ul>
            <p className="mb-8 text-gray-700 text-lg">
              If you’re ready to move—not just research—priority access is open.
            </p>
            <button
                id='hero-cta-who'
                ref={emailRef}
                aria-label='Get My AI Readiness Assessment'
                aria-haspopup='dialog'
                data-gtm='cta-who-primary'
                className='w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition focus:outline-none focus:ring-4 focus:ring-blue-400'
                onClick={() => setShowModal(true)}
                tabIndex={0}
              >
                Get My AI Readiness Assessment
            </button>          
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id='ai-how' data-gtm="section-how" aria-labelledby="how-title" className={`${SOFT_GREY_BG} py-16 px-6 md:px-16`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="how-title" className="text-2xl font-bold mb-8">How It Works</h2>
                <div className="text-lg text-gray-700 mb-8">
                    From Confusion to Credible Leadership—in Minutes, Not Quarters
                </div>
            <ol className="text-left space-y-8 max-w-2xl mx-auto">
              <li className="flex gap-4 items-start">
                <span className="text-3xl mt-1" aria-hidden="true">📝</span>
                <div>
                  <div className="font-semibold text-lg mb-1">Take the Assessment</div>
                  <div className="text-gray-700">
                    20 minutes, fully confidential, enterprise-wide lens.
                  </div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-3xl mt-1" aria-hidden="true">📊</span>
                <div>
                  <div className="font-semibold text-lg mb-1">Get Your Instant Analysis</div>
                  <div className="text-gray-700">
                    Immediate radar chart, executive summary, risk profile.
                  </div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-3xl mt-1" aria-hidden="true">🗺️</span>
                <div>
                  <div className="font-semibold text-lg mb-1">Activate Your Playbook</div>
                  <div className="text-gray-700">
                    16 pages of action—mapped to owners, deadlines and operator tips.
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </section>         

        {/* FAQ */}
        <section id='ai-faq-section' aria-labelledby="faq-title" className="bg-white py-16 px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <h2 id="faq-title" className="text-2xl font-bold mb-8 text-center">FAQ</h2>
            <ul className="space-y-6 text-lg">
              <li>
                <strong>Is this confidential?</strong><br />
                Absolutely. Your answers and your report are never shared—no exceptions.
              </li>
              <li>
                <strong>How long does it take?</strong><br />
                20 minutes to complete. 
              </li>
              <li>
                <strong>How and when do I get results?</strong><br />
                Playbook is delivered to your inbox—often same day.
              </li>              
              <li>
                <strong>Who participates?</strong><br />
                Executives and their direct reports with responsibility for AI, product, tech, data, compliance.
              </li>
              <li>
                <strong>Is this vendor-neutral?</strong><br />
                100%. There’s no pitch—just the truth about your real readiness.
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-t border-gray-600 my-0 mx-auto w-full max-w-4xl" />

        {/* FINAL CTA */}
        <section id="ai-final-cta" aria-labelledby="final-cta-title" className="bg-white py-16 px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="final-cta-title" className="text-2xl font-bold mb-4">Don’t Leave Your Credibility (or Investment) to Chance</h2>
            <p className="mb-6 text-gray-700 text-lg">
              This is the assessment your competitors will wish they’d done when AI hits the boardroom agenda.
              <br /><br />
              Priority access is limited to executives ready to deliver, not just discuss. If that’s you—claim your boardroom-ready plan and join the leaders actually moving the needle with AI.
            </p>
            <button
              id="final-cta-button"
              aria-label="Get My Boardroom Assessment – Priority Access"
              aria-haspopup="dialog"
              data-gtm="cta-final"
              className="px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition focus:outline-none focus:ring-4 focus:ring-blue-400"
              onClick={() => setShowModal(true)}
              tabIndex={0}
            >
              Get My AI Readiness Assessment – Priority Access
            </button>
          </div>
        </section>

        {/* FOUNDER SECTION */}
        <section
          id='irs-founder'
          aria-label='Founder Highlight'
          className={`${SOFT_GREY_BG} py-12 px-6 md:px-16`}
        >
          <div className='max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8'>
            {/* Headshot */}
            <div className='flex-shrink-0 w-44'>
              <div className='rounded-xl overflow-hidden border-b-4' style={{ borderColor: '#2364e0' }}>
                <Image
                  src='/tovi-headshot.png'
                  alt='Tovi Heilbronn, Founder, Uncork Solutions'
                  width={305}
                  height={305}
                  className='w-full h-auto object-cover'
                />
              </div>
            </div>
            {/* Founder Text */}
            <div>
              <h3 className='text-lg font-semibold mb-2'>Tovi Heilbronn</h3>
              <div className='text-sm text-gray-600 mb-1'>Founder, Uncork Solutions</div>
              <p className='text-gray-700 leading-relaxed'>
                17+ years driving digital transformation and technology strategy for enterprise clients&#8212;turning complexity into measurable business outcomes across digital, product, and platform modernization.<br />
                <span className='block mt-2 text-gray-500 italic'>
                  &quot;I believe every client deserves clear answers and practical direction&#8212;without the drag of drawn-out consulting engagements.&quot;
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Modal */}
        <AraModal
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
          ariaLabel='AI Readiness Assessment Signup Modal'
        />
      </main>
    </>
  );
}