import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Join the Waitlist – Uncork Solutions</title>
        <meta
          name="description"
          content="Join the waitlist to get early access to the Transformation Readiness Assessment—a proven tool to de-risk and accelerate your change initiatives."
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.uncorksolutions.com#organization",
              name: "Uncork Solutions",
              url: "https://www.uncorksolutions.com",
              logo: "https://www.uncorksolutions.com/logo.svg",
              description:
                "Technology strategy and digital transformation consulting for mid-market and enterprise businesses.",
              sameAs: [
                "https://www.linkedin.com/company/uncorksolutions"
              ],
              areaServed: [
                { "@type": "Country", name: "Canada" },
                { "@type": "Country", name: "United States" },
                { "@type": "Country", name: "United Kingdom" },
                { "@type": "AdministrativeArea", name: "European Union" },
                { "@type": "Country", name: "Mexico" },
                { "@type": "AdministrativeArea", name: "Latin America" }
              ],
              founder: {
                "@type": "Person",
                name: "Tovi Heilbronn"
              },
              makesOffer: {
                "@type": "Service",
                name: "Transformation Readiness Assessment",
                serviceType: "Organizational Assessment",
                provider: {
                  "@type": "Organization",
                  name: "Uncork Solutions"
                },
                areaServed: [
                  { "@type": "Country", name: "Canada" },
                  { "@type": "Country", name: "United States" },
                  { "@type": "Country", name: "United Kingdom" },
                  { "@type": "AdministrativeArea", name: "European Union" },
                  { "@type": "Country", name: "Mexico" },
                  { "@type": "AdministrativeArea", name: "Latin America" }
                ]
              }
            })
          }}
        />
      </Head>

      <main className="bg-[#E6FBF1] text-gray-800">
        <section id="hero" className="text-center py-16 px-6">
          <h1 className="text-4xl font-bold mb-4">Is Your Organization Actually Ready for Transformation?</h1>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Get early access to the Transformation Readiness Assessment—a proven tool to diagnose, de-risk, and accelerate your strategic change initiatives in 2025.
          </p>
          <button id="hero-cta" className="bg-green-400 hover:bg-green-500 text-white py-2 px-6 rounded">
            Join the Waitlist
          </button>
        </section>

        <section id="features" className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Join the waitlist for a Transformation Readiness Assessment
            </h2>
            <p className="mb-4">
              We’re building a powerful, data-backed framework to help leaders like you answer the critical question:
            </p>
            <blockquote className="italic mb-4 text-gray-700">
              “Are we really ready for change—or are we about to waste 6 months and millions of dollars?”
            </blockquote>
            <ul className="list-disc list-inside space-y-2">
              <li>Benchmark your organization across 6 critical axes of change readiness</li>
              <li>Get a custom radar chart with strengths, blind spots, and tactical next steps</li>
              <li>Access exclusive strategies and success patterns from tech, finance, and healthcare transformations</li>
              <li>Participate in a limited beta with feedback from top operators and executive coaches</li>
            </ul>
            <button id="features-cta" className="mt-6 bg-green-400 hover:bg-green-500 text-white py-2 px-6 rounded">
              Join the Waitlist
            </button>
          </div>
          <div>
            <img src="/mockup-ui.png" alt="UI Preview" className="rounded shadow-md" />
          </div>
        </section>

        <section id="outcomes" className="bg-white py-16 px-8">
          <h2 className="text-2xl font-bold text-center mb-10">
            Transformation Readiness: What You’ll Gain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mb-2 text-3xl">🏁</div>
              <h3 className="font-semibold mb-2">Getting More Wins</h3>
              <p>
                Learn how mastering transformation readiness can accelerate adoption, reduce resistance, and unlock strategic wins faster.
              </p>
            </div>
            <div>
              <div className="mb-2 text-3xl">🚫</div>
              <h3 className="font-semibold mb-2">Avoiding Costly Failure</h3>
              <p>
                Avoid the #1 reason major change efforts fail—launching without organizational readiness. Use this tool as your early-warning system.
              </p>
            </div>
            <div>
              <div className="mb-2 text-3xl">📈</div>
              <h3 className="font-semibold mb-2">Why It Matters</h3>
              <p>
                In today’s environment, transformation is constant. But success still depends on people, process, and trust. This tool helps you assess—and address—all three.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#E6FBF1] py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src="/team-illustration.png" alt="Our team" className="w-full" />
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="mb-4">
              Our team has guided 100+ organizations through large-scale transformation efforts across Amazon, Meta, finance, and healthcare. We’ve seen what works—and what fails. This assessment distills that insight into a tool that helps leaders take action, not just reflect.
            </p>
            <button id="about-cta" className="bg-green-400 hover:bg-green-500 text-white py-2 px-6 rounded">
              Join the Waitlist
            </button>
          </div>
        </section>

        <section id="bonus" className="bg-white py-16 px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Bonus Offer 🎁</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Answer 5 quick questions and join the waitlist now. As a bonus, you’ll get:
          </p>
          <ul className="list-disc list-inside max-w-xl mx-auto mb-6 text-left">
            <li>A free readiness radar chart template</li>
            <li>Priority access to the live beta cohort</li>
            <li>A chance to join our inner circle roundtable on transformation in July</li>
          </ul>
          <button id="bonus-cta" className="bg-green-400 hover:bg-green-500 text-white py-2 px-6 rounded">
            Join the Waitlist
          </button>
        </section>

        <footer id="footer" className="bg-black text-white py-10 text-center">
          <img src="/logo.svg" alt="Uncork Solutions" className="mx-auto mb-4 h-8" />
          <p className="text-sm mb-4">
            Ready to find out if your organization is built for change—or headed for resistance?
          </p>
          <button id="footer-cta" className="bg-green-400 hover:bg-green-500 text-white py-2 px-6 rounded">
            Join the Waitlist
          </button>
        </footer>
      </main>
    </>
  );
}
