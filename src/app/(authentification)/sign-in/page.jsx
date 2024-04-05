"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { logintru } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import SignInCard from "@/components/SignInCard/SignInCard";

export default function SignIn() {
  const router = useRouter();
  const connexion = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [mdp, setMdp] = useState("");

  const darkmode = useSelector((state) => state.darkmode.value);

  // Function pour se connecter
  function conect() {
    for (let i = 0; i < connexion.name.length; i++) {
      if (connexion.name[i] == name && connexion.password[i] == mdp) {
        setTimeout(() => {
          router.push("/");
        }, 1300);
        dispatch(logintru(!connexion.status));
      }
    }
  }

  return (
    <div>
      {connexion.status ? (
        <div
          className={`h-screen w-full ${
            darkmode ? "bg-[#414141]" : "bg-white"
          }`}
        >
          <div className="h-full w-full flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </div>
      ) : (
        <div
          className={`min-h-screen w-full flex justify-center items-center ${
            darkmode ? "bg-[#414141]" : "bg-white"
          }`}
        >
          <SignInCard conect={conect} name={setName} mdp={setMdp} />
        </div>
      )}
    </div>
  );
}
