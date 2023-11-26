import React from "react";
import Nav from "../../components/Nav";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <Nav />
    </header>
  );
};

export default Header;
