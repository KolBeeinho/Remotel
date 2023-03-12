import "../styles/index.css";
import type { AppProps } from "next/app";

export default function Remotel({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
