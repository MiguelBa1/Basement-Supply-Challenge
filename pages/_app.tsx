import type {AppProps} from "next/app";
import {useRouter} from "next/router";

import "../css/global.css";
import MetaTags from "../components/MetaTags";
import CartState from "../context/cart/CartState";

function App({Component, pageProps}: AppProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const router = useRouter();
  const url = `${baseUrl}${router.asPath}`;

  return (
    <>
      <MetaTags
        description="Coding challenge for basement.studio"
        image={`${url}/og.png`}
        title="Basement Supply"
        url={url}
      />
      <CartState>
        <Component {...pageProps} />
      </CartState>
    </>
  );
}
export default App;
