import React from "react";
import Image from "next/image";

function First() {
  return (
    <div>
      <div className="bg-red-100  ">
        <div className=" px-4 max-w-screen-xl flex flex-wrap items-center justify-items-center justify-around mx-auto ">
          <div className=" text-center lg:text-left md:text-center pt-10 lg:ml-32">
            <p className=" text-3xl text-black">welcome to</p>
            <p className=" lg:text-5xl text-4xl font-extrabold text-red-700">
              Travelxp RED
            </p>
            <div className="bg-white rounded-md p-2 mt-3 hidden md:block">
              <p className=" text-left text-gray-400">Current Plan Duration:</p>
              <p className="text-left text-gray-400">Subscription Amount:</p>
              <p className="text-left text-gray-400">Plan Expiry Date:</p>
            </div>
          </div>

          <div className="bg-[url('/h1-subscribed.svg')] bg-right bg-cover h-[400px] w-[500px] "></div>
        </div>
      </div>
      <div className="bg-white">
        <div className="shadow-xl lg:hidden mr-3 ml-3 rounded-tl-3xl rounded-tr-3xl bg-red-100 border-black align-middle p-4 mt-3 ">
          <p className="text-gray-400">Current Plan Duration:</p>
          <p className="text-gray-400">Subscription Amount:</p>
          <p className="text-gray-400">Plan Expiry Date:</p>
        </div>
      </div>
    </div>
  );
}

export default First;
