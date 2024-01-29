import React from 'react'

const Bottle = ({ percentage }) => {
  return (
    <div className="relative w-32 h-64 bg-transparent border-4 rounded border-gray-800 bottle shadow-md shadow-white">
      <div
        className="absolute bottom-0 w-full bg-blue-500 transition-height duration-500 ease-in-out rounded"
        style={{ height: `${percentage}%` }}
      ></div>

    </div>
  );
};

export default Bottle
