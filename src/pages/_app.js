import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Popup from "@/components/Popup";
import "@/styles/globals.scss";
import Head from "next/head";
import Script from "next/script";
import { isMobile } from "react-device-detect";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
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
        <link rel="manifest" href="./manifest.webmanifest" />
      </Head>

      <Header />
      {isMobile ? <Popup /> : <Cursor />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
