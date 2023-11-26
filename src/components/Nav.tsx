import Logo from "../assets/logo.svg";

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  return (
    <div className="bg-gradient-to-r from-black to-[#271A00]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-8 px-8">
        <div className="nav__logo">
          <img src={`${Logo}`} alt="" />
        </div>
        <div className="">
          <ul className="flex items-center gap-8 text-white font-bold text-base">
            <li>Kryefaqja</li>
            <li>Shaplljet</li>
            <li>Për Ne</li>
          </ul>
        </div>
        <div>
          <button className="bg-[#FFAC12] px-5 py-3 rounded-tr-xl">
            Bashkëpuno me ne
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
