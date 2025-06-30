import '../styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

const GTM_ID = 'GTM-NFSGDSH8';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag Manager (GTM) script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}
