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
        <Link href="/$Vin/$Vin">
          <button className="border-2 border-white rounded-lg py-1.5 px-5 mr-12 hover:bg-[#2E2C30] shadow-md shadow-white hover:translate-y-2 hover:shadow-none max-[450px]:hidden">
            <p className="text-lg">Earn $VIN</p>
          </button>
        </Link>
        <Navbar />
      </div>
    </div>
  );
}

export default Header_other;
