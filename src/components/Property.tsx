import AllPropertyButton from "../utils/AllPropertyButton";
import PropertyCard from "./PropertyCard";
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import { Property } from "../Types/Property";

interface PropertyAddProps {}

const PropertyAdd: React.FC<PropertyAddProps> = () => {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [property, setProperty] = useState<any[]>([]);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const { data, error } = await supabase.from("Property").select("*");

        if (error) {
          console.error("Error fetching data:", error);
          setFetchError("Something went wrong!");
          setProperty([]);
        }

        if (data) {
          setFetchError("");
          setProperty(data);
        }
      } catch (error) {
        console.error("Error in fetchProperty:", error);
        setFetchError("An unexpected error occurred.");
        setProperty([]);
      }
    };

    fetchProperty();
  }, []);
  return (
    <div className="mt-72 max-w-7xl mx-auto">
      <div className="px-8 pb-4">
        <div className="w-48 h-1 rounded-lg bg-gradient-to-r from-[#FFAC12] to-black mb-8"></div>
        <span className="text-black font-bold text-5xl text-start">
          Gjej vendin tënd të ardhshëm për të jetuar
        </span>
      </div>
      <AllPropertyButton />
      <div className="grid px-8 mt-14 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {property.map((item: Property) => {
          return (
            <PropertyCard
              id={item.id}
              name={item.name}
              main_image={item.main_image}
              description={item.description}
              price={item.price}
              rooms={item.rooms}
              bath={item.bath}
              features={item.features}
              types={item.types}
              documments={item.documments}
              address={item.address}
              images={item.images}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PropertyAdd;
