export default function EnterpriseAIPlaybookWhyThisMattersSection() {
  return (
    <section
      className="bg-white py-14 px-6 md:px-16"
      id="ai-why-matters"
      aria-labelledby="why-title"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="why-title" className="text-2xl md:text-3xl font-bold mb-6">
          Why does AI demand a structural plan?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Because AI is a business model fault line, not a feature.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Right now, companies are scrambling for use cases, pilots, and vendor promises. It&rsquo;s
          a frenzy of noise, tactics, and hype.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          But here’s the uncomfortable truth: leaders who treat AI as a side project will be
          side-lined.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          AI isn&rsquo;t just another digital initiative. It&rsquo;s a structural shift, reshaping
          how value is created, how decisions are made, and how businesses compete.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          And structural change demands a structural response.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          The Enterprise AI Playbook was built for this exact moment.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          It&rsquo;s not a framework, not a scorecard, nor a vendor checklist.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          <strong>
            It&rsquo;s your boardroom-ready blueprint to lead AI transformation with control,
            credibility, and speed.
          </strong>
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Inside, you&rsquo;ll get what every exec urgently needs&mdash;but few have:
        </p>
        <div className="flex justify-center">
          <ul
            className="list-disc text-left ml-6 text-base space-y-2 text-gray-700 mb-6"
            aria-label="Why Outcomes"
          >
            <li>
              A clear map of where your business is structurally ready (and where it&rsquo;s not)
            </li>
            <li>A strategy to align silos and win board buy-in</li>
            <li>The ability to act with clarity in a moment of hype</li>
            <li>Proactively define your agenda—before vendors or consultants do</li>
            <li>The confidence to act boldly, without guesswork or dependence</li>
          </ul>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            When AI hits the boardroom agenda, will you bring a defensible, enterprise-wide plan—or
            just a handful of use cases and hope?
          </p>
          <p className="text-lg text-gray-700 mb-8">
            This is the leadership move before the investments.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Not another pilot. Not another sprint. <strong>A plan.</strong>
          </p>
        </div>
        <button
          id="cta-why-matters"
          aria-label="Get My Enterprise AI Playbook"
          aria-haspopup="dialog"
          data-gtm="cta-why-matters"
          className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition focus:outline-none focus:ring-4 focus:ring-blue-400"
          onClick={() => document.dispatchEvent(new CustomEvent('openModal'))}
          tabIndex={0}
        >
          Get My Enterprise AI Playbook
        </button>
      </div>
    </section>
  );
}
