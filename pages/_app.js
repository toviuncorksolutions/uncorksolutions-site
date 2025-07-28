import '../styles/globals.css';
import { Wix_Madefor_Text } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import FooterSection from '../components/FooterSection';

const GTM_ID = 'GTM-NFSGDSH8';

const wixFont = Wix_Madefor_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag Manager (GTM) script */}
      <Script
        src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        strategy="lazyOnload"
        id="gtm"
      />
      <div className={wixFont.className}>
        <Component {...pageProps} />
        <SpeedInsights />
        <FooterSection />
      </div>
    </>
  );
}
