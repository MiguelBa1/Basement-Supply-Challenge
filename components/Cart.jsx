import {useContext} from "react";
import formatCurrency from "format-currency";

import CartContext from "../context/cart/CartContext";

import CartItem from "./CartItem";

const Cart = () => {
  const {showCart, cartItems, showHideCart} = useContext(CartContext);
  let opts = {format: "%s%v", symbol: "$"};

  const handleCheckout = () => {
    cartItems.map((item) => {
      console.log(
        `Product: ${item.name}, price: $${item.price}, size: ${item.size}, quantity: ${item.qty}`,
      );
    });
    let total = formatCurrency(
      cartItems.reduce((amount, item) => item.price * item.qty + amount, 0),
      opts,
    );

    console.log(`Total: ${total}`);
  };

  return (
    <>
      {showCart && (
        <div className="top-0 right-0 z-50 grid min-h-screen p-5 bg-black md:min-h-0 md:border grid-rows-cart md:fixed">
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
                  opts,
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
