import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import CartItem from "./CartItem";

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "$" };

  const handleCheckout = () => {
    cartItems.map(item => {
      console.log(`Product: ${item.name}, price: $${item.price}, size: ${item.size}, quantity: ${item.qty}`)
    })
    let total = formatCurrency(
      cartItems.reduce((amount, item) => (item.price * item.qty) + amount, 0),
      opts
    )
    console.log(`Total: ${total}`)
  }
  return (
    <>
      {showCart && (
        <div className='min-h-screen md:min-h-0 md:border p-5 grid grid-rows-cart md:fixed top-0 right-0 bg-black z-50'>
          <div className="text-rigth flex justify-end mb-2" onClick={showHideCart}>
          → CLOSE
          </div>
          <div className="text-8xl text-center mb-2">
            YOUR <span className="text-stroke-white text-stroke-2 text-fill-transparent">CART</span>
          </div>
          <div>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul className='max-h-80 overflow-y-auto'>
                {cartItems.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="mt-2 md:grid grid-cols-bottomCart">
            <div className='flex justify-between md:justify-start md:text-3xl'>
              <div>TOTAL:</div>
              <div >
                {formatCurrency(
                  cartItems.reduce((amount, item) => (item.price*item.qty) + amount, 0),
                  opts
                )}
              </div>
            </div>
            <div 
              className="md:pt-0 pt-4 border-t md:border-0 cursor-pointer text-5xl md:text-3xl text-center text-stroke-white text-stroke-2 text-fill-transparent"
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
