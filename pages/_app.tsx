import type { AppProps } from "next/app";
import Head from "next/head";

import "../css/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Basement Supply</title>
        <meta name="title" content="Basement Supply" />
        <meta name="description" content="Coding challenge for basement.studio." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prueba-nextjs.miguelbarrera4.repl.co/" />
        <meta property="og:title" content="Basement Supply" />
        <meta property="og:description" content="Coding challenge for basement.studio." />
        <meta property="og:image" content="https://prueba-nextjs.miguelbarrera4.repl.co/og.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://prueba-nextjs.miguelbarrera4.repl.co/" />
        <meta property="twitter:title" content="Basement Supply" />
        <meta property="twitter:description" content="Coding challenge for basement.studio." />
        <meta property="twitter:image" content="https://prueba-nextjs.miguelbarrera4.repl.co/og.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default App;
