import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

interface AllPropertyButtonProps {}

const AllPropertyButton: React.FC<AllPropertyButtonProps> = () => {
  return (
    <div className="px-8 mt-6 group">
      <Link
        data-aos="fade-right"
        data-aos-duration="800"
        to="/property-page"
        className="bg-white text-start pl-8 text-black font-bold 
    text-xl w-full h-24 relative z-10 flex items-center gap-3"
      >
        Shiko të gjitha pronat
        <ArrowLongRightIcon className="h-5 w-5 text-[#FFAC12] group-hover:translate-x-2 transition-all duration-150" />
      </Link>
    </div>
  );
};

export default AllPropertyButton;
