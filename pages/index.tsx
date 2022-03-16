import type {NextPage} from "next";
import Navbar from "../components/Navbar.js";


import Image from "next/image";

import header from "../public/header.svg";

const Home: NextPage = () => {
  return (
    // <div className="h-full flex bg-black">
    <>
      <header className="max-w-full">
        <Navbar />
        <div className="w-screen relative">
          <Image className="max-w-full" alt="Basement" src={header} />
        </div>
      </header>
    </>
  );
};

export default Home;
