import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import { Head, Html, Main, NextScript } from "next/document";
import { isMobile } from "react-device-detect";

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body>
        <section className="content">          
          <Main />
          <NextScript />
        </section>
      </body>
    </Html>
  );
}
