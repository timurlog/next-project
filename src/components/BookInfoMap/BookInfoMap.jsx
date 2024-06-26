import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import H2 from "../H2/H2";
import BackBtn from "../BackBtn/BackBtn";

export default function BookInfoMap(props) {
  const darkmode = useSelector((state) => state.darkmode.value);

  // Function to put number with spaces
  function numberWithSpaces(x) {
    const parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

  return (
    <div className={`py-10 lg:px-32`}>
      <BackBtn href={"/book-list/"} />
      <H2 txt={props.title} />
      <p
        className={`px-5 py-3 lg:px-10 font-[utendo-medium] text-xl ${
          darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
        }`}
      >
        {props.authors}
      </p>
      <div className="md:grid md:grid-cols-2">
        <div className="py-3 sm:flex md:block xl:flex">
          <img
            className="px-5 lg:pl-10 md:pr-0 w-full sm:w-3/5 md:h-[60vh] md:w-auto"
            src={props.img}
            alt={props.title}
          />
          <div className="py-3 sm:py-0 flex flex-col md:pt-3 xl:pt-0">
            <p
              className={`px-5 lg:px-10 font-[utendo-regular] text-md xl:text-lg ${
                darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
              }`}
            >
              <span className="font-[utendo-bold]">Rating:</span> {props.rating}
            </p>
            <p
              className={`px-5 lg:px-10 font-[utendo-regular] text-md xl:text-lg ${
                darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
              }`}
            >
              <span className="font-[utendo-bold]">Rating Count:</span>{" "}
              {numberWithSpaces(props.rating_count)}
            </p>
            <p
              className={`px-5 lg:px-10 font-[utendo-regular] text-md xl:text-lg ${
                darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
              }`}
            >
              <span className="font-[utendo-bold]">Pages:</span>{" "}
              {props.num_pages}
            </p>
          </div>
        </div>
        <div>
          <p
            className={`px-5 py-3 lg:pr-10 font-[utendo-regular] text-md xl:text-lg ${
              darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
            }`}
          >
            <span className="font-[utendo-bold]">Description:</span>{" "}
            {props.description}
          </p>

          <p
            className={`px-5 py-3 lg:pr-10 font-[utendo-regular] text-md xl:text-lg ${
              darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
            }`}
          >
            <span className="font-[utendo-bold]">Genres:</span> {props.genres}
          </p>
        </div>
      </div>
      <div>
        <p
          className={`px-5 py-3 lg:px-10 font-[utendo-regular] text-md xl:text-lg ${
            darkmode ? "text-[#E4E4E4]" : "text-[#262626]"
          }`}
        >
          <span className="font-[utendo-bold]">From the same author :</span>
        </p>
        <div className="flex flex-col gap-3">
          {props.dataAuthors.map((item, i) => (
            <div key={i}>
              <Link
                className={`mx-5 py-3 pr-3 md:mx-10 font-[utendo-regular] text-md xl:text-lg hover:pl-3 rounded-md transition-all ${
                  darkmode
                    ? "text-[#E4E4E4] hover:bg-[#5C5C5C]"
                    : "text-[#262626] hover:bg-[#E4E4E4]"
                } hover:text-[#FF5400]`}
                href={`/book-list/${item.id}`}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
