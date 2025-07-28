export default function AiReadinessAssessmentHowItWorksSection() {
  return (
    <section
      id="ai-how"
      data-gtm="section-how"
      aria-labelledby="how-title"
      className="bg-[#f1f2f4] py-16 px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="how-title" className="text-2xl md:text-3xl font-bold mb-8">
          How It Works
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          From Confusion to Credible Leadership—in Minutes, Not Quarters
        </p>
        <ol className="text-left space-y-8 max-w-2xl mx-auto list-decimal list-inside">
          <li className="flex gap-4 items-start">
            <span className="text-3xl mt-1" aria-hidden="true">
              📝
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">Step 1: Take the Assessment</h3>
              <p className="text-gray-700">20 minutes, fully confidential, enterprise-wide lens.</p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-3xl mt-1" aria-hidden="true">
              📊
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">Step 2: Get Your Instant Analysis</h3>
              <p className="text-gray-700">
                Immediate radar chart, executive summary, risk profile.
              </p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-3xl mt-1" aria-hidden="true">
              🗺️
            </span>
            <div>
              <h3 className="font-semibold text-lg mb-1">Step 3: Activate Your Playbook</h3>
              <p className="text-gray-700">
                16 pages of action—mapped to owners, deadlines and operator tips.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
