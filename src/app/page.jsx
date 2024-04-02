"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContent } from "@/lib/features/content/contentSlice";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Carousel from "@/components/Carousel/Carousel";
import H1 from "@/components/H1/H1";
import BookRating from "@/components/BookRating/BookRating";

export default function Home() {
  const darkmode = useSelector((state) => state.darkmode.value);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  const contents = useSelector((state) => state.content.contents);
  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

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
      <Carousel />
      <H1 txt={"Your book directory"} />
      <BookRating />
      <Footer />
    </div>
  );
}
