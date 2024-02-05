import React from "react";
import Header_other from "./components/Header_other";
import Link from "next/link";

function Coming_Soon() {
  return (
    <div>
      <div className="h-screen relative">
        <Header_other />

        <div className="flex flex-col justify-center items-center mt-36 relative px-10 max-[910px]:mt-8 max-[710px]:mt-14">
          <div className="w-[900px] max-[910px]:w-[700px] max-[710px]:w-[600px] max-[610px]:w-[500px] max-[510px]:w-[400px] max-[410px]:w-[300px]">
            <p className="text-9xl text-center max-[710px]:text-8xl max-[510px]:text-7xl max-[410px]:text-6xl">
              Coming Soon
            </p>
          </div>

          <div className="mt-4 max-[950px]:flex max-[950px]:justify-center max-[950px]:items-center">
            <Link
              href="https://twitter.com/vinlandnft"
              rel="noreferrer"
              target="_blank"
            >
              <button className="border-2 border-white rounded-lg py-1.5 px-12 mt-6 hover:bg-[#2E2C30] shadow-md shadow-white hover:translate-y-2 hover:shadow-none max-[1225px]:px-8 max-[1225px]:py-0.5 max-[950px]:px-12 max-[950px]:py-1.5">
                <p className="text-lg">Twitter</p>
              </button>
            </Link>
            <Link
              href="https://discord.gg/qx4fDwEHUB"
              rel="noreferrer"
              target="_blank"
            >
              <button className="ml-16 border-2 border-white rounded-lg py-1.5 px-12 mt-6 hover:bg-[#2E2C30] shadow-md shadow-white hover:translate-y-2 hover:shadow-none max-[1225px]:px-8 max-[1225px]:py-0.5 max-[950px]:px-12 max-[950px]:py-1.5">
                <p className="text-lg">Discord</p>
              </button>
            </Link>
          </div>
        </div>

        <img
          className="absolute right-10 bottom-10 opacity-70 -z-10 max-[490px]:w-80"
          src="/Vin Land.PNG"
          alt=""
        />
      </div>
    </div>
  );
}

export default Coming_Soon;
