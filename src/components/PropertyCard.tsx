import { Property } from "../Types/Property";
import Room from "../assets/rooms.svg";
import Bath from "../assets/bath.svg";
import Document from "../assets/document.svg";

enum PropertyType {
  SHITJE = "Në shitje",
  QERA = "Me qera",
  VIP = "Ekskluzive",
}

const PropertyCard: React.FC<Property> = ({
  id,
  main_image,
  images,
  address,
  bath,
  description,
  features,
  documments,
  price,
  rooms,
  types,
  name,
}) => {
  return (
    <div key={id} className="relative bg-white rounded-3xl h-[418px] w-full">
      <div
        className={`rounded-2xl px-4 py-1 text-white font-bold absolute top-5 left-5 z-50 shadow-lg ${
          types === PropertyType.SHITJE
            ? "bg-[#FFAC12]"
            : types === PropertyType.QERA
            ? "bg-[#5998F7]"
            : "bg-[#C90000]"
        }`}
      >
        {types}
      </div>
      <img
        src={`${main_image}`}
        alt=""
        className="rounded-t-3xl max-h-[266px] h-full w-full object-cover"
      />
      <div className="flex items-center justify-between p-5 border-b border-[#979797]">
        <div className="flex flex-col gap-1">
          <span className="text-black font-bold text-2xl">{name}</span>
          <span className="text-black font-medium text-base">{address}</span>
        </div>
        <span className="text-black font-medium text-lg">{price}$</span>
      </div>
      <div className="grid grid-cols-3 h-[52px] text-xs font-bold">
        <span className="border-r border-[#979797] flex items-center justify-center gap-3 ">
          <img src={`${Room}`} alt="" />
          {rooms}
        </span>
        <span className="border-r border-[#979797] flex items-center justify-center gap-3">
          <img src={`${Bath}`} alt="" />
          {bath}
        </span>
        <span className="flex items-center justify-center gap-2">
          <img src={`${Document}`} alt="" />
          {documments ? "Flete poseduese" : "Jo ne rregull"}
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
