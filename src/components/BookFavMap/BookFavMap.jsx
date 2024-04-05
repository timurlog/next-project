import React from "react";
import H2 from "../H2/H2";
import BookCard from "../BookCard/BookCard";
import { useSelector, useDispatch } from "react-redux";
import { delAll } from "@/lib/features/favorite/favoriteSlice";

export default function BookFavMap(props) {
  const darkmode = useSelector((state) => state.darkmode.value);
  const dispatch = useDispatch();

  return (
    <div className={`py-10`}>
      <H2 txt={"Favorite Book List"} />
      <div className="px-5 lg:px-10 pt-3">
        <button
          onClick={() => dispatch(delAll())}
          className={`btn border-none shadow-none font-[utendo-medium] text-lg tracking-widest ${
            darkmode
              ? "bg-[#262626] hover:bg-[#5C5C5C] text-[#E4E4E4]"
              : "bg-[#E4E4E4] hover:bg-[#ABABAB] text-[#262626]"
          }`}
        >
          Delete all
        </button>
      </div>
      <div>
        {props.data.length == 0 ? (
          <div
            className={`px-5 pt-5 lg:px-10 flex justify-center items-center text-3xl`}
          >
            No favorites
          </div>
        ) : (
          <div
            className={`px-5 pt-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10`}
          >
            {props.data.map((item, i) => (
              <BookCard
                key={i}
                title={item.title}
                img={item.image_url}
                authors={item.authors}
                rating={item.rating}
                genres={item.genres}
                id={item.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
