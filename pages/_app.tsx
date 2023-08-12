import type {AppProps} from "next/app";
import Head from "next/head";

import CartState from "../context/cart/CartState";

import "../css/global.css";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Basement Supply</title>
        <meta content="Basement Supply" name="title" />
        <meta content="Coding challenge for basement.studio." name="description" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta content="website" property="og:type" />
        <meta content="https://prueba-nextjs.miguelbarrera4.repl.co/" property="og:url" />
        <meta content="Basement Supply" property="og:title" />
        <meta content="Coding challenge for basement.studio." property="og:description" />
        <meta content="https://prueba-nextjs.miguelbarrera4.repl.co/og.png" property="og:image" />

        {/* <!-- Twitter --> */}
        <meta content="summary_large_image" property="twitter:card" />
        <meta content="https://prueba-nextjs.miguelbarrera4.repl.co/" property="twitter:url" />
        <meta content="Basement Supply" property="twitter:title" />
        <meta content="Coding challenge for basement.studio." property="twitter:description" />
        <meta
          content="https://prueba-nextjs.miguelbarrera4.repl.co/og.png"
          property="twitter:image"
        />
      </Head>
      <CartState>
        <Component {...pageProps} />
      </CartState>
    </>
  );
}
export default App;
