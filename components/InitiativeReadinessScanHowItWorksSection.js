export default function InitiativeReadinessScanHowItWorksSection() {
  return (
    <section
      id="irs-how"
      data-gtm="section-how"
      aria-labelledby="irs-how-title"
      className="bg-white py-16 px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="irs-how-title" className="text-2xl font-bold mb-8">
          How the Initiative Readiness Scan Works
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          A methodical, operator-built process designed for clarity and action—delivered in days,
          not months.
        </p>
        <ol className="text-left space-y-8 max-w-2xl mx-auto">
          <li className="flex gap-4 items-start">
            <span className="text-3xl mt-1" aria-hidden="true">
              📝
            </span>
            <div>
              <div className="font-semibold text-lg mb-1">
                Step 1: Deep-Dive Online Readiness Survey
              </div>
              <div className="text-gray-700">
                ~60 targeted questions, covering the 6 axes of transformation
                <br />
                <span className="text-gray-500 text-sm">
                  30–45 minutes, done at your convenience
                </span>
              </div>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-3xl mt-1" aria-hidden="true">
              📊
            </span>
            <div>
              <div className="font-semibold text-lg mb-1">
                Step 2: Quantitative &amp; Qualitative Assessment
              </div>
              <div className="text-gray-700">
                Auto-generated radar chart benchmarking your readiness vs. peers
                <br />
                <span className="text-gray-500 text-sm">
                  6-page RAG (Red-Amber-Green) scorecard spotlighting top risks
                </span>
              </div>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-3xl mt-1" aria-hidden="true">
              🗺️
            </span>
            <div>
              <div className="font-semibold text-lg mb-1">Step 3: Prioritized Action Roadmap</div>
              <div className="text-gray-700">
                8–10-page action plan with tactical next steps
                <br />
                <span className="text-gray-500 text-sm">
                  “Next 3 Moves” one-pager for immediate traction
                </span>
              </div>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-3xl mt-1" aria-hidden="true">
              🤝
            </span>
            <div>
              <div className="font-semibold text-lg mb-1">
                Step 4: Executive Debrief &amp; Alignment
              </div>
              <div className="text-gray-700">
                60-minute virtual session to align your team and kickstart execution
              </div>
            </div>
          </li>
        </ol>

        <div className="mt-14 max-w-2xl mx-auto rounded-2xl bg-[#f1f2f4] p-8 shadow text-left">
          <div className="font-semibold text-lg mb-3 flex items-center gap-2">
            <span className="text-2xl" aria-hidden="true">
              🎯
            </span>
            What You Get
          </div>
          <ul className="space-y-2 text-gray-700 pl-1">
            <li className="flex gap-2 items-start">
              <span className="text-blue-700 mt-[2px]">&#10003;</span>Visual readiness dashboard
              (6-axis radar)
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-blue-700 mt-[2px]">&#10003;</span>Clear, prioritized gap list
              and peer benchmarks
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-blue-700 mt-[2px]">&#10003;</span>Immediate, actionable next
              steps—no jargon, no fluff
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-blue-700 mt-[2px]">&#10003;</span>Boardroom-ready summary for
              fast leadership buy-in
            </li>
          </ul>
        </div>

        <button
          id="irs-how-cta"
          aria-label="Get My Initiative Readiness Scan"
          data-gtm="cta-how"
          className="mt-10 mb-2 px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition block mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => document.dispatchEvent(new CustomEvent('openModal'))}
        >
          Get My Initiative Readiness Scan
        </button>
      </div>
    </section>
  );
}
