
import Head from 'next/head';
import Script from 'next/script';

const GoogleAnalytics = () => (
  <>
    <Head>
    <div className="container">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X89THH5F2F" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-X89THH5F2F');
        `}
      </Script>
      </div>
    </Head>
  </>
);

export default GoogleAnalytics;
