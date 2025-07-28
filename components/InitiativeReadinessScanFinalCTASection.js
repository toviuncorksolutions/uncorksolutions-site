import Image from 'next/image';

export default function InitiativeReadinessScanFinalCTASection() {
  return (
    <section
      id="irs-final"
      data-gtm="section-final"
      aria-labelledby="irs-final-title"
      className="bg-white py-16 px-6 md:px-16"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h2 id="irs-final-title" className="text-2xl font-bold mb-4">
            Ready to Accelerate Your Next Initiative?
          </h2>
          <p id="irs-final-desc" className="mb-6 text-gray-700 text-lg">
            This comprehensive, operator-built scan surfaces hidden risks, aligns business and tech,
            and delivers a prioritized, board-ready action plan—so you know exactly where you stand
            and what to do next.
          </p>
          <button
            id="irs-final-cta"
            aria-label="Get My Initiative Readiness Scan"
            data-gtm="cta-final"
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
