import Image from "next/image";
import { useContext } from "react";
import hoverImg from "../public/add-to-cart.svg"
import CartContext from "../context/cart/CartContext";

const Product = (product) => {
    const { addToCart, cartItems } = useContext(CartContext);
    return (
        <div>
            <div 
                className="bg-gradient-to-b from-final-gray to-initial-black border-b-2 relative"
                onClick={() => {
                    let valid = cartItems.filter((item) => item._id == product._id);
                    if (valid.length == 0) addToCart(product)
                }}
            > 
                <div className="z-0">
                    <Image src={product.img} width={880} height={1156}/>
                </div>
                <div className="absolute inset-0 opacity-0 hover:opacity-100 duration-300 z-100 flex justify-center items-center">
                    <Image src={hoverImg}/>
                </div>
            </div>
            <div className="flex justify-between text-xl">
                <span>{product.name}</span>
                <span>{`$ ${product.price}`}</span>
            </div>
        </div>
    )
}

export default Product