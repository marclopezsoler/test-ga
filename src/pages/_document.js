import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" href="/assets/icons/icon_512.png"></link>
        <meta name="theme-color" content="#020b55" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','G-CYPLVVSN8B');
          `
        }} />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=G-CYPLVVSN8B"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        <section className="content">
          <Main />
          <NextScript />
        </section>
      </body>
    </Html>
  );
}
