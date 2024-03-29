"use client";
import { useSelector } from "react-redux";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  const darkmode = useSelector((state) => state.darkmode.value);

  return (
    <div
      className={`min-h-screen w-full ${
        darkmode ? "bg-[#414141]" : "bg-white"
      }`}
    >
      <Navbar />
    </div>
  );
}
