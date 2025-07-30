export default function EnterpriseAIPlaybookWhatsInsideSection() {
  return (
    <section
      id="ai-whats-inside"
      aria-labelledby="whats-inside-title"
      className="bg-white py-16 px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="whats-inside-title" className="text-2xl md:text-3xl font-bold mb-6">
          What You Get
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          This isn’t a scorecard or a survey&mdash;it’s your transition plan.
          <br />
          <br />
          Delivered instantly after a 20-minute diagnostic&mdash;no prep, no follow-up
          required&mdash;the Enterprise AI Playbook gives you a 16-page, personalized strategy
          asset.
          <span className="block mt-2 font-semibold">It includes:</span>
        </p>
        <div className="flex justify-center" aria-label="What You Get - Details">
          <ol className="text-left space-y-8 max-w-2xl mx-auto">
            <li className="flex gap-4 items-start">
              <span className="text-3xl mt-1" aria-hidden="true">
                📌
              </span>
              <div>
                <div className="font-semibold text-lg mb-1">Executive Summary</div>
                <div className="text-gray-700">
                  A high-level narrative for your board and ELT—what’s at stake, where you stand,
                  and why it matters now.
                </div>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-3xl mt-1" aria-hidden="true">
                🧭
              </span>
              <div>
                <div className="font-semibold text-lg mb-1">
                  Risk Radar Across 8 Structural Axes
                </div>
                <div className="text-gray-700">
                  Identify your strengths, blind spots, and &quot;unknown unknowns&quot; across
                  vision, data, governance, talent, product, compliance, and more.
                </div>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-3xl mt-1" aria-hidden="true">
                🛠️
              </span>
              <div>
                <div className="font-semibold text-lg mb-1">
                  Action Plan with Owners and Deadlines
                </div>
                <div className="text-gray-700">
                  Not just observations&mdash;specific next steps, accountabilities, and
                  business-critical decisions.
                </div>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-3xl mt-1" aria-hidden="true">
                🧩
              </span>
              <div>
                <div className="font-semibold text-lg mb-1">Exportable Briefings</div>
                <div className="text-gray-700">
                  PDF-ready summaries tailored for board, audit, and operational alignment. No
                  fluff. No rework. Ready for Monday’s meeting.
                </div>
              </div>
            </li>
          </ol>
        </div>
        <p className="italic text-lg text-gray-700 my-10">
          A boardroom asset you'll reference again and again—when budgets are reviewed, when
          stakeholders push back, and when the question comes: are we actually ready for AI?
        </p>
      </div>
    </section>
  );
}
