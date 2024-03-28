import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function NavbarTitle() {
  const darkmode = useSelector((state) => state.darkmode.value);

  return (
    <Link
      href={"/"}
      className={`text-4xl font-[utendo-bold] ${
        darkmode ? "text-[#FF5400]" : "text-[#262626]"
      }`}
    >
      GameStash
    </Link>
  );
}
