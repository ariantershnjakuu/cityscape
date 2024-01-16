import React from "react";
import { useEffect } from "react";
import BgImage from "../assets/bg-image.svg";
import AllPropertyButton from "../utils/AllPropertyButton";
import "aos/dist/aos.css";
import Aos from "aos";

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "675px",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/50 to-black/20"></div>
      <div className="max-w-7xl mx-auto">
        <div className="z-10 relative pt-20 pl-8 max-w-sm">
          <span
            className="text-white font-bold text-7xl"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            Shtëpia e ëndrrave është këtu!
          </span>
          <br />
          <br />
          <span
            className="text-white/70 font-light text-lg max-w-md"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Në agjensinë tonë, ofrojmë një eksperiencë të personalizuar për
            blerësit dhe shitësit, duke ju ndihmuar të gjeni dhe të shisni
            pronën e ëndrrave tuaja në mënyrë të sigurt dhe efikase.
          </span>
        </div>
        <AllPropertyButton />
      </div>
    </div>
  );
};

export default Homepage;
