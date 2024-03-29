import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "@/lib/features/darkmode/darkmodeSlice";
import { toggleShowMenu } from "@/lib/features/showmenu/showmenuSlice";
import Link from "next/link";

export default function NavbarNav() {
  const darkmode = useSelector((state) => state.darkmode.value);
  const showmenu = useSelector((state) => state.showmenu.value);
  const auth = useSelector((state) => state.auth.value);

  const dispatch = useDispatch();

  return (
    <div
      className={`z-50 absolute lg:static left-0 w-full lg:w-fit py-5 lg:py-0 ${
        darkmode
          ? "bg-[#262626] lg:bg-transparent"
          : "bg-[#FF5400] lg:bg-transparent"
      } ${
        showmenu ? "top-20 opacity-100" : "top-[-100%] opacity-0"
      } transition-all lg:opacity-100`}
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:w-fit">
        <Link
          onClick={() => {
            dispatch(toggleShowMenu());
          }}
          href={"/game-list"}
          className={`cursor-pointer text-2xl lg:mt-2 px-5 py-2 font-[utendo-medium] transition-colors ${
            darkmode ? "text-[#FF5400]" : "text-[#262626]"
          } ${
            darkmode
              ? "hover:bg-[#414141] lg:hover:text-[#FF6D00] lg:hover:bg-transparent"
              : "hover:bg-[#FF6D00] lg:hover:text-[#414141] lg:hover:bg-transparent"
          }`}
        >
          Game List
        </Link>

        <Link
          onClick={() => {
            dispatch(toggleShowMenu());
          }}
          href={"/favorite-game"}
          className={`cursor-pointer text-2xl lg:mt-2 px-5 py-2 font-[utendo-medium] transition-colors ${
            darkmode ? "text-[#FF5400]" : "text-[#262626]"
          } ${
            darkmode
              ? "hover:bg-[#414141] lg:hover:text-[#FF6D00] lg:hover:bg-transparent"
              : "hover:bg-[#FF6D00] lg:hover:text-[#414141] lg:hover:bg-transparent"
          }`}
        >
          Favorite Game
        </Link>

        <Link
          onClick={() => {
            dispatch(toggleShowMenu());
          }}
          href={"/sign-in"}
          className={`cursor-pointer text-2xl lg:mt-2 px-5 py-2 font-[utendo-medium] transition-colors ${
            darkmode ? "text-[#FF5400]" : "text-[#262626]"
          } ${
            darkmode
              ? "hover:bg-[#414141] lg:hover:text-[#FF6D00] lg:hover:bg-transparent"
              : "hover:bg-[#FF6D00] lg:hover:text-[#414141] lg:hover:bg-transparent"
          } ${auth ? "hidden" : "block"}`}
        >
          Sign In
        </Link>

        <div
          onClick={() => {
            dispatch(toggleShowMenu());
          }}
          className={`cursor-pointer text-2xl lg:mt-2 px-5 py-2 font-[utendo-medium] transition-colors ${
            darkmode ? "text-[#FF5400]" : "text-[#262626]"
          } ${
            darkmode
              ? "hover:bg-[#414141] lg:hover:text-[#FF6D00] lg:hover:bg-transparent"
              : "hover:bg-[#FF6D00] lg:hover:text-[#414141] lg:hover:bg-transparent"
          } ${auth ? "block" : "hidden"}`}
        >
          Sign Out
        </div>

        <div
          className={`px-5 py-2 transition-colors ${
            darkmode ? "text-[#FF5400]" : "text-[#262626]"
          }`}
        >
          <label className="swap swap-rotate">
            <input
              onClick={() => {
                dispatch(toggleDarkMode());
              }}
              defaultChecked={darkmode}
              type="checkbox"
              className="theme-controller"
            />

            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className={`swap-on fill-current w-10 h-10`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
}
