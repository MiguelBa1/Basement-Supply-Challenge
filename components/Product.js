import Image from "next/image";

const Product = ({img, name, price}) => {
    return (
        <div>
            {/* Background degradient */}
            <div className="bg-gradient-to-b from-initial-black to-final-gray border-b-2"> 
                <Image className="h-50" src={img}/>
            </div>
            <div className="flex justify-between font-basement">
                <span>{name}</span>
                <span>{`$ ${price}`}</span>
            </div>
        </div>
    )
}

export default Product