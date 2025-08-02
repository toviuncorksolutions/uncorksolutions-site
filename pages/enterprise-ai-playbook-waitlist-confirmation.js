import Link from 'next/link';
import Image from 'next/image';

export default function Confirmation() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        id="skip-link"
        className="sr-only focus:not-sr-only absolute left-0 top-0 bg-white text-blue-700 p-2 z-50"
        tabIndex={0}
        style={{
          outline: '2px solid #2364e0',
          outlineOffset: '2px',
        }}
        onClick={(e) => {
          // Move focus to main content after skip link is activated
          e.preventDefault();
          const main = document.getElementById('main-content');
          if (main) main.focus();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const main = document.getElementById('main-content');
            if (main) main.focus();
          }
        }}
      >
        Skip to main content
      </a>
      <main
        id="main-content"
        tabIndex={-1}
        role="main"
        className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4"
      >
        <div className="max-w-md w-full bg-white p-8 rounded shadow-md flex flex-col items-center">
          <Image
            src="/uncork-solutions-logo.png"
            alt="Uncork Solutions logo"
            width={200}
            height={60}
            priority
          />
          <h1 className="mt-4 text-2xl font-bold text-center">Thank you for singing up!</h1>
          <p className="mt-2 text-center text-gray-700">
            You&apos;re on the list. We&apos;ll send you an email very soon with your link to
            complete the 20-minute AI Readiness Assessment, after which you&apos;ll receive your
            personalized Enterprise AI Playbook.
          </p>
          <Link href="/" passHref legacyBehavior>
            <a
              className="mt-6 inline-block text-blue-600 hover:underline font-medium focus:outline-2 focus:outline-blue-700"
              aria-label="Back to Home page"
            >
              Back to Home
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}
