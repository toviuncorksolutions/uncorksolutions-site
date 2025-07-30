export default function EnterpriseAIPlaybookDifferenceTableSection() {
  return (
    <section
      id="ai-difference"
      className="bg-[#f1f2f4] py-16 px-6 md:px-16"
      aria-labelledby="diff-title"
    >
      <div className="max-w-4xl mx-auto">
        <h2 id="diff-title" className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Comparison: Typical Assessment vs. Enterprise AI Playbook
        </h2>

        <div className="overflow-x-auto">
          <table
            className="w-full text-left text-base text-gray-700 border border-gray-200 rounded-xl overflow-hidden"
            aria-describedby="diff-caption"
          >
            <caption id="diff-caption" className="sr-only">
              Comparison: Typical Assessment vs. Enterprise AI Playbook
            </caption>
            <thead className="bg-[#e5eaf3]">
              <tr>
                <th className="py-3 px-4" scope="col" />
                <th className="py-3 px-4 font-semibold" scope="col">
                  Typical AI Assessment
                </th>
                <th className="py-3 px-4 font-semibold" scope="col">
                  Uncork’s Enterprise AI Playbook
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <th className="py-3 px-4 font-medium text-gray-800" scope="row">
                  Approach
                </th>
                <td className="py-3 px-4">Generic, high-level, and vague</td>
                <td className="py-3 px-4">Enterprise-holistic, specific, and defensible</td>
              </tr>
              <tr>
                <th className="py-3 px-4 font-medium text-gray-800" scope="row">
                  Output
                </th>
                <td className="py-3 px-4">No actions—just a scorecard</td>
                <td className="py-3 px-4">16-page transition plan with real next steps</td>
              </tr>
              <tr>
                <th className="py-3 px-4 font-medium text-gray-800" scope="row">
                  Scope
                </th>
                <td className="py-3 px-4">IT-focused or single-function</td>
                <td className="py-3 px-4">Cross-functional and leadership-owned</td>
              </tr>
              <tr>
                <th className="py-3 px-4 font-medium text-gray-800" scope="row">
                  Accountability
                </th>
                <td className="py-3 px-4">No owners, no follow-through</td>
                <td className="py-3 px-4">Named owners, timelines, and structured support</td>
              </tr>
              <tr>
                <th className="py-3 px-4 font-medium text-gray-800" scope="row">
                  Credibility
                </th>
                <td className="py-3 px-4">Vendor decks and theory</td>
                <td className="py-3 px-4">Boardroom-ready asset you can activate tomorrow</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
