import Image from "next/image";
import {useContext} from "react";
import formatCurrency from "format-currency";

import CartContext from "../context/cart/CartContext";

const CartItem = ({item}) => {
  const {changeQty, changeSize} = useContext(CartContext);
  const sizes = ["S", "M", "L", "XL"];
  let opts = {format: "%s%v", symbol: "$"};

  const handleIncrement = () => changeQty({_id: item._id, qty: item.qty + 1});

  const handleDecrement = () => changeQty({_id: item._id, qty: item.qty - 1});

  const handleSize = (e) => changeSize({_id: item._id, size: e.target.textContent});

  return (
    <li className="flex p-2 mt-1 border-2 border-white " style={{height: "150px"}}>
      <div
        className="relative bg-gradient-to-b from-final-gray to-initial-black"
        style={{minWidth: "100px", height: "130px"}}
      >
        <Image layout="fill" src={item.img} />
      </div>
      <div className="flex flex-col justify-between pl-3 md:text-xl">
        <div>{item.name}</div>
        <div className="text-sm text-gray-500 md:text-lg">{item.description}</div>
        <div className="text-xs md:text-lg">
          QUANTITY:
          <span className="px-2 py-1 ml-3 border rounded-xl">
            <button onClick={handleDecrement}>-</button>
            <span className="mx-1">{item.qty}</span>
            <button onClick={handleIncrement}>+</button>
          </span>
        </div>
        <div className="text-xs md:text-lg">
          SIZE:
          <span className="ml-3">
            {sizes.map((size) => {
              return (
                <button
                  key={size}
                  className={`ml-2 py-0 ${item.size == size ? "border rounded-xl px-2" : ""}`}
                  onClick={handleSize}
                >
                  {size}
                </button>
              );
            })}
          </span>
        </div>
        <div className="text-sm md:text-lg">{formatCurrency(`${item.price}`, opts)}</div>
      </div>
    </li>
  );
};

export default CartItem;
