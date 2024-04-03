"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContent } from "@/lib/features/content/contentSlice";
import Footer from "@/components/Footer/Footer";
import BookInfoMap from "@/components/BookInfoMap/BookInfoMap";

export default function BookInfo({ params }) {
  const darkmode = useSelector((state) => state.darkmode.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  const param = params.bookListId;
  const data =
    contents && contents.length > 0 && contents[param - 1]
      ? [contents[param - 1]]
      : null; // Ensure data is either an object or null
  const [dataAuthors, setDataAuthors] = useState([]);

  useEffect(() => {
    if (!data || !contents) return;

    const newFilteredData = contents.filter((item) =>
      item.authors.toLowerCase().includes(data[0].authors.toLowerCase())
    );

    // Only update state if the filtered data has changed
    // This requires a way to compare the newFilteredData with dataAuthors, which might be non-trivial if the objects have deep nested structures
    if (JSON.stringify(newFilteredData) !== JSON.stringify(dataAuthors)) {
      setDataAuthors(newFilteredData);
    }
  }, [data, contents]); // Assuming `data` and `contents` don't change on every render

  if (isLoading) {
    return (
      <div
        className={`h-screen w-full ${darkmode ? "bg-[#414141]" : "bg-white"}`}
      >
        <div className="h-[100vh] w-full flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return error;
  }

  if (!data) {
    return (
      <div
        className={`h-screen w-full ${darkmode ? "bg-[#414141]" : "bg-white"}`}
      >
        <div className="h-[100vh] w-full flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen w-full ${
        darkmode ? "bg-[#414141]" : "bg-white"
      }`}
    >
      {data.map((item, i) => (
        <BookInfoMap
          key={i}
          title={item.title}
          authors={item.authors}
          img={item.image_url}
          description={item.description}
          rating={item.rating}
          rating_count={item.rating_count}
          num_pages={item.num_pages}
          genres={item.genres}
          dataAuthors={dataAuthors}
        />
      ))}
      <Footer />
    </div>
  );
}
