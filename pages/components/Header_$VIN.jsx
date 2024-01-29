import React from "react";
import Navbar from "./BurgerNav";
import Link from "next/link";

function Header_other() {
  return (
    <div className="pt-6 flex justify-between items-center px-10">
      <Link href="/">
        <div>
          <p className="font-[nasalization] text-3xl">VinLabs</p>
        </div>
      </Link>

      <div className="flex justify-between items-center">
        <Navbar />
      </div>
    </div>
  );
}

export default Header_other;
