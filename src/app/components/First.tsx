import React from "react";
import Image from "next/image";

function First() {
  return (
    <div className="bg-red-100 hidden lg:block ">
      <div className=" px-4 max-w-screen-xl flex flex-wrap items-center justify-items-center justify-around mx-auto ">
        <div className=" ml-32">
          <p className=" text-3xl">welcome to</p>
          <p className=" text-5xl text-red-700">Travelxp RED</p>
          <div className="bg-white rounded-md p-2 mt-3 ">
            <p className="text-gray-400">Current Plan Duration:</p>
            <p className="text-gray-400">Subscription Amount:</p>
            <p className="text-gray-400">Plan Expiry Date:</p>
          </div>
        </div>

        <div className="bg-[url('/h1-subscribed.svg')] bg-right bg-cover h-[400px] w-[500px] "></div>
      </div>
    </div>
  );
}

export default First;
