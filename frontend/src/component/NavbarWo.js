import React from "react";
import pic1 from "./image/dimond1.png";
const NavbarWo = () => {
  return (
    <div>
      <nav class="bg-teal-400 border-gray-200 px-2 sm:px-4 py-2.5 ">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" class="flex items-center">
            <img src={pic1} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-black">
              SRK Groups
            </span>
          </a>
          <div class="flex md:order-2">
            <button
              type="button"
              class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Report
            </button>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-8 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Log Out
            </button>
          </div>
          <div>
            <h2 className="font-bold">RAJESH VADHASIYA</h2>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarWo;
