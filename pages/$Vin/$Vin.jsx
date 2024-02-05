import React from "react";
import { signIn, signOut, getSession } from "next-auth/react";
import Header_other from "../components/Header_other";
import ScrollButton from "../components/ScrollButton";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Link from "next/link";

function $Vin({ session }) {
  console.log(session);

  return (
    <div>
      <div className="relative h-screen">
        <Header_other />

        <div className="relative mt-36 flex flex-col items-center justify-center px-10">
          <div className="w-[900px] max-[910px]:w-[700px] max-[710px]:w-[600px] max-[610px]:w-[500px] max-[510px]:w-[400px] max-[410px]:w-[300px]">
            <p className="text-center text-9xl max-[710px]:text-8xl max-[510px]:text-7xl max-[410px]:text-6xl">
              Earn $Vin
            </p>
            <p className="mt-7 text-center text-lg">
              Earn rewards for participating and interacting on the Twitter/X
              platform
            </p>
            <div className="mt-10 flex items-center justify-center">
              <button className="mr-12 rounded-lg border-2 border-white px-5 py-1.5 shadow-md shadow-white hover:translate-y-2 hover:bg-[#2E2C30] hover:shadow-none">
                <p className="text-lg">Get Started</p>
              </button>

              <button className="rounded-lg border-2 border-white px-5 py-1.5 shadow-md shadow-white hover:translate-y-2 hover:bg-[#2E2C30] hover:shadow-none">
                <p className="text-lg">Learn More</p>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 transform items-center justify-center">
          <ScrollButton targetId="Page1">
            <div className="cursor-pointer rounded-full border-2 border-white duration-100 ease-in-out hover:translate-y-1 hover:bg-[#2E2C30]">
              <p className="your-arrow-class px-3 pb-1.5 pt-0.5 text-xl">
                &darr;
              </p>
            </div>
          </ScrollButton>
        </div>

        {/** <img
          className="absolute right-10 bottom-10 opacity-70"
          src="/Vin Pass.PNG"
          alt=""
        />*/}
      </div>

      <div id="Page1">
        <Page1 />
      </div>
      <Page2 />
      <Page3 />
    </div>
  );
}

export default $Vin;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
