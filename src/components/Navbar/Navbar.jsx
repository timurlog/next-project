import BurgerBtn from "../BurgerBtn/BurgerBtn";
import NavbarTitle from "../NavbarTitle/NavbarTitle";
import NavbarNav from "../NavbarNav/NavbarNav";

import { useSelector } from "react-redux";

export default function Navbar() {
  const darkmode = useSelector((state) => state.darkmode.value);

  return (
    <header
      className={`h-20 w-full px-5 lg:px-10 ${
        darkmode ? "bg-[#262626]" : "bg-[#FF5400]"
      }`}
    >
      <nav className={`h-full w-full flex justify-between items-center`}>
        <NavbarTitle />
        <BurgerBtn />
        <NavbarNav />
      </nav>
    </header>
  );
}
