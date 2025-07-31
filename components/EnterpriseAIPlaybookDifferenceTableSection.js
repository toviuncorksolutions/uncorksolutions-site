export default function EnterpriseAIPlaybookDifferenceTableSection() {
  return (
    <section
      id="ai-difference"
      className="bg-[#f1f2f4] py-16 px-6 md:px-16"
      aria-labelledby="diff-title"
    >
      <div className="max-w-4xl mx-auto">
        <h2 id="diff-title" className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Typical &quot;AI Assessment&quot; vs. The Enterprise AI Playbook
        </h2>

        <table
          className="w-full overflow-x-auto text-left text-base text-gray-700 border-gray-200"
          aria-describedby="diff-caption"
        >
          <caption id="diff-caption" className="sr-only">
            Typical AI Assessment vs. The Enterprise AI Playbook
          </caption>
          <thead className="bg-[#e5eaf3]">
            <tr>
              <th className="py-3 px-4 rounded-tl-xl" scope="col" />
              <th className="py-3 px-4 font-semibold" scope="col">
                Typical Assessment
              </th>
              <th className="py-3 px-4 font-semibold rounded-tr-xl" scope="col">
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
              <td className="py-3 px-4">Enterprise-holistic, practical, and defensible</td>
            </tr>
            <tr>
              <th className="py-3 px-4 font-medium text-gray-800" scope="row">
                Output
              </th>
              <td className="py-3 px-4">No actions—just a scorecard</td>
              <td className="py-3 px-4">16-page transition plan mapped to outcomes</td>
            </tr>
            <tr>
              <th className="py-3 px-4 font-medium text-gray-800" scope="row">
                Scope
              </th>
              <td className="py-3 px-4">IT-centric or single-function</td>
              <td className="py-3 px-4">Cross-functional, owned by leadership</td>
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
              <td className="py-3 px-4">Vendor-speak, abstract</td>
              <td className="py-3 px-4">Boardroom-ready asset ready to activate tomorrow</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
