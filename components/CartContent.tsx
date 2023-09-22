import {CartItemType} from "../types";

import CartItem from "./CartItem";

interface CartContentProps {
  cartItems: CartItemType[];
}

const CartContent: React.FC<CartContentProps> = ({cartItems}) => {
  if (cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <span>There are no items in your cart.</span>
      </div>
    );
  }

  return (
    <ul>
      {cartItems.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
    </ul>
  );
};

export default CartContent;
