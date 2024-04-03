import React from "react";
import H2 from "../H2/H2";
import SearchInput from "../SearchInput/SearchInput";
import BookCard from "../BookCard/BookCard";

export default function BookMap(props) {
  return (
    <div className={`py-10`}>
      <H2 txt={"Book List"} />
      <SearchInput searchVal={props.searchVal} />
      <div
        className={`px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10`}
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
    </div>
  );
}
