import React from "react";
import { useSelector } from "react-redux";

export default function H1(props) {
  const darkmode = useSelector((state) => state.darkmode.value);

  return (
    <h1
      className={`text-center font-[utendo-black] text-7xl md:text-8xl lg:text-9xl py-10 md:py-14 lg:py-20 xl:py-32 ${
        darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
      }`}
    >
      {props.txt}
    </h1>
  );
}
