import React from "react";

function Page1() {
  return (
    <div className="h-full pb-24">
      <div className="flex flex-col justify-center items-center pt-24">
        <p className="text-6xl text-center">Info About Vin Collective </p>
        <div className="w-44 border-b-2 my-5" />
      </div>

      <div className="flex justify-center items-center">
        <div className="w-3/4 max-[635px]:w-5/6">
          <p className="text-center">
            VIN Collectives a collection of 1000 passes on the Solana
            Blockchain. VIN Collectives is the Genesis Collection of Vin Labs,
            launched to ensure that our early supporters get rewarded as much as
            possible. The holders of VIN Collectives will get all the premium
            features of the VIN App and will have early access to all future
            updates.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20">
        <p className="text-center text-2xl font-bold px-4">
          The holders of Vin Collectives will get exclusive perks, which
          include...
        </p>
      </div>

      <div className="flex justify-evenly items-center mt-16 max-[910px]:justify-between max-[910px]:px-24 max-[830px]:px-5 max-[635px]:flex-col">
        <div className="flex flex-col justify-center items-center w-72">
          <img className="w-20 mb-2" src="/app/money-svgrepo-com.svg" alt="" />
          <p className="text-center">
            Freemint of Vinland Collection for all VIN Collectives holders.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-72 max-[635px]:mt-16">
          <img
            className="w-20 mb-2"
            src="/app/premium-svgrepo-com.svg"
            alt=""
          />
          <p className="text-center">All premium features access in VIN App.</p>
        </div>
        <div className="flex flex-col justify-center items-center w-72 max-[910px]:hidden">
          <img
            className="w-20 mb-2"
            src="/app/money-bag-svgrepo-com.svg"
            alt=""
          />
          <p className="text-center">
            Will have a percentage of $VIN Coin on Mainnet Launch.
          </p>
        </div>
      </div>

      <div className="flex justify-evenly items-center mt-16 max-[910px]:justify-between max-[910px]:px-24 max-[830px]:px-5 max-[635px]:flex-col">
        <div className="flex flex-col justify-center items-center w-72">
          <img
            className="w-20 mb-2"
            src="/app/decentralized-svgrepo-com.svg"
            alt=""
          />
          <p className="text-center">
            Decentralized Autonomous Organization (DAO) governance through
            voting by VIN Collectives holders.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-72 max-[635px]:mt-16">
          <img className="w-20 mb-2" src="/app/euro-svgrepo-com.svg" alt="" />
          <p className="text-center">
            50% of Vin Labs Profit shared equally distributed between holders on
            the 20th of each month.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-72 max-[910px]:hidden">
          <img className="w-20 mb-2" src="/app/cards-svgrepo-com.svg" alt="" />
          <p className="text-center">
            Will receive VIN Cards on their doorstep, which will be used as a
            credit/debit card for different uses.
          </p>
        </div>
      </div>

      <div className="flex justify-evenly items-center mt-16 max-[910px]:justify-between max-[910px]:px-24 max-[830px]:px-5 max-[635px]:flex-col">
        <div className="flex flex-col justify-center items-center w-72">
          <img className="w-20 mb-2" src="/app/cards-svgrepo-com.svg" alt="" />
          <p className="text-center">
            Will receive VIN Cards on their doorstep, which will be used as a
            credit/debit card for different uses.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-72 max-[635px]:mt-16">
          <img
            className="w-20 mb-2"
            src="/app/money-bag-svgrepo-com.svg"
            alt=""
          />
          <p className="text-center">
            Will have a percentage of $VIN Coin on Mainnet Launch.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page1;
