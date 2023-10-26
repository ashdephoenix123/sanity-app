import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center justify-between space-x-2">
        <Link href="/">
          <Image
            src="https://www.akashsarki.me/me.jpg"
            width={50}
            height={50}
            alt="Image"
            className="rounded"
          />
        </Link>
        <h1>BlogRover</h1>
      </div>
      <button className="bg-[#F7AB0A] py-2 px-4 text-white rounded">
        Contact Us
      </button>
    </header>
  );
};

export default Header;
