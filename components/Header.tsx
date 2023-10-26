import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-36 fixed inset-0 h-20 bg-white">
      <div className="flex items-center justify-between space-x-2">
        <Link href="/">
          <Image src={logo} width={200} alt="Image" className="rounded" />
        </Link>
      </div>
      <div className="space-x-5 text-gray-500 font-medium ">
        <Link href="/" className="hover:underline">
          Sign In
        </Link>
        <button className="bg-[#F7AB0A] py-2 px-4 text-white rounded hover:bg-black transition-all">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
