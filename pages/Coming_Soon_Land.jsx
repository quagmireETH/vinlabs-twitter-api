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
