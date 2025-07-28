import Image from 'next/image';

export default function InitiativeReadinessScanHelpSection() {
  return (
    <section
      id="irs-help"
      data-gtm="section-help"
      aria-labelledby="irs-help-title"
      className="bg-white py-16 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 id="irs-help-title" className="text-2xl font-bold mb-4">
            Will This Help You, Right Now?
          </h2>
          <p id="irs-help-desc" className="mb-6 text-gray-700">
            Most companies only see failure coming <em>after</em> the spend is committed. How
            certain are you this initiative will succeed—and how soon do you want the evidence? What
            would it cost if you found out too late?
            <br />
            <br />
            The Initiative Readiness Scan is built for leaders under real pressure. It benchmarks
            your organization across 6 axes, delivers a custom radar chart, and equips you with an
            operator’s battle-tested action plan to move forward with confidence.
          </p>
          <ul
            className="list-disc list-inside space-y-2 text-gray-700 mb-6"
            aria-label="Scan Outcomes"
          >
            <li id="irs-help-li-1">Benchmark your team on the metrics that drive transformation</li>
            <li id="irs-help-li-2">
              Address blind spots <em>before</em> you commit major resources
            </li>
            <li id="irs-help-li-3">Confidential, actionable, and designed for boardroom impact</li>
          </ul>
          <button
            id="irs-help-cta"
            aria-label="Get My Initiative Readiness Scan"
            data-gtm="cta-help"
            className="px-8 py-3 rounded-xl bg-blue-700 text-white font-bold text-lg shadow hover:bg-blue-800 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => document.dispatchEvent(new CustomEvent('openModal'))}
          >
            Get My Initiative Readiness Scan
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            id="irs-help-image"
            src="/initiative-readiness-scan-2.png"
            alt="Initiative Readiness Scan sample booklet"
            width={270}
            height={340}
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 220px, 270px"
            className="w-[220px] md:w-[270px] h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
