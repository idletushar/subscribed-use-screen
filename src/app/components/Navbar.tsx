"use client";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <nav className="md:block hidden bg-white  w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-items-center justify-around mx-auto p-3">
          <ul className=" flex bg-white  items-center flex-row space-x-4 mt-0 border-0 ">
            <a href="/" className="flex items-center mr-6">
              <span className="self-center text-4xl font-semibold whitespace-nowrap text-red-700">
                travelxp
              </span>
            </a>
            <li className="hover:border-b-4 border-red-700">
              <a
                href="#"
                className="flex py-2 text-xs text-gray-400 hover:text-red-700  "
                aria-current="page"
              >
                <Image
                  className="mr-1"
                  src="/tv.svg"
                  height="10"
                  width="15"
                  alt=""
                ></Image>
                Watch
              </a>
            </li>
            <li className="hover:border-b-4 border-red-700">
              <a
                href="#"
                className="flex py-2 text-xs text-gray-400 hover:text-red-700  "
              >
                <Image
                  className="mr-1"
                  src="/ticket.svg"
                  height="9"
                  width="15"
                  alt=""
                ></Image>
                Book
              </a>
            </li>
            <li className="hover:border-b-4 border-red-700">
              <a
                href="#"
                className="flex py-2 text-xs text-gray-400 hover:text-red-700  "
              >
                <Image
                  className="mr-1"
                  src="/diamond.svg"
                  height="10"
                  width="15"
                  alt="red"
                ></Image>
                Red
              </a>
            </li>
          </ul>
          <div>
            <button className="h-10">
              <Image
                className="mr-1"
                src="/user.svg"
                height="9"
                width="15"
                alt=""
              ></Image>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile view */}
      <nav className="lg:hidden bg-white fixed  w-full z-20 bottom-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-items-center justify-around mx-auto p-3">
          <ul className=" flex bg-white  items-center flex-row space-x-4 mt-0 border-0 ">
            <li className="hover:border-t-4 border-red-700">
              <div className="  mx-7">
                <Image src="/tv.svg" height="10" width="30" alt=""></Image>
                <a
                  href="#"
                  className="flex py-2 text-sm text-black hover:text-red-700  "
                  aria-current="page"
                >
                  Watch
                </a>
              </div>
            </li>
            <li className="hover:border-t-4 border-red-700">
              <div className=" place-items-center mt-3 mx-7">
                <Image src="/ticket.svg" height="15" width="30" alt=""></Image>
                <a
                  href="#"
                  className="flex py-2 text-sm text-black mt-2 hover:text-red-700  "
                >
                  Book
                </a>
              </div>
            </li>
            <li className="hover:border-t-4 border-red-700">
              <div className=" mt-3 mx-7">
                <Image
                  src="/diamond.svg"
                  height="15"
                  width="30"
                  alt="red"
                ></Image>
                <a
                  href="#"
                  className="flex py-2 text-sm text-black hover:text-red-700  "
                >
                  Red
                </a>
              </div>
            </li>
            <li className="hover:border-t-4 border-red-700">
              <div className=" mt-2 mx-7">
                <Image src="/user.svg" height="9" width="25" alt=""></Image>
                <a
                  href="#"
                  className="flex py-2 text-sm text-black hover:text-red-700  "
                >
                  Profile
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
