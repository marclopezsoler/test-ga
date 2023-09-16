import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" href="/assets/icons/icon_512.png"></link>
        <title>marc lópez portfolio</title>
        <meta
          name="description"
          content="portfolio website of marc lópez. Discover all his projects and experience here!"
        />
        <link rel="icon" href="/icon.ico" />
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
