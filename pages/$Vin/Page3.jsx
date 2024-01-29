import React from "react";

function Page3() {
  return (
    <div className="h-full pb-24">
      <div className="flex flex-col justify-center items-center pt-24">
        <p className="text-6xl text-center px-4">It&apos;s as simple as <br className="hidden max-[381px]:flex"/> 1-2-3</p>
        <div className="w-44 border-b-2 my-5" />
      </div>

      <div className="mt-[134px] flex justify-center">
        <div className="flex justify-between items-center border-t-2 border-white w-[90%] max-[1230px]:flex-col max-[1230px]:border-l-2 max-[1230px]:w-0 max-[1230px]:h-[90%]">
          <div className="flex flex-col justify-center items-center -mt-14 max-[1230px]:w-[600px] max-[1230px]:mb-32 max-[650px]:w-[500px] max-[515px]:w-[400px] max-[425px]:w-[350px]">
            <div className=" border-2 rounded-full py-3.5 pl-2 pr-3 bg-black">
              <img className="w-8" src="/tgAsset_22.svg" alt="" />
            </div>
            <div className=" max-[1230px]:bg-[#141418]">
              <p className="font-bold text-lg text-center max-[1230px]:mt-2">Engage</p>
              <p className="text-center text-sm">
                Mention $ENGAGE on the X/Twitter platform to start earning
                points.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center -mt-10 max-[1230px]:w-[600px] max-[1230px]:mb-32 max-[650px]:w-[500px] max-[515px]:w-[400px] max-[425px]:w-[350px]">
            <div className=" border-2 rounded-full py-3.5 px-3 bg-black">
              <img className="w-8" src="/earn-money-svgrepo-com.svg" alt="" />
            </div>
            <div className=" max-[1230px]:bg-[#141418]">
              <p className="font-bold text-lg text-center max-[1230px]:mt-2">Earn Points</p>
              <p className="text-center text-sm mx-10">
                Accumulate points by actively engaging with the platform and
                participating in posting activities. Your points will reflect on
                your involvement in both engagement and content creation on the
                X/Twitter platform.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center -mt-12 max-[1230px]:w-[600px] max-[1230px]:mb-32 max-[650px]:w-[500px] max-[515px]:w-[400px] max-[425px]:w-[350px]">
            <div className=" border-2 rounded-full py-3.5 px-3 bg-black">
              <img className="w-8" src="/calculator-svgrepo-com.svg" alt="" />
            </div>
            <div className=" max-[1230px]:bg-[#141418]">
              <p className="font-bold text-lg text-center max-[1230px]:mt-2">Calculate Token Allocation</p>
              <p className="text-center text-sm mx-10">
                After totalling the accumulated points, we assign a percentage
                allocation for each user based on their respective contributions
                and engagement within our eco-system.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center -mt-12 max-[1230px]:w-[600px] max-[1230px]:mb-32 max-[650px]:w-[500px] max-[515px]:w-[400px] max-[425px]:w-[350px]">
            <div className=" border-2 rounded-full py-3.5 px-3 bg-black">
              <img className="w-8" src="/refund-claim-svgrepo-com.svg" alt="" />
            </div>
            <div className=" max-[1230px]:bg-[#141418]">
              <p className="font-bold text-lg text-center max-[1230px]:mt-2">Claim $ENGAGE</p>
              <p className="text-center text-sm">
                Each user can claim their share of $ENGAGE tokens either through
                our dedicated claim website or by receiving them through an
                airdrop distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
