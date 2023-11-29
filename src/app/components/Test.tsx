import React from "react";
import Image from "next/image";

function test() {
  return (
    <div className="bg-red-200">
      <div className="flex overflow-x-auto">
        <div className="bg-white rounded-md p-3 mt-3 mx-2 min-w-40 flex-shrink-0">
          <Image
            src="/airplane.svg"
            height="30"
            width="25"
            alt=""
            className="mb-2"
          ></Image>
          <p>Upto 30% off on flights</p>
          <p className="text-gray-400">You have saved</p>
          <p className="text-gray-400">till now.</p>
        </div>
        <div className="bg-white rounded-md p-3 mt-3 mx-2 min-w-40 flex-shrink-0">
          <Image
            src="/hotel.svg"
            height="30"
            width="25"
            alt=""
            className="mb-2"
          ></Image>
          <p>Upto 30% off on hotels</p>
          <p className="text-gray-400">You have saved</p>
          <p className="text-gray-400">till now.</p>
        </div>
        <div className="bg-white rounded-md p-3 mt-3 mx-2 min-w-40 flex-shrink-0">
          <Image
            src="/holiday.svg"
            height="30"
            width="25"
            alt=""
            className="mb-2"
          ></Image>
          <p>Upto 30% off on holidays</p>
          <p className="text-gray-400">You have saved</p>
          <p className="text-gray-400">till now.</p>
        </div>
      </div>
    </div>
  );
}

export default test;
