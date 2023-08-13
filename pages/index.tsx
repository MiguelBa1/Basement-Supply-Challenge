import type {NextPage} from "next";
import Image from "next/image";

import HeaderBar from "../components/HeaderBar";
import Marquee from "../components/Marquee";
import CartModal from "../components/CartModal";
import header from "../public/header.svg";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const Home: NextPage = () => {
  return (
    <>
      <HeaderBar />
      <CartModal />
      <div className="flex justify-center m-2">
        <Image alt="Basement supply" src={header} />
      </div>
      <Marquee />
      <ProductList />
      <Footer />
    </>
  );
};

export default Home;
