import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar.js";
import Marquee from "../components/Marquee.js";
import Product from "../components/Product.js";

import header from "../public/header.svg";
import footer from "../public/footer.svg";
import shirt from "../public/products/shirt.png"
import hoodie from "../public/products/hoodie.png"
import cap from "../public/products/cap.png"

const Home: NextPage = () => {
  return (
    // <div className="h-full flex bg-black">
    <>
      <header>
        <Navbar />
        <div className="flex justify-center my-2 mx-2">
          <Image alt="Basement supply" src={header} />
        </div>
      </header>
      <Marquee />
      <div className="m-4 sm:flex gap-5 justify-between">
        <Product img={shirt} name="Black t-shirt" price={7.45} />
        <Product img={hoodie} name="Black hoodie" price={13} />
        <Product img={cap} name="Black cap" price={23} />
      </div>
      <footer>
        <div className="flex justify-center my-3 mx-2">
          <Image alt="Wear everyday" src={footer} />
        </div>
      </footer>
    </>
  );
};

export default Home;
