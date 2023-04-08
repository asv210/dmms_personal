import React, { useEffect, useState } from "react";

import pic1 from "./image/dimond1.png";
import axios from "axios";
const NavbarOw = () => {
  const [user, setUser] = useState({
    cod: "",
  });
  let name, value;
  const handler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const ema = localStorage.getItem("email");
  const fun1 = async (e) => {
    e.preventDefault();
    console.log(user.cod);
    await axios
      .put("http://localhost:8000/api/ownerlogin/?email=" + ema, user)
      .then((res) => {
        if (res.status == 200) {
          // console.log(res.data);

          alert("updated");

          window.location = "/OwnerHome";
        } else {
          alert("wrong details");
          window.location.reload(true);
        }
      });
  };
  const [co, setco] = useState();
  const fun = async () => {
    // e.preventDefault();

    await axios.get("http://localhost:8000/api/ownerlogin/").then((res) => {
      if (res.status == 200) {
        // console.log(res.data);
        setco(res.data[0].cod);
      } else {
        alert("wrong details");
        window.location.reload(true);
      }
    });
  };
  useEffect(() => {
    fun();
  }, []);

  return (
    <div>
      <nav class="bg-teal-400 border-gray-200 px-1 sm:px-4 py-2.5 ">
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
              onClick={() => {
                localStorage.removeItem("email");

                console.log(localStorage.getItem("email"));
                window.location = "./OwnerLogin";
              }}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-8 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Log Out
            </button>
          </div>
          <div className="">
            <label htmlFor="cost">Cost of Diamond:</label>
            <input
              type="number"
              name="cod"
              value={co}
              placeholder={co}
              onChange={handler}
              className="ml-2 rounded-lg w-32 p-2 "
            />
          </div>
          <button
            type="button"
            onClick={fun1}
            class="text-white  bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            confirm
          </button>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4 border min-w-max border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/OwnerHome"
                  class="block py-2 pl-3 text-lg pr-4 mx-3   text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Work Assign
                </a>
              </li>
              <li>
                <a
                  href="/ManagerInfo"
                  class="block py-2 pl-3 pr-4 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Manager Info.
                </a>
              </li>

              <li>
                <a
                  href="/AddManager"
                  class="block py-2 pl-3 pr-4 text-gray-700 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Add Manager
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarOw;
