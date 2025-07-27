import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      id="footer"
      data-gtm="footer"
      aria-label="Site Footer"
      className="py-8 px-6 md:px-16 mt-4"
    >
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[auto,auto,auto] gap-y-6 gap-x-1 items-start">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Link href="/" aria-label="Go to homepage">
            <Image
              id="footer-logo"
              src="/uncork-solutions-logo.png"
              alt="Uncork Solutions homepage"
              width={160}
              height={60}
              className="object-contain mb-4 md:mb-0 cursor-pointer"
              priority
            />
          </Link>
        </div>
        {/* Products Column */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold mb-2 text-gray-700 text-base" id="footer-products-heading">
            Products
          </h2>
          <ul className="space-y-1" aria-labelledby="footer-products-heading">
            <li>
              <Link
                href="/initiative-readiness-scan"
                className="hover:underline hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              >
                Initiative Readiness Scan
              </Link>
            </li>
            <li>
              <Link
                href="/ai-readiness-assessment"
                className="hover:underline hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
              >
                AI Readiness Assessment
              </Link>
            </li>
          </ul>
        </div>
        {/* Policies and Copyright */}
        <div className="text-gray-700 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Uncork Solutions. All rights reserved.
          <br />
          <nav aria-label="Footer Policies" className="inline">
            <Link
              href="/privacy-policy"
              className="hover:underline hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-gray-500"> | </span>
            <Link
              href="/ai-policy"
              className="hover:underline hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              AI Usage Policy
            </Link>
            <span aria-hidden="true" className="text-gray-500"> | </span>
            <Link
              href="/accessibility-policy"
              className="hover:underline hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            >
              Accessibility Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}