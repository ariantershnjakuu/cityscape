import ContentImage from "../assets/content-image.svg";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";

interface DesctiptionProps {}

const Desctiption: React.FC<DesctiptionProps> = () => {
  const elementRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const handleIntersection = (entries: any) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust the threshold as needed
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`animated ${
        animate ? "slide-in-bck-center" : ""
      } bg-white relative`}
    >
      <div className="pt-32 h-[675px] flex items-center gap-20">
        <div className="absolute -bottom-40 left-0 scale-in-hor-left">
          <img src={`${ContentImage}`} alt="" width={704} />
        </div>
        <div className="ml-[750px] max-w-xl slide-in-bck-center">
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
