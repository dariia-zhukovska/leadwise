
import Head from 'next/head';

const GoogleAnalytics = () => (
  <>
    <Head>
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-X89THH5F2F"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-X89THH5F2F');
        `}
      </script>
    </Head>
  </>
);

export default GoogleAnalytics;
