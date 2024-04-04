import React from "react";
import { useSelector } from "react-redux";
import H1 from "../H1/H1";
import Link from "next/link";
import BackBtn from "../BackBtn/BackBtn";

export default function RegisterCard() {
  const darkmode = useSelector((state) => state.darkmode.value);

  return (
    <div className="w-full lg:w-4/5 xl:w-1/2 h-screen flex flex-col pt-20">
      <div className="md:px-[120px]">
        <BackBtn href={"/"} />
      </div>
      <H1 txt={"Register"} />
      <div className="px-5 md:px-40 flex flex-col gap-3">
        <label
          className={`input input-bordered flex items-center gap-2 ${
            darkmode
              ? "bg-[#262626] text-[#E4E4E4]"
              : "bg-[#E4E4E4] text-[#262626]"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className={`w-6 h-6 opacity-70 ${
              darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
            }`}
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="grow" placeholder="Choose a Username" />
        </label>
        <label
          className={`input input-bordered flex items-center gap-2 ${
            darkmode
              ? "bg-[#262626] text-[#E4E4E4]"
              : "bg-[#E4E4E4] text-[#262626]"
          }`}
        >
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
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Create a Password"
          />
        </label>
        <button
          className={`btn w-full border-none shadow-none font-[utendo-medium] text-lg tracking-widest ${
            darkmode
              ? "bg-[#262626] hover:bg-[#5C5C5C] text-[#E4E4E4]"
              : "bg-[#E4E4E4] hover:bg-[#ABABAB] text-[#262626]"
          }`}
        >
          Create an account
        </button>
        <p
          className={`text-center ${
            darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
          }`}
        >
          To log in,{" "}
          <Link className="underline hover:text-blue-600" href={"/sign-in"}>
            click here
          </Link>
        </p>
      </div>
    </div>
  );
}
