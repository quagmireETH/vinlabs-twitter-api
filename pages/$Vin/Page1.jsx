import React, { useState, useRef, useEffect } from "react";

function Page1() {
  const [valueViews, setValueViews] = useState(0);
  const [valueLikes, setValueLikes] = useState(0);
  const [valueComments, setValueComments] = useState(0);
  const [valueRetweets, setValueRetweets] = useState(0);
  const [valueQuotes, setValueQuotes] = useState(0);
  const sliderRef = useRef(null);

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const totalPoints =
    valueViews * 40 +
    valueLikes * 80 +
    valueComments * 150 +
    valueRetweets * 200 +
    valueQuotes * 250;

  return (
    <div className="h-full pb-24">
      <div className="flex flex-col justify-center items-center pt-24">
        <p className="text-6xl text-center">How to earn $VIN </p>
        <div className="w-44 border-b-2 my-5" />
      </div>

      <div className="flex justify-center items-center">
        <div className="w-3/4">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero iusto
            illum quaerat iste est a nobis vitae cumque repudiandae? Saepe, vel
            voluptatem eligendi ullam voluptate quo delectus aliquid ipsa
            assumenda!
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-20">
        <div className="flex justify-evenly items-center border-2 rounded-t-xl w-5/6 py-10 max-[800px]:flex-col">
          <div className="py-4 w-5/6 ml-4 mr-4 flex flex-col justify-evenly">
            <p className="-mt-6">Views</p>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={valueViews}
                onChange={handleChange(setValueViews)}
                className="range-slider w-5/6"
                ref={sliderRef}
              />
              <div
                className="absolute text-white"
                style={{
                  right: "-10px",
                  top: "-30px",
                  transform: "translateX(0%)",
                }}
              >
                {valueViews}
              </div>
            </div>
            <div
              className="progress-bar"
              style={{ width: `${valueViews}%` }}
            ></div>
            <div className="mt-10 -mb-10">
              <p>Total points : {valueViews * 40}</p>
            </div>
          </div>

          <div className="border-r-2 h-24 border-white max-[800px]:border-b-[1px] max-[800px]:w-5/6 max-[800px]:h-0 max-[800px]:my-10" />

          <div className="py-4 w-5/6 ml-4 mr-4">
            <p className="-mt-6">Likes</p>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={valueLikes}
                onChange={handleChange(setValueLikes)}
                className="range-slider w-5/6"
                ref={sliderRef}
              />
              <div
                className="absolute text-white"
                style={{
                  right: "-10px",
                  top: "-30px",
                  transform: "translateX(0%)",
                }}
              >
                {valueLikes}
              </div>
            </div>
            <div
              className="progress-bar"
              style={{ width: `${valueLikes}%` }}
            ></div>
            <div className="mt-10 -mb-10">
              <p>Total points : {valueLikes * 80}</p>
            </div>
          </div>

          <div className="border-r-2 h-24 border-white max-[800px]:border-b-[1px] max-[800px]:w-5/6 max-[800px]:h-0 max-[800px]:my-10" />

          <div className="py-4  w-5/6 ml-4 mr-4">
            <p className="-mt-6">Comments</p>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={valueComments}
                onChange={handleChange(setValueComments)}
                className="range-slider w-5/6"
                ref={sliderRef}
              />
              <div
                className="absolute text-white"
                style={{
                  right: "-10px",
                  top: "-30px",
                  transform: "translateX(0%)",
                }}
              >
                {valueComments}
              </div>
            </div>
            <div
              className="progress-bar"
              style={{ width: `${valueComments}%` }}
            ></div>
            <div className="mt-10 -mb-10">
              <p>Total points : {valueComments * 150}</p>
            </div>
          </div>

          <div className="border-r-2 h-24 border-white max-[800px]:border-b-[1px] max-[800px]:w-5/6 max-[800px]:h-0 max-[800px]:my-10" />

          <div className="py-4  w-5/6 ml-4 mr-4">
            <p className="-mt-6">Retweets</p>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={valueRetweets}
                onChange={handleChange(setValueRetweets)}
                className="range-slider w-5/6"
                ref={sliderRef}
              />
              <div
                className="absolute text-white"
                style={{
                  right: "-10px",
                  top: "-30px",
                  transform: "translateX(0%)",
                }}
              >
                {valueRetweets}
              </div>
            </div>
            <div
              className="progress-bar"
              style={{ width: `${valueRetweets}%` }}
            ></div>
            <div className="mt-10 -mb-10">
              <p>Total points : {valueRetweets * 200}</p>
            </div>
          </div>

          <div className="border-r-2 h-24 border-white max-[800px]:border-b-[1px] max-[800px]:w-5/6 max-[800px]:h-0 max-[800px]:my-10" />

          <div className="py-4  w-5/6 ml-4 mr-4">
            <p className="-mt-6">Quotes Retweets</p>
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={valueQuotes}
                onChange={handleChange(setValueQuotes)}
                className="range-slider w-5/6"
                ref={sliderRef}
              />
              <div
                className="absolute text-white"
                style={{
                  right: "-10px",
                  top: "-30px",
                  transform: "translateX(0%)",
                }}
              >
                {valueQuotes}
              </div>
            </div>
            <div
              className="progress-bar"
              style={{ width: `${valueQuotes}%` }}
            ></div>
            <div className="mt-10 -mb-10">
              <p>Total points : {valueQuotes * 250}</p>
            </div>
          </div>
        </div>
        <div className="border-2 rounded-b-xl p-4 w-5/6">
          <p className="ml-10 font-bold text-xl">Total points Earned : {totalPoints}</p>
        </div>
      </div>
    </div>
  );
}

export default Page1;
