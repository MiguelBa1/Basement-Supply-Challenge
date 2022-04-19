import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar.jsx";
import Marquee from "../components/Marquee.jsx";
import Product from "../components/Product.jsx";
import Cart from "../components/Cart.jsx";

import header from "../public/header.svg";
import footer from "../public/footer.svg";
import CartState from "../context/cart/CartState"

import products from "../product/mock.json";

const Home: NextPage = () => {
  return (
    <CartState>
      <header>
        <Cart />
        <Navbar />
        <div className="flex justify-center my-2 mx-2">
          <Image alt="Basement supply" src={header} />
        </div>
      </header>
      <Marquee />
      <div className="m-4 sm:flex gap-5 justify-between">
        {products.map(prod =>
          <Product
            key={prod._id}
            _id={prod._id}
            img={prod.img}
            name={prod.name}
            description={prod.description}
            price={prod.price}
          />
        )}
      </div>
      <footer>
        <div className="flex justify-center my-3 mx-2">
          <Image alt="Wear everyday" src={footer} />
        </div>
      </footer>
    </CartState>
  );
};

export default Home;
