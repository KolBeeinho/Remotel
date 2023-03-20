import Head from "next/head";
import "../styles/index.css";
import React from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
const Remotel = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Remotel</title>
        <meta name="viewport" content="initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default appWithTranslation(Remotel);
