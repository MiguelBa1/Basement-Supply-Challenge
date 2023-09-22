import Image from "next/image";
import {useContext} from "react";

import {formatCurrency} from "../utils/formatCurrency";
import CartContext from "../context/cart/CartContext";

const CartItem = ({_id, name, img, description, qty, size, price}) => {
  const {changeQty, changeSize} = useContext(CartContext);

  const handleIncrement = () => changeQty({_id, qty: qty + 1});
  const handleDecrement = () => changeQty({_id, qty: qty - 1});
  const handleSize = (selectedSize) => changeSize({_id, size: selectedSize});

  return (
    <li className="flex p-2 mt-1 border-2 border-white h-36">
      <div className="relative w-24 h-32 bg-gradient-to-b from-final-gray to-initial-black">
        <Image alt={name} layout="fill" src={img} />
      </div>
      <div className="flex flex-col justify-between pl-3 md:text-xl">
        <div>{name}</div>
        <div className="text-sm text-gray-500 md:text-lg">{description}</div>
        <QuantitySelector qty={qty} onDecrement={handleDecrement} onIncrement={handleIncrement} />
        <SizeSelector currentSize={size} onSizeChange={handleSize} />
        <div className="text-sm md:text-lg">{formatCurrency(price)}</div>
      </div>
    </li>
  );
};

const QuantitySelector = ({qty, onIncrement, onDecrement}) => (
  <div className="text-xs md:text-lg">
    QUANTITY:
    <div className="inline-block w-16 px-1 ml-3 border rounded-xl">
      <div className="flex justify-around">
        <button aria-label="Decrement quantity" onClick={onDecrement}>
          -
        </button>
        <span>{qty}</span>
        <button aria-label="Increment quantity" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  </div>
);

const SizeSelector = ({currentSize, onSizeChange}) => {
  const sizes = ["S", "M", "L", "XL"];
  const sizeLabels = {
    S: "Small",
    M: "Medium",
    L: "Large",
    XL: "Extra Large",
  };

  return (
    <div className="text-xs md:text-lg">
      SIZE:
      <span className="ml-3">
        {sizes.map((size) => (
          <button
            key={size}
            aria-label={`Size ${sizeLabels[size]}`}
            aria-pressed={currentSize === size}
            className={`px-2 ${currentSize === size ? "border rounded-xl" : ""}`}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </span>
    </div>
  );
};

export default CartItem;
