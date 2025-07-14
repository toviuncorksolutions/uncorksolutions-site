import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Confirmation() {
  return (
    <>
      <Head>
        <title>Waitlist Confirmation – Initiative Readiness Scan | Uncork Solutions</title>
        <meta
          name="description"
          content="Thank you for joining the waitlist for the Initiative Readiness Scan. We’ll be in touch soon."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div
          className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col items-center border border-gray-100 dark:border-gray-700 transition-all"
          role="status"
          aria-live="polite"
        >
          <Image
            src="/uncork-solutions-logo.png"
            alt="Uncork Solutions logo"
            width={200}
            height={60}
            priority
            className="mb-3"
          />
          {/* Visual delight: Green checkmark */}
          <div className="flex items-center justify-center mb-4">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2.5" fill="none" />
              <path d="M7 13l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-1">
            Thank you for joining the waitlist!
          </h1>
          <p className="text-center text-gray-700 dark:text-gray-200 mb-6">
            You&apos;re on the list.<br />
            We&apos;ll be in touch soon with details about the Initiative Readiness Scan.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-blue-700 dark:text-blue-400 hover:underline font-semibold transition"
          >
            &larr; Back to Home
          </Link>
          {/* Optionally, add a CTA for more info: */}
          <Link
            href="/initiative-readiness-scan"
            className="mt-2 inline-block text-blue-600 dark:text-blue-300 hover:underline text-sm"
          >
            Learn how the scan works
          </Link>
        </div>
      </main>
    </>
  );
}