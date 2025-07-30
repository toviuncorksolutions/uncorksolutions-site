export default function EnterpriseAIPlaybookFinalCTASection() {
  return (
    <section
      id="ai-final-cta"
      aria-labelledby="final-cta-title"
      className="bg-white py-16 px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="final-cta-title" className="text-2xl font-bold mb-4">
          A Plan for the Leader Everyone’s Looking To
        </h2>

        <p className="mb-4 text-gray-700 text-lg">
          AI is shifting how your business operates, competes, and delivers value. And whether you
          asked for it or not &mdash; <strong>you’re the one expected to lead that shift</strong>.
        </p>

        <p className="mb-4 text-gray-700 text-lg">
          But real leadership doesn’t start with pilots, vendors, or hype. It starts with structure.
        </p>

        <p className="mb-4 text-gray-700 text-lg">
          The Enterprise AI Playbook is your 16-page, boardroom-ready strategy — designed to help
          you:
        </p>

        <ul className="mb-4 text-gray-700 text-lg text-left list-disc list-inside md:list-outside md:px-8 inline-block text-left">
          <li>Align your exec team without delay</li>
          <li>Diagnose readiness across 8 business-critical axes</li>
          <li>Name owners, quick wins, and what’s truly at stake</li>
        </ul>

        <p className="mb-6 text-gray-700 text-lg">
          No sales calls. No fluff. Just the plan serious leaders are using to move &mdash;{' '}
          <em>not just talk</em> &mdash; about AI.
        </p>

        <button
          id="final-cta-button"
          aria-label="Get My Enterprise AI Playbook – Priority Access"
          aria-haspopup="dialog"
          data-gtm="cta-final"
          className="px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition focus:outline-none focus:ring-4 focus:ring-blue-400"
          onClick={() => document.dispatchEvent(new CustomEvent('openModal'))}
          tabIndex={0}
        >
          Claim My Enterprise AI Playbook Now
        </button>
      </div>
    </section>
  );
}
