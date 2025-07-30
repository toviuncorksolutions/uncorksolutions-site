export default function EnterpriseAIPlaybookWhoThisIsForSection() {
  return (
    <section id="ai-who" aria-labelledby="who-title" className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 id="who-title" className="text-2xl md:text-3xl font-bold mb-4">
          Who This Is For
        </h2>
        <p className="mb-8 text-gray-700 text-lg">
          This is for senior leaders responsible for real AI outcomes, while others settle for
          &quot;AI theatre.&quot; and exploration.
        </p>
        <ul className="text-left space-y-4 text-base md:text-lg text-gray-800 mb-7 mx-auto max-w-xl list-none">
          <li>
            <span className="font-semibold text-blue-700">CIOs, CTOs, CDOs:</span> You’re being
            asked to lead AI—but without alignment or clarity. This gives you both.
          </li>
          <li>
            <span className="font-semibold text-blue-700">
              Product, Data, Ops, and Compliance Leaders:
            </span>{' '}
            You need to know where your domain fits—and what it needs—to support AI systemically.
          </li>
          <li>
            <span className="font-semibold text-blue-700">
              Executives in Retail, Manufacturing, and Regulated Sectors:
            </span>{' '}
            Where credibility, defensibility, and cross-functional readiness are non-negotiable.
          </li>
        </ul>
        <p className="mb-8 text-gray-700 text-lg">
          If you&rsquo;re serious about leading AI like it's a business model shift&mdash;not a tech
          project&mdash;this is where you start.
        </p>
        <button
          id="hero-cta-who"
          aria-label="Get My Enterprise AI Playbook"
          aria-haspopup="dialog"
          data-gtm="cta-who-primary"
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
