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
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[auto,auto,auto] gap-y-6 gap-x-1 items-start">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Link href="/" aria-label="Go to homepage">
            <Image
              id="irs-footer-logo"
              src="/uncork-solutions-logo.png"
              alt="Uncork Solutions logo"
              width={160}
              height={60}
              className="object-contain mb-4 md:mb-0 cursor-pointer"
              priority
            />
          </Link>
        </div>
        {/* Products Column */}
        <div className="text-center md:text-left">
          <div className="font-semibold mb-2 text-gray-500">Products</div>
          <ul className="space-y-1">
            <li>
              <Link href="/initiative-readiness-scan" className="hover:underline hover:text-blue-700">
                Initiative Readiness Scan
              </Link>
            </li>
            <li>
              <Link href="/ai-readiness-assessment" className="hover:underline hover:text-blue-700">
                AI Readiness Assessment
              </Link>
            </li>
          </ul>
        </div>
        {/* Policies and Copyright */}
        <div className="text-gray-500 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Uncork Solutions. All rights reserved.
          <br />
          <Link href="/privacy-policy" className="underline hover:text-blue-700">Privacy Policy</Link>
          <span aria-hidden="true" className="text-gray-500"> | </span>
          <Link href="/ai-policy" className="underline hover:text-blue-700">AI Usage Policy</Link>
          <span aria-hidden="true" className="text-gray-500"> | </span>
          <Link href="/accessibility-policy" className="underline hover:text-blue-700">Accessibility Policy</Link>
        </div>
      </div>
    </footer>
  );
}