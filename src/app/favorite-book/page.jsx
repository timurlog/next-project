"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContent } from "@/lib/features/content/contentSlice";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BookFavMap from "@/components/BookFavMap/BookFavMap";

export default function FavoriteBook() {
  const darkmode = useSelector((state) => state.darkmode.value);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);
  const favoriteArray = useSelector((state) => state.favorite.value);

  const [favData, setFavData] = useState([]);

  useEffect(() => {
    const filteredContents = contents.filter((content) =>
      favoriteArray.includes(content.id)
    );
    setFavData(filteredContents);
  }, [favoriteArray, contents]);

  if (isLoading) {
    return (
      <div
        className={`h-screen w-full ${darkmode ? "bg-[#414141]" : "bg-white"}`}
      >
        <Navbar />
        <div className="h-[80vh] w-full flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return error;
  }

  return (
    <div
      className={`min-h-screen w-full ${
        darkmode ? "bg-[#414141]" : "bg-white"
      }`}
    >
      <Navbar />
      <div className="min-h-[90vh]">
        <BookFavMap data={favData} />
      </div>
      <Footer />
    </div>
  );
}
