import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.scss";
import Script from "next/script";
import { isMobile } from "react-device-detect";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-CYPLVVSN8B`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CYPLVVSN8B');
        `}
      </Script>

      <Header />
      {isMobile ? "" : <Cursor />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
