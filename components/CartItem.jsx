import Image from "next/image";
import { useContext, useState } from "react";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";

const CartItem = ({ item }) => {
  const { removeItem, changeQty, changeSize } = useContext(CartContext);
  // const [currentSize, setSize] = useState("M")
  const sizes = ["S", "M", "L", "XL"]
  let opts = { format: "%s%v", symbol: "$" };

  const handleIncrement = () => changeQty({_id: item._id, qty: item.qty+1})

  const handleDecrement = () => changeQty({_id: item._id, qty: item.qty-1})

  const handleSize = (e) => changeSize({_id: item._id, size: e.target.textContent})
  // const handleSize = (e) => {
  //   console.log(e.target.textContent)
  // }
  return (
    <li className='flex border-white border-2 p-2 mt-1 ' style={{height: "150px"}}>
      <div 
        className="bg-gradient-to-b from-final-gray to-initial-black relative"
        style={{ minWidth: "100px", height: "130px" }}
      >
        <Image src={item.img} layout="fill" />
      </div>
      <div className="md:text-xl pl-3 flex flex-col justify-between">
        <div>
          {item.name} 
        </div>
        <div className="text-gray-500 text-sm md:text-lg">
          {item.description} 
        </div>
        <div className="text-xs md:text-lg">
          QUANTITY: 
          <span className="ml-3 px-2 py-1 border rounded-xl">
            <button onClick={handleDecrement}>-</button>
            <span className="mx-1">
              {item.qty}
            </span>
            <button onClick={handleIncrement}>+</button>
          </span>
        </div>
        <div className="text-xs md:text-lg">
          SIZE:
          <span className="ml-3">
            {sizes.map(size => {
              return (<button
                onClick={handleSize}
                key={size}
                className={`ml-2 py-0 ${item.size == size ? "border rounded-xl px-2" : ""}`}
              >
                {size}
              </button>)
            })}
          </span>
        </div>
        <div className="text-sm md:text-lg">
          {formatCurrency(`${item.price}`, opts)}
        </div>
      </div>
    </li>
  );
};

export default CartItem;
