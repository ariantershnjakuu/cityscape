import React from "react";
import ContentImage from "../assets/content-image.svg";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface DesctiptionProps {}

const Desctiption: React.FC<DesctiptionProps> = () => {
  return (
    <div className="bg-white relative">
      <div className="pt-32 h-[675px] flex items-center gap-20">
        <div className="absolute -bottom-40 left-0">
          <img src={`${ContentImage}`} alt="" width={704} />
        </div>
        <div className="ml-[750px] max-w-xl">
          <div className="w-48 h-1 rounded-lg bg-gradient-to-r from-[#FFAC12] to-black"></div>
          <h1 className="text-5xl font-bold text-black text-start first-letter mt-7">
            Jeni në duar të sigurta
          </h1>
          <p className="text-start mt-4 text-black/60 text-xl font-thin">
            Përvoja jonë e gjatë në tregun e patundshmërive dhe njohja e thellë
            e zonave të ndryshme na bën ne një zgjedhje të besueshme për nevojat
            tuaja në zgjedhjen e pronës tuaj ideale.
          </p>
          <Link
            to="/property-page"
            className="bg-black text-white px-5 py-3 rounded-tr-xl mt-8 font-bold flex items-center gap-3 w-56"
          >
            Shiko më shumë
            <ArrowLongRightIcon className="h-5 w-5 text-[#FFAC12]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Desctiption;
