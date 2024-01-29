import React from "react";

function Page2() {
  return (
    <div className="h-full pb-24">
      <div className="flex flex-col justify-center items-center pt-24">
        <p className="text-6xl text-center">How the multiplier work?</p>
        <div className="w-44 border-b-2 my-5" />
      </div>

      <div className="flex justify-around items-center mt-12 max-[635px]:flex-col">
        <div className="w-[500px] max-[1050px]:w-[400px] max-[900px]:w-[300px] max-[635px]:w-5/6">
          <p className="text-center">
            $VIN with at least 10 individuals daily, and your multiplier will
            increase by 1x each day. This multiplier acknowledges and rewards
            your commitment to actively engage with others in the community,
            motivating you to keep engaging.
          </p>
        </div>

        <div className="border-r-[1px] h-32 border-white max-[635px]:border-b-[1px] max-[635px]:w-1/2 max-[635px]:h-0 max-[635px]:my-10" />

        <div className="w-[500px] max-[1050px]:w-[400px] max-[900px]:w-[300px] max-[635px]:w-5/6">
          <p className="text-center">
            Achieving 100 likes on a post unlocks a special 2x multiplier for
            that specific post. This means that for every subsequent engagement
            (views, comments, retweets and likes) on that particular post, you
            will receive an enhanced points reward, amplifying the benefits of
            producing highly engaging content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page2;
