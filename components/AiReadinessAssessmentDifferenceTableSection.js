export default function AiReadinessAssessmentDifferenceTableSection() {
  return (
    <section id="ai-difference" className="bg-[#f1f2f4] py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="diff-title" className="text-2xl md:text-3xl font-bold mb-8">
          Typical Assessment vs. The Boardroom-Ready Standard
        </h2>
        <div className="overflow-x-auto">
          <table
            className="w-full text-left text-base text-gray-700 border border-gray-200 rounded-xl overflow-hidden"
            aria-labelledby="diff-title"
          >
            <caption className="sr-only">
              Comparison of typical AI assessment vs. boardroom-ready playbook
            </caption>
            <thead className="bg-[#e5eaf3]">
              <tr>
                <th className="py-3 px-4" scope="col"></th>
                <th className="py-3 px-4 font-semibold" scope="col">
                  Typical AI Assessment
                </th>
                <th className="py-3 px-4 font-semibold" scope="col">
                  Uncork’s Boardroom-Ready Playbook
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="py-3 px-4" scope="row">
                  Approach
                </th>
                <td className="py-3 px-4">Generic, high-level, and vague</td>
                <td className="py-3 px-4">
                  Enterprise-holistic, specific, practical, and defensible
                </td>
              </tr>
              <tr>
                <th className="py-3 px-4" scope="row">
                  Output
                </th>
                <td className="py-3 px-4">No actions, just “scores”</td>
                <td className="py-3 px-4">16-page playbook, owners, real next steps</td>
              </tr>
              <tr>
                <th className="py-3 px-4" scope="row">
                  Value
                </th>
                <td className="py-3 px-4">Theoretical, IT-only</td>
                <td className="py-3 px-4">Whole-business transformation</td>
              </tr>
              <tr>
                <th className="py-3 px-4" scope="row">
                  Accountability
                </th>
                <td className="py-3 px-4">None</td>
                <td className="py-3 px-4">Named owners, deadlines, clear support</td>
              </tr>
              <tr>
                <th className="py-3 px-4" scope="row">
                  Credibility
                </th>
                <td className="py-3 px-4">Vendor slides</td>
                <td className="py-3 px-4">
                  Boardroom weapon you can use <em>tomorrow</em>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
