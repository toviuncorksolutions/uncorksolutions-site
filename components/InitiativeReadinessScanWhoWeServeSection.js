export default function InitiativeReadinessScanWhoWeServeSection() {
  return (
    <section
      id="irs-who"
      data-gtm="section-who"
      aria-label="This Is For You If:"
      className="bg-[#f1f2f4] py-16 px-6 md:px-16"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 id="irs-who-title" className="text-2xl font-bold mb-4">
          Who Is This For?
        </h2>
        <p className="mb-8 text-gray-700 text-lg">
          This isn’t for spectators or theorists. This is for leaders who carry the weight of real
          business outcomes:
        </p>
        <ul className="text-left space-y-4 text-base md:text-lg text-gray-800 mb-7 mx-auto max-w-xl list-none">
          <li>
            <span className="font-semibold text-blue-700">CIOs, CTOs, and CDOs:</span> Tech execs
            leading modernization, platform, or digital change. You&#39;ve felt the pain of past
            misses—and refuse to repeat them.
          </li>
          <li>
            <span className="font-semibold text-blue-700">Business and Digital Executives:</span>{' '}
            VPs and Chiefs tasked with tying digital to real P&amp;L impact. You&#39;re bridging the
            gap between bold boardroom promises and operational realities.
          </li>
          <li>
            <span className="font-semibold text-blue-700">
              Product, Engineering &amp; Ops Leaders:
            </span>{' '}
            You demand clarity, alignment, and results. Enough with consulting decks that never
            translate to action.
          </li>
        </ul>
        <p className="text-gray-600 italic text-base md:text-lg mt-6">
          Our best-fit clients bear battle scars from past failed change, or are &#39;caught in the
          middle&#39; of bold ambition and real-world constraints.
          <br />
          <br />
          You want an <span className="font-semibold text-blue-700">operator</span>, not a theorist.
          An <span className="font-semibold text-blue-700">ally</span>, not just an advisor.
        </p>
        <button
          id="irs-who-cta"
          aria-label="Get My Initiative Readiness Scan"
          data-gtm="cta-who"
          className="mt-8 px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition"
          onClick={() => document.dispatchEvent(new CustomEvent('openModal'))}
        >
          Get My Initiative Readiness Scan
        </button>
      </div>
    </section>
  );
}
