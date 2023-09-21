import {useContext} from "react";

import {CartContextType} from "../types";
import {formatCurrency} from "../utils/formatCurrency";
import CartContext from "../context/cart/CartContext";

import CartItem from "./CartItem";

const Cart = () => {
  const {showCart, cartItems, showHideCart} = useContext<CartContextType>(CartContext);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      showHideCart();
    }
  };

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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 bg-black bg-opacity-50"
          onClick={handleBackgroundClick}
        >
          <div className="top-0 right-0 grid h-screen gap-2 p-5 overflow-auto bg-black font-basement-black md:h-3/4 md:border grid-rows-cart md:fixed">
            <div className="text-right">
              <button onClick={showHideCart}>→ CLOSE</button>
            </div>
            <div className="text-center text-8xl">
              YOUR{" "}
              <span className="text-stroke-white text-stroke-2 text-fill-transparent">CART</span>
            </div>
            <div>
              {cartItems.length === 0 ? (
                <h4>Cart is Empty</h4>
              ) : (
                <ul>
                  {cartItems.map((item) => (
                    <CartItem key={item._id} item={item} />
                  ))}
                </ul>
              )}
            </div>
            <div className="md:grid grid-cols-bottom-cart">
              <div className="flex justify-between gap-2 md:justify-start md:text-3xl">
                <div>TOTAL:</div>
                <div>
                  {formatCurrency(
                    cartItems.reduce((amount, item) => item.price * item.qty + amount, 0),
                  )}
                </div>
              </div>
              <button
                className="pt-4 text-5xl text-center text-black transition-all border-t duration-50 md:pt-0 md:border-0 md:text-3xl text-stroke-white text-stroke-2 hover:text-white hover:text-stroke-none"
                onClick={handleCheckout}
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
