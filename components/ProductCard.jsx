import Image from "next/image";
import {useContext} from "react";

import hoverImg from "../public/add-to-cart.svg";
import CartContext from "../context/cart/CartContext";

const ProductCard = (data) => {
  const {addToCart, cartItems} = useContext(CartContext);

  return (
    <div className="font-basement-black">
      <div
        className="relative border-b-2 bg-gradient-to-b from-final-gray to-initial-black"
        onClick={() => {
          let valid = cartItems.filter((item) => item._id === data._id);

          if (valid.length === 0) addToCart(data);
        }}
      >
        <div className="z-0">
          <Image alt={data.name} height={1156} src={data.img} width={880} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center duration-300 opacity-0 cursor-pointer hover:opacity-100 z-100">
          <Image alt="hover image" src={hoverImg} />
        </div>
      </div>
      <div className="flex justify-between text-xl">
        <span>{data.name}</span>
        <span>{`$ ${data.price}`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
