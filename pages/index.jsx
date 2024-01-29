import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="h-screen px-10 relative max-[730px]:h-full">
      <Header />

      <div className="mt-20 flex justify-around items-center max-[1225px]:mt-5 max-[950px]:mt-14">
        <div className="w-[800px] mr-4 mt-8">
          <p className="mb-2 text-7xl max-[950px]:text-center">VinLabs</p>
          <p className=" max-[1225px]:text-sm max-[950px]:text-center max-[950px]:mt-2">
            Vin Labs stands as a distinguished leader in the Web3 landscape,
            committed to ushering in a new era of digital innovation. Our
            accomplished team, comprising skillful builders, intellectual minds,
            and fervent NFT enthusiasts, collaboratively develops
            forward-thinking applications, secure exchanges, and engaging NFT
            projects. At Vin Labs, we seamlessly integrate expertise and passion
            to continually push the boundaries of what can be achieved in the
            decentralized realm.
          </p>
          <div className="max-[950px]:flex max-[950px]:justify-center max-[950px]:items-center">
            <button className="border-2 border-white rounded-lg py-1.5 px-12 mt-6 hover:bg-[#2E2C30] shadow-md shadow-white hover:translate-y-2 hover:shadow-none max-[1225px]:px-8 max-[1225px]:py-0.5 max-[950px]:px-12 max-[950px]:py-1.5">
              <p className="text-lg">Button</p>
            </button>
          </div>
        </div>
        <div className="ml-4 max-[950px]:hidden">
          <img src="/Vin Pass.PNG" alt="" />
        </div>
      </div>

      <div className="absolute w-full bottom-10 flex justify-between items-center max-[730px]:static max-[730px]:mt-14">
        <div className="flex justify-between items-center w-full max-[730px]:flex-col">
          <div className="relative">
            <p className="text-lg italic mb-2">Phase 1: Complete</p>
            <div className="bg-[#2E2C30] pl-4 pr-28 pb-4 pt-4 rounded-md shadow-md shadow-white max-[950px]:pr-20 max-[730px]:w-[600px] max-[675px]:w-[500px] max-[550px]:w-[400px] max-[450px]:w-[300px]">
              <p className="text-2xl mb-6 max-[950px]:mb-4">Vin Pass</p>
              <Link href="VinPass/VinPass">
                <p className="cursor-pointer text-sm ease-in-out duration-100 hover:underline hover:translate-x-2">
                  Take a look &rarr;
                </p>
              </Link>
            </div>
            <img
              className="absolute -bottom-5 -right-5 w-20"
              src="/Vin Pass.PNG"
              alt=""
            />
          </div>

          <div className="max-[730px]:mt-14">
            <p className="text-lg italic mb-2">Phase 2: In Progress</p>
            <div className="bg-[#2E2C30] pl-4 pr-28 pb-4 pt-4 rounded-md shadow-md shadow-white max-[950px]:pr-20 max-[730px]:w-[600px] max-[675px]:w-[500px] max-[550px]:w-[400px] max-[450px]:w-[300px]">
              <p className="text-2xl mb-6 max-[950px]:mb-4">Vin App</p>
              <p className="cursor-pointer text-sm ease-in-out duration-100 hover:underline hover:translate-x-2">
                Take a look &rarr;
              </p>
            </div>
          </div>
          <div className="mr-20 max-[730px]:mt-14 max-[730px]:mr-0">
            <p className="text-lg italic mb-2">Phase 3: In Progress</p>
            <div className="bg-[#2E2C30] pl-4 pr-28 pb-4 pt-4 rounded-md shadow-md shadow-white max-[950px]:pr-20 max-[730px]:w-[600px] max-[675px]:w-[500px] max-[550px]:w-[400px] max-[450px]:w-[300px]">
              <p className="text-2xl mb-6 max-[950px]:mb-4">Vin Lands</p>
              <p className="cursor-pointer text-sm ease-in-out duration-100 hover:underline hover:translate-x-2">
                Take a look &rarr;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
