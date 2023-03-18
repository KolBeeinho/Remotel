import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="title" content="Remotel takarítás" />
        <meta
          name="description"
          content="Remotel - takarítás olcsón, airbnb-s lakások"
        />
        <link rel="icon" type="image/x-icon" href="/images/remotelfav.png" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="airbnb, takarítás, washing" />
        <meta name="robots" content="all" />
        <meta httpEquiv="Content-Type" content="text/html;" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
