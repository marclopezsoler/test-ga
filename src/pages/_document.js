import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import { Head, Html, Main, NextScript } from "next/document";
import { isMobile } from "react-device-detect";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#020b55" />
      </Head>
      <body>
        <section className="content">          
          <Main />
          <NextScript />
        </section>
      </body>
    </Html>
  );
}
