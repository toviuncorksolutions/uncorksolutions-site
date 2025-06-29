import Head from 'next/head';

export default function WaitlistConfirmation() {
  return (
    <>
      <Head>
        <title>Initiative Readiness Scan Waitlist Confirmation – Uncork Solutions</title>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="bg-[#E6FBF1] min-h-screen flex flex-col items-center justify-center text-center px-4">
        <img src="/uncork-solutions.logo.png" alt="Uncork Solutions logo" className="mx-auto mb-8 w-20 h-auto" />
        <h1 className="text-3xl font-bold mb-4">You're on the Waitlist!</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Thank you for registering for early access to the Initiative Readiness Scan.
          <br /><br />
          We’ve received your submission and you’ll be the first to hear when the beta goes live.
        </p>
        <a href="/" className="inline-block bg-green-400 hover:bg-green-500 text-white py-2 px-6 rounded mt-6">
          Back to Home
        </a>
      </main>
    </>
  );
}
