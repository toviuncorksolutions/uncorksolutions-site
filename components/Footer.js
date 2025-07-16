import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      id="irs-footer"
      data-gtm="footer"
      aria-label="Site Footer"
      className="py-8 px-6 md:px-16 mt-4"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Image
          id="irs-footer-logo"
          src="/uncork-solutions-logo.png"
          alt="Uncork Solutions logo"
          width={160}
          height={60}
          className="object-contain mb-4 md:mb-0"
        />
        <div className="text-gray-500 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Uncork Solutions. All rights reserved.
          <br />
          <Link href="/privacy-policy" className="underline hover:text-blue-700">Privacy Policy</Link>
          <span aria-hidden="true" className="text-gray-400"> | </span>
          <Link href="/accessibility-policy" className="underline hover:text-blue-700">Accessibility Policy</Link>
        </div>
      </div>
    </footer>
  );
}
