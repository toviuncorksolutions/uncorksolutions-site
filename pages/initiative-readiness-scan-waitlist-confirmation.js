import Link from 'next/link';
import Image from 'next/image';

export default function Confirmation() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md flex flex-col items-center">
        <Image
          src="/uncork-solutions-logo.png"
          alt="Uncork Solutions logo"
          width={200}
          height={60}
          priority
        />
        <h1 className="mt-4 text-2xl font-bold text-center">
          Thank you for joining the waitlist!
        </h1>
        <p className="mt-2 text-center text-gray-700">
          You&apos;re on the list. We&apos;ll be in touch soon with details about the Initiative Readiness Scan.
        </p>
        <Link href="/" passHref legacyBehavior>
          <a className="mt-6 inline-block text-blue-600 hover:underline font-medium">
            Back to Home
          </a>
        </Link>
      </div>
    </main>
  );
}