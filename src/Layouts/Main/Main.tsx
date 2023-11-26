import React from "react";
import Homepage from "../../components/Homepage";
import Desctiption from "../../components/Description";
import Property from "../../components/Property";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <main>
      <Homepage />
      <Desctiption />
      <Property />
    </main>
  );
};

export default Main;
