import React from "react";
import { useSelector } from "react-redux";

export default function SearchInput(props) {
  const darkmode = useSelector((state) => state.darkmode.value);

  return (
    <div className={`px-5 md:px-10 py-5`}>
      <label
        className={`input input-bordered flex items-center gap-2 border-none sm:w-1/2 lg:w-1/4 xl:w-1/5 ${
          darkmode ? "bg-[#262626]" : "bg-[#E4E4E4]"
        }`}
      >
        <input
          onChange={(e) => props.searchVal(e.target.value)}
          type="text"
          className={`grow ${darkmode ? "text-[#E4E4E4]" : "text-[#262626]"}`}
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`w-6 h-6 opacity-70 ${
            darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
          }`}
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
}
