import Head from "next/head";
import "../styles/index.css";
import React from "react";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import { TransitionContextProvider } from "../common/providers/Transition";
import PopUpProvider from "../common/providers/PopUp";
const Remotel = ({ Component, pageProps }: AppProps) => {
  return (
    <TransitionContextProvider>
      <PopUpProvider>
        <Head>
          <title>Remotel</title>
          <meta name="viewport" content="initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </PopUpProvider>
    </TransitionContextProvider>
  );
};
export default appWithTranslation(Remotel);
