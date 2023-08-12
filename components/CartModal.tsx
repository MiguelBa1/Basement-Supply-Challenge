import {useContext} from "react";

import {formatCurrency} from "../utils/formatCurrency";
import CartContext from "../context/cart/CartContext";

import CartItem from "./CartItem";

export interface CartItemType {
  _id: number;
  name: string;
  price: number;
  size: string;
  qty: number;
}

interface CartContextType {
  showCart: boolean;
  cartItems: CartItemType[];
  showHideCart: () => void;
}

const Cart = () => {
  const {showCart, cartItems, showHideCart} = useContext<CartContextType>(CartContext);

  const handleCheckout = () => {
    cartItems.map((item) => {
      console.log(
        `Product: ${item.name}, price: $${item.price}, size: ${item.size}, quantity: ${item.qty}`,
      );
    });
    let total = formatCurrency(
      cartItems.reduce((amount, item) => item.price * item.qty + amount, 0),
    );

    console.log(`Total: ${total}`);
  };

  return (
    <>
      {showCart && (
        <div className="top-0 right-0 z-50 grid min-h-screen p-5 bg-black font-basement-black md:min-h-0 md:border grid-rows-cart md:fixed">
          <div className="flex justify-end mb-2 text-rigth" onClick={showHideCart}>
            → CLOSE
          </div>
          <div className="mb-2 text-center text-8xl">
            YOUR <span className="text-stroke-white text-stroke-2 text-fill-transparent">CART</span>
          </div>
          <div>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul className="overflow-y-auto max-h-80">
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="mt-2 md:grid grid-cols-bottomCart">
            <div className="flex justify-between md:justify-start md:text-3xl">
              <div>TOTAL:</div>
              <div>
                {formatCurrency(
                  cartItems.reduce((amount, item) => item.price * item.qty + amount, 0),
                )}
              </div>
            </div>
            <div
              className="pt-4 text-5xl text-center border-t cursor-pointer md:pt-0 md:border-0 md:text-3xl text-stroke-white text-stroke-2 text-fill-transparent"
              onClick={handleCheckout}
            >
              CHECKOUT
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;