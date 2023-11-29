"use client";
import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className=" bg-white  w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-items-center justify-around mx-auto p-3">
        <ul className=" flex bg-white  items-center flex-row space-x-4 mt-0 border-0 ">
          <a href="/" className="flex items-center mr-6">
            <span className="self-center text-4xl font-semibold whitespace-nowrap text-red-700">
              travelxp
            </span>
          </a>
          <li>
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
          <li>
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
          <li>
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
  );
}

export default Navbar;
