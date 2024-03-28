"use client";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "@/lib/features/darkmode/darkmodeSlice";

export default function Navbar() {
  const darkmode = useSelector((state) => state.darkmode.value);

  const dispatch = useDispatch();

  return (
    <header className={`h-20 ${darkmode ? "bg-[#262626]" : "bg-white"}`}>
      <nav>
        <div></div>
      </nav>
    </header>
  );
}
