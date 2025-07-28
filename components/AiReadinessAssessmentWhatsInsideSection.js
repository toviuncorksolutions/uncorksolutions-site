export default function AiReadinessAssessmentWhatsInsideSection() {
  return (
    <section id="ai-whats-inside" aria-labelledby="whats-inside-title" className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="whats-inside-title" className="text-2xl md:text-3xl font-bold mb-6">
          What’s Inside Your Assessment
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          This isn’t a survey, nor a quiz. It’s your 16-page boardroom playbook, delivered in minutes.
          <br />
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
          While everyone else is guessing, you’ll have the only assessment that shows exactly where you stand, what to do, and who owns the next move.
        </p>
      </div>
    </section>
  );
}