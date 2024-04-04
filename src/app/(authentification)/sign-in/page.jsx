"use client";
import React from "react";
import { useSelector } from "react-redux";
import SignInCard from "@/components/SignInCard/SignInCard";

export default function SignIn() {
  const darkmode = useSelector((state) => state.darkmode.value);

  return (
    <div
      className={`min-h-screen w-full flex justify-center items-center ${
        darkmode ? "bg-[#414141]" : "bg-white"
      }`}
    >
      <SignInCard />
    </div>
  );
}
