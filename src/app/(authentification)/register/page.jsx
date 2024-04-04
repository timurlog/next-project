"use client";
import React from "react";
import { useSelector } from "react-redux";
import RegisterCard from "@/components/RegisterCard/RegisterCard";

export default function Register() {
  const darkmode = useSelector((state) => state.darkmode.value);

  return (
    <div
      className={`min-h-screen w-full flex justify-center items-center ${
        darkmode ? "bg-[#414141]" : "bg-white"
      }`}
    >
      <RegisterCard />
    </div>
  );
}
