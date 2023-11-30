import React from "react";
import Image from "next/image";

function Second() {
  return (
    <div className="bg-red-700 ">
      <div className="px-4 max-w-screen-xl flex flex-wrap items-center justify-items-center justify-around mx-auto pt-12 pb-24 ">
        <Image
          className="hidden md:block object-left-top"
          src="/icon.svg"
          height="50"
          width="80"
          alt=""
        ></Image>
        <div className=" text-center lg:border-r-2  lg:pr-12">
          <p className="text-white text-2xl">Book now to</p>
          <p className="text-white text-6xl font-extrabold">SAVE BIG</p>
          <p className="text-white text-2xl">On Your Next Trip</p>
        </div>
        <div className="text-center">
          <p className="text-white">
            Make travel your lifestyle with the Travelxp RED
          </p>
          <p className="text-white">
            Avail these exclusive discounts and offers with your membership!
          </p>
          <div className="flex overflow-x-auto">
            <div className="bg-white rounded-md p-3 mt-3 mx-2 min-w-30 flex-shrink-0">
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
            <div className="bg-white rounded-md p-3 mt-3 mx-2 min-w-30 flex-shrink-0">
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
            <div className="bg-white rounded-md p-3 mt-3 mx-2 min-w-30 flex-shrink-0">
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
      </div>

      {/* Near expired */}
      <div className="hidden px-4 max-w-screen-xl flex flex-wrap items-center justify-items-center justify-around mx-auto pt-12 pb-10 ">
        <Image src="/icon.svg" height="90" width="100" alt=""></Image>
        <div className=" lg:border-r-2 pr-12">
          <p className="text-white text-2xl">Expires in</p>
          <p className="text-white text-6xl font-extrabold">45 DAYS </p>
          <div>
            <div className="flex justify-around items-center m-2 rounded-md bg-white border-white border-1 bg-opacity-25 p-3 ">
              <div>
                <p className="text-white pr-3">
                  You have saved a <br /> total of
                </p>
              </div>
              <p className="text-white font-extrabold text-xl">Rs. 2450</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="m-1">
              <p className="text-white">
                You Saved <br />{" "}
                <span className=" text-4xl font-extrabold">60%</span>
              </p>
            </div>
            <div className="ml-4">
              <p className="text-white pt-5">
                Lower compared to an average <br /> RED user.
              </p>
            </div>
          </div>
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
          <div className="flex justify-around m-2 rounded-md bg-white border-white border-1 bg-opacity-25 p-5 ">
            <div className="pt-2">
              <p className="text-white font-thin text-xs">
                Enjoy your benifits of
              </p>
              <p className="text-white text-xl">Additional Discount</p>
              <p className="text-white text-xs">
                On Flights, Hotels and Holidays free
              </p>
              <button className="bg-white text-red-700 font-bold p-1 rounded-md mt-1">
                Book Now
              </button>
            </div>
            <div>
              <Image src="/clock.svg" height="80" width="80" alt=""></Image>
            </div>
          </div>
        </div>
        {/* <Image
          className="hidden lg:block"
          src="/icon.svg"
          height="90"
          width="200"
          alt=""
        ></Image> */}
      </div>

      {/* Expired */}
      <div className="hidden px-4 max-w-screen-xl flex flex-wrap items-center justify-items-center justify-around mx-auto pt-12 pb-10 ">
        <Image src="/icon.svg" height="90" width="100" alt=""></Image>
        <div className=" lg:border-r-2 pr-12">
          <p className="text-white text-2xl">Your plan has</p>
          <p className="text-white text-6xl font-extrabold">EXPIRED</p>
          <div>
            <div className="flex justify-around items-center m-2 rounded-md bg-white border-white border-1 bg-opacity-25 p-3 ">
              <div>
                <p className="text-white pr-3">
                  You have saved a <br /> total of
                </p>
              </div>
              <p className="text-white font-extrabold text-xl">Rs. 2450</p>
            </div>
          </div>
        </div>
        <div>
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
          <div className="flex justify-around m-2 rounded-md bg-white border-white border-1 bg-opacity-25 p-3 ">
            <div className="pt-2">
              <p className="text-white text-xs">Renew now to get an</p>
              <p className="text-white text-xl">Additional Month</p>
              <p className="text-white text-xs">for free</p>
              <button className="bg-white text-red-700 font-bold p-1 rounded-md mt-1">
                Redeem Now
              </button>
            </div>
            <div>
              <Image src="/calendar.svg" height="80" width="80" alt=""></Image>
            </div>
          </div>
        </div>
        {/* <Image
          className="hidden lg:block"
          src="/icon.svg"
          height="90"
          width="200"
          alt=""
        ></Image> */}
      </div>
    </div>
  );
}

export default Second;
