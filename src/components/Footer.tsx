import { Link } from "react-router-dom";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mt-16 h-72 bg-gradient-to-r from-black to-[#271A00]">
      <div className="max-w-7xl mx-auto ">
        <div className="pt-20 pb-14 flex items-center justify-between border-b border-[#979797]/40">
          <div
            className="flex items-center gap-3"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span className="text-white font-bold text-5xl">
              Bëje ëndrrën tënde
            </span>
            <span className="text-[#FFAC12] font-bold text-5xl">realitet</span>
          </div>
          <Link
            data-aos="fade-up"
            data-aos-duration="800"
            to="aboutus"
            className="bg-[#FFAC12] px-5 py-3 rounded-tr-xl font-bold"
          >
            Bashkëpuno me ne
          </Link>
        </div>
        <div className="flex items-center justify-between py-10">
          <ul className="flex items-center gap-10">
            <li className="text-white font-bold text-sm">
              @{currentYear} City Scape - Real Estate
            </li>
            <Link to="/aboutus" className="text-gray-300 font-thin text-sm">
              Rreth Nesh
            </Link>
            <li className="text-gray-300 font-thin text-sm">Kontakt</li>
          </ul>
          <ul className="flex items-center justify-between gap-10">
            <li>
              <img src={`${Facebook}`} alt="" />
            </li>
            <li>
              <img src={`${Instagram}`} alt="" />
            </li>
            <li>
              <img src="" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
