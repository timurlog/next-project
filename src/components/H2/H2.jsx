import React from "react";
import { useSelector } from "react-redux";

export default function H2(props) {
  const darkmode = useSelector((state) => state.darkmode.value);

  return (
    <h2
      className={`px-5 md:px-10 font-[utendo-bold] text-4xl md:text-5xl lg:text-6xl tracking-wide ${
        darkmode ? "text-[#FF5400]" : "text-[#FF5400]"
      }`}
    >
      {props.txt}
    </h2>
  );
}
