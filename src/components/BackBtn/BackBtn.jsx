import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function BackBtn(props) {
  const darkmode = useSelector((state) => state.darkmode.value);

  return (
    <div className={`px-5 lg:px-10 pb-5`}>
      <Link href={props.href}>
        <button
          className={`btn border-none shadow-none font-[utendo-medium] text-lg tracking-widest ${
            darkmode
              ? "bg-[#262626] hover:bg-[#5C5C5C] text-[#E4E4E4]"
              : "bg-[#E4E4E4] hover:bg-[#ABABAB] text-[#262626]"
          }`}
        >
          Back
        </button>
      </Link>
    </div>
  );
}
