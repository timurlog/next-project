import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import H2 from "../H2/H2";
import { useSelector } from "react-redux";

export default function BookRating() {
  const darkmode = useSelector((state) => state.darkmode.value);

  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) {
    return <div className="text-orange-600 text-[100px]">isLoading</div>;
  }
  if (error) {
    return error;
  }

  const [topBooks, setTopBooks] = useState([]);

  useEffect(() => {
    // Trier les livres par note, en ordre décroissant
    const sortedBooks = [...contents]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
    setTopBooks(sortedBooks);
  }, []);

  console.log(topBooks);

  return (
    <div className="py-10 bg-[#262626]">
      <H2 txt={"Top Book"} />
      <div
        className={`pt-10 px-5 md:px-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center gap-10`}
      >
        {topBooks.map((item, i) => (
          <Link href={`/book-list/${item.id}`}>
            <div
              key={i}
              className={`w-full h-fit text-[#E4E4E4] hover:bg-[#5C5C5C] p-5 transition-colors rounded-lg`}
            >
              <div className="w-full h-40 flex flex-col justify-between gap-3 pb-5">
                <div className={`font-[utendo-regular] text-xl`}>
                  {item.title}
                </div>
                <div className={`font-[utendo-medium] text-4xl`}>
                  Note: {item.rating}
                </div>
              </div>
              <img className="w-full" src={item.image_url} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
