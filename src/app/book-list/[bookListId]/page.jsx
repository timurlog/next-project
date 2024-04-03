"use client";
import React, { useEffect } from "react";
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
  const data = contents[param - 1] ? [contents[param - 1]] : null; // Ensure data is either an object or null

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
        <BookInfoMap key={i} title={item.title} />
      ))}
      <Footer />
    </div>
  );
}
