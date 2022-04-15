import Image from "next/image";

import hoverImg from "../public/add-to-cart.svg"

const Product = ({img, name, price}) => {
    return (
        <div>
            {/* Background degradient */}
            <div className="bg-gradient-to-b from-final-gray to-initial-black border-b-2 relative"> 
                <div className="z-0">
                    <Image src={img} width={880} height={1156}/>
                </div>
                <div className="absolute inset-0 opacity-0 hover:opacity-100 duration-300 z-100 flex justify-center items-center">
                    <Image src={hoverImg}/>
                </div>
            </div>
            <div className="flex justify-between text-xl">
                <span>{name}</span>
                <span>{`$ ${price}`}</span>
            </div>
        </div>
    )
}

export default Product