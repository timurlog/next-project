import React from "react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-10 bg-[#262626] text-[#E4E4E4]">
      <aside>
        <Image
          className="inline-block fill-current"
          width={50}
          height={50}
          src="/favicon.ico"
          alt="logo"
        />
        <p className="font-[utendo-bold]">
          BookStash <br />
          Book directory since 2011
        </p>
        <p>Copyright © {currentYear} - All right reserved</p>
      </aside>
    </footer>
  );
}
