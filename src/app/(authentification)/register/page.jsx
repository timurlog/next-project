"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { registername } from "@/lib/features/auth/authSlice";
import { registermdp } from "@/lib/features/auth/authSlice";
import RegisterCard from "@/components/RegisterCard/RegisterCard";

export default function Register() {
  const router = useRouter();
  const connexion = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [mdp, setMdp] = useState("");

  const darkmode = useSelector((state) => state.darkmode.value);

  // Function pour s'enregistrer
  function register() {
    for (let i = 0; i < connexion.name.length; i++) {
      if (connexion.name[i] != name && mdp.length > 0 && name.length > 0) {
        dispatch(registername(name));
        dispatch(registermdp(mdp));
        setTimeout(() => {
          router.push("/sign-in");
        }, 1);
      }
    }
  }

  return (
    <div
      className={`min-h-screen w-full flex justify-center items-center ${
        darkmode ? "bg-[#414141]" : "bg-white"
      }`}
    >
      <RegisterCard register={register} name={setName} mdp={setMdp} />
    </div>
  );
}
