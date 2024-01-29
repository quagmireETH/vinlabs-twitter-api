import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="pt-6 flex justify-between items-center">
      <div>
        <p className="font-[nasalization] text-3xl">VinLabs</p>
      </div>

      <div>
        <Link href="$Vin/$Vin">
          <button className="border-2 border-white rounded-lg py-1.5 px-5 hover:bg-[#2E2C30] shadow-md shadow-white hover:translate-y-2 hover:shadow-none">
            <p className="text-lg">Earn $VIN</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
