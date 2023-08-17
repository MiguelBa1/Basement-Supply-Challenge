import Image from "next/image";
import {useContext} from "react";

import CartContext from "../context/cart/CartContext";
import smallLogo from "../public/logo-small.svg";
import largeLogo from "../public/logo-large.svg";
import hd_4k from "../public/hd-4k.svg";

const HeaderBar = () => {
  const {cartItems, showHideCart} = useContext(CartContext);

  return (
    <nav className="flex justify-between p-4 md:p-5">
      <div className="hidden sm:inline">
        <Image alt="Basement logo" src={largeLogo} />
      </div>
      <div className="sm:hidden">
        <Image alt="Basement logo" src={smallLogo} />
      </div>
      <div className="hidden md:inline">
        <Image alt="Quality logos" className="hidden" src={hd_4k} />
      </div>
      <button
        className="px-5 border-2 font-basement-black rounded-3xl"
        onClick={() => showHideCart()}
      >
        CART(<span style={{minWidth: "20px", display: "inline-block"}}>{cartItems.length}</span>)
      </button>
    </nav>
  );
};

export default HeaderBar;
