import React from "react";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function BurgerBtn() {
  const darkmode = useSelector((state) => state.darkmode.value);

  return (
    <label className="swap swap-rotate">
      <input type="checkbox" />

      <div className="swap-off fill-current w-10 h-10 flex justify-center items-center">
        <FontAwesomeIcon
          icon={faBars}
          className={`text-3xl ${
            darkmode ? "text-[#FF5400]" : "text-[#262626]"
          }`}
        />
      </div>

      <div className="swap-on fill-current w-10 h-10 flex justify-center items-center">
        <FontAwesomeIcon
          icon={faXmark}
          className={`text-4xl ${
            darkmode ? "text-[#FF5400]" : "text-[#262626]"
          }`}
        />
      </div>
    </label>
  );
}
