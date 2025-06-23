import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Join the Waitlist – Uncork Solutions</title>
        <meta
          name="description"
          content="Join the waitlist to get early access to Uncork Solutions’ latest offering. Unlock exclusive insights and bonuses."
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
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
                  { "@type": "Country", name: "Mexico" },
                  { "@type": "AdministrativeArea", name: "European Union" },
                  { "@type": "AdministrativeArea", name: "Latin America" }
                ],
                founder: {
                  "@type": "Person",
                  name: "Tovi Heilbronn"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Digital Transformation Consulting",
                provider: {
                  "@type": "Organization",
                  name: "Uncork Solutions",
                  url: "https://www.uncorksolutions.com"
                },
                areaServed: [
                  { "@type": "Country", name: "Canada" },
                  { "@type": "Country", name: "United States" },
                  { "@type": "Country", name: "United Kingdom" },
                  { "@type": "Country", name: "Mexico" },
                  { "@type": "AdministrativeArea", name: "European Union" },
                  { "@type": "AdministrativeArea", name: "Latin America" }
                ],
                description:
                  "Uncork Solutions provides digital transformation, technology strategy, and enterprise architecture consulting for mid-market and enterprise businesses.",
                availableChannel: {
                  "@type": "ServiceChannel",
                  serviceUrl: "https://www.uncorksolutions.com"
                }
              }
            ])
          }}
        />
      </Head>

      <main className="bg-[#E6FBF1] text-gray-800">
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Join the Waitlist</h1>
          <p className="text-lg mb-6">
            Are you ready to get better results with your &lt;topic&gt; in 2025?
          </p>
          <button className="bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded">
            Join the Waitlist
          </button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              We're busy working on an innovative and new approach to [topic].
            </h2>
            <p className="mb-4">
              If you want early access to this latest innovation, register your
              interest and you’ll be part of our inner circle community who gets
              priority access and information.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Getting more &lt;good things&gt;</strong> – Discover how
                mastering [topic] can supercharge your ability to achieve [Good
                Thing].
              </li>
              <li>
                <strong>Preventing &lt;bad things&gt;</strong> – Learn how [topic]
                can serve as your protective shield.
              </li>
              <li>
                <strong>Why &lt;category&gt; Matters</strong> – Explore the
                critical domain of [topic], where success is defined.
              </li>
            </ul>
            <button className="mt-6 bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded">
              Join the Waitlist
            </button>
          </div>
          <div>
            <img src="/mockup-ui.png" alt="UI Preview" className="rounded shadow-md" />
          </div>
        </section>

        <section className="bg-white py-16 px-8">
          <h2 className="text-2xl font-bold text-center mb-10">
            Unlock Early Access and Exclusive Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mb-2 text-3xl">🔓</div>
              <h3 className="font-semibold mb-2">Start…</h3>
              <p>
                Join the Waitlist! Want to amplify your existing &lt;outcome&gt;?
                Click to step forward.
              </p>
            </div>
            <div>
              <div className="mb-2 text-3xl">🔗</div>
              <h3 className="font-semibold mb-2">Share…</h3>
              <p>
                Answer 6 questions: So we can learn about you and exactly what
                you’d like to achieve.
              </p>
            </div>
            <div>
              <div className="mb-2 text-3xl">✨</div>
              <h3 className="font-semibold mb-2">Exclusive Access…</h3>
              <p>
                You will be added to the front of the queue to receive early
                access to our cutting-edge [topic] approach.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#E6FBF1] py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src="/team-illustration.png" alt="Our team" className="w-full" />
          <div>
            <h3 className="text-xl font-bold mb-4">About us</h3>
            <p className="mb-4">
              Our team are experts in &lt;topic&gt;. Over the last 10 years we’ve
              worked with &lt;a number&gt; of clients to achieve results like
              &lt;result 1&gt;, &lt;result 2&gt; and &lt;result3&gt;. We’re
              committed to improving &lt;the things&gt; and bringing new strategies
              and approaches.
            </p>
            <button className="bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded">
              Join the Waitlist
            </button>
          </div>
        </section>

        <footer className="bg-black text-white py-10 text-center">
          <img
            src="/logo.svg"
            alt="Uncork Solutions"
            className="mx-auto mb-4 h-8"
          />
          <p className="text-sm">
            To join our waitlist and get access to the updates, answer 5 questions
            and you’ll be on the list. As a special bonus, you’ll also get access
            to &lt;bonus&gt;.
          </p>
          <button className="mt-4 bg-green-400 hover:bg-green-500 text-white py-2 px-4 rounded">
            Join the waitlist
          </button>
        </footer>
      </main>
    </>
  );
}
