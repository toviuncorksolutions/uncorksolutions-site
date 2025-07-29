export default function AiReadinessAssessmentFinalCTASection() {
  return (
    <section
      id="ai-final-cta"
      aria-labelledby="final-cta-title"
      className="bg-white py-16 px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="final-cta-title" className="text-2xl font-bold mb-4">
          Don’t Leave Your Credibility (or Investment) to Chance
        </h2>
        <p className="mb-6 text-gray-700 text-lg">
          This is the playbook your competitors will wish they had when AI hits the boardroom
          agenda.
          <br />
          <br />
          Priority access is limited to executives ready to deliver, not just discuss. If that’s
          you—claim your boardroom-ready plan and join the leaders actually moving the needle with
          AI.
        </p>
        <button
          id="final-cta-button"
          aria-label="Get My Boardroom Assessment – Priority Access"
          aria-haspopup="dialog"
          data-gtm="cta-final"
          className="px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition focus:outline-none focus:ring-4 focus:ring-blue-400"
          onClick={() => document.dispatchEvent(new CustomEvent('openModal'))}
          tabIndex={0}
        >
          Get My Enterprise AI Playbook
        </button>
      </div>
    </section>
  );
}
