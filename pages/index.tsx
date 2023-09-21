import type {NextPage} from "next";
import Image from "next/image";

import HeaderBar from "../components/HeaderBar";
import Marquee from "../components/Marquee";
import CartModal from "../components/CartModal";
import ThreeDAsterisk from "../components/ThreeDAsterisk";
import header from "../public/header.svg";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <div className="relative z-100">
        <HeaderBar />
        <CartModal />
        <div className="flex justify-center m-2">
          <Image alt="Basement supply" src={header} />
        </div>
        <Marquee />
        <ProductList />
        <Footer />
      </div>
      <ThreeDAsterisk />
    </div>
  );
};

export default Home;
