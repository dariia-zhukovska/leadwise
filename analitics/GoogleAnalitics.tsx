
import Script from 'next/script';

const GoogleAnalytics = () => (
    <div className="container">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZFJGYGT8L8" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-ZFJGYGT8L8');
        `}
      </Script>
      </div>
);

export default GoogleAnalytics;
