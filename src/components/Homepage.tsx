import React from "react";
import BgImage from "../assets/bg-image.svg";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = () => {
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
      <main className="max-w-7xl mx-auto">
        <div className="z-10 relative pt-20 pl-8 max-w-sm">
          <span className="text-white font-bold text-7xl">
            Shtëpia e ëndrrave është këtu!
          </span>
          <br />
          <br />
          <span className="text-white/70 font-light text-lg max-w-md">
            Në agjensinë tonë, ofrojmë një eksperiencë të personalizuar për
            blerësit dhe shitësit, duke ju ndihmuar të gjeni dhe të shisni
            pronën e ëndrrave tuaja në mënyrë të sigurt dhe efikase.
          </span>
        </div>
        <div className="px-8 mt-6 group">
          <button
            className="bg-white text-start pl-8 text-black font-bold 
          text-xl w-full h-24 relative z-10 flex items-center gap-3 "
          >
            Shiko të gjitha pronat
            <ArrowLongRightIcon className="h-5 w-5 text-[#FFAC12] group-hover:translate-x-2 transition-all duration-150" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
