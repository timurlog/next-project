import React from "react";
import { useSelector } from "react-redux";

export default function NavbarNav() {
  const darkmode = useSelector((state) => state.darkmode.value);
  const showmenu = useSelector((state) => state.showmenu.value);

  return (
    <div
      className={`z-50 absolute left-0 w-full px-5 py-10 ${
        darkmode ? "bg-[#262626]" : "bg-[#FF5400]"
      } ${
        showmenu ? "top-20 opacity-100" : "top-[-100%] opacity-0"
      } transition-all`}
    >
      <div className="flex flex-col gap-3">
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
        <div>aaaaa</div>
      </div>
    </div>
  );
}
