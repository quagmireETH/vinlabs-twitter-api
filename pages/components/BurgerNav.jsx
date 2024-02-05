import React, { useState, useEffect } from "react";
import ScrollButton from "./ScrollButton";
import Link from "next/link";

function MobileNav({ open, setOpen }) {
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    // Render the MobileNav component only after mounting on the client-side
    setShouldRender(true);
  }, []);

  return shouldRender ? (
    <div
      className={`fixed top-0 bottom-0 right-0 h-screen w-[37%] z-30 bg-black element transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col justify-start items-start mt-10 p-5">
        <a className="my-4 border-b-2 border-white w-full">
          <Link href="\VinCollective\VinCollective">
            <p className="text-2xl mb-4">Vin Pass</p>
          </Link>
        </a>
        <a className="my-4 border-b-2 border-white w-full">
          <Link href="/Coming_Soon_App">
            <p className="text-2xl mb-4">Vin App</p>
          </Link>
        </a>
        <a className="my-4 border-b-2 border-white w-full">
          <Link href="/Coming_Soon_Land">
            <p className="text-2xl mb-4">Vin Lands</p>
          </Link>
        </a>
        <a className="my-4 border-b-2 border-white w-full">
          <Link href="/">
            <p className="text-2xl mb-4">Home</p>
          </Link>
        </a>

        <div className="mt-4">
          <Link href="/$Vin/$Vin">
            <button className="border-2 border-white rounded-lg py-1.5 px-5 mr-12 hover:bg-[#2E2C30] shadow-md shadow-white hover:translate-y-2 hover:shadow-none">
              <p className="text-lg">Earn $VIN</p>
            </button>
          </Link>
        </div>

        <Link href="https://twitter.com/Vin_Labs" rel="noreferrer" target="_blank">
          <img
            src="/twAsset_21.svg"
            className="w-8 mt-8 cursor-pointer"
            alt=""
          />
        </Link>
        <Link href="https://discord.gg/qx4fDwEHUB" rel="noreferrer" target="_blank">
          <img
            src="/discord.svg"
            className="w-8 mb-4 mt-4 cursor-pointer"
            alt=""
          />
        </Link>
      </div>
    </div>
  ) : null;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <MobileNav open={open} setOpen={setOpen} />
      <div>
        <div
          className="group z-50 relative w-9 h-6 cursor-pointer flex-col justify-between items-center flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"}`}
          />
          <span
            className={`h-1 bg-white rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 bg-white rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            } ${open ? "fixed" : ""} ${open ? "w-[37px]" : "w-full"} ${
              open ? "mt-[19px]" : ""
            } ${open ? "mr-[2px]" : ""}`}
          />
        </div>
      </div>
    </div>
  );
}
