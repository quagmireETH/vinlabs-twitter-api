import React from "react";
import ScrollButton from "../components/ScrollButton";
import Header_other from "../components/Header_other";
import Page1 from "./Page1";
import Link from "next/link";

function VinPass() {
  return (
    <div>
      <div className="h-screen relative">
        <Header_other />

        <div className="flex flex-col justify-center items-center mt-24 relative px-10 max-[910px]:mt-8 max-[710px]:mt-14">
          <div className="w-[900px] max-[910px]:w-[700px] max-[710px]:w-[600px] max-[610px]:w-[500px] max-[510px]:w-[400px] max-[410px]:w-[300px]">
            <p className="text-9xl text-center max-[910px]:text-8xl max-[510px]:text-7xl max-[410px]:text-6xl">
              Vin Collectives
            </p>
          </div>
        </div>

        <div className="absolute flex justify-center items-center left-1/2 transform -translate-x-1/2 bottom-5">
          <ScrollButton targetId="Page1">
            <div className="border-2 border-white rounded-full cursor-pointer hover:bg-[#2E2C30] hover:translate-y-1 ease-in-out duration-100">
              <p className="px-3 pt-0.5 pb-1.5 text-xl your-arrow-class">
                &darr;
              </p>
            </div>
          </ScrollButton>
        </div>

        <div className="flex justify-center items-center">
          <img
            className="mt-10 -z-10 max-[910px]:w-96 max-[460px]:w-80"
            src="/Vin Pass.PNG"
            alt=""
          />
        </div>
      </div>

      <div id="Page1">
        <Page1 />
      </div>
    </div>
  );
}

export default VinPass;
