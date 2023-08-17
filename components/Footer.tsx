import Image from "next/image";

import footer from "../public/footer.svg";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-center mx-2 my-3">
        <Image alt="Wear everyday" src={footer} />
      </div>
    </footer>
  );
};

export default Footer;
