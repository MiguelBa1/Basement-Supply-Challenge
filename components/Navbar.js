import Image from "next/image";

import logo from "../public/logo.svg";
import hd_4k from "../public/hd-4k.svg";

const Nabvar = () => {
    return (
        <nav className="flex justify-between p-5">
            <Image alt="Basement" src={logo} />
            <Image alt="Basement" src={hd_4k} />
            <button>CART(<span>0</span>)</button>
        </nav>
    )
}
export default Nabvar