import React, { useState, useEffect } from "react";
import pic1 from "./image/dimond1.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Navbar = (props) => {
  const name = localStorage.getItem("name");
  const emo = localStorage.getItem("email");
  const [work, setwork] = useState({
    completedWork: "",
    defectedWork: "",
  });
  const [cod, setcod] = useState();
  const fun = async (e) => {
    await axios.get("http://localhost:8000/api/workerprofile/").then((res) => {
      if (res.status == 200) {
        let x = 0,
          y = 0;
        if (Object.keys(res.data).length > 0) {
          res.data.map((i) => {
            x += parseInt(i.completedWork);
            y += parseInt(i.defectedWork);
          });
          setwork({
            completedWork: x,
            defectedWork: y,
          });
        }
      } else {
        console.log("something is not right");
      }
      // console.log(res.data[0]);
      // setUser(res.data[0]);
      // console.log(user);
    });
    await axios
      .get("http://localhost:8000/api/managerprofile1/?email=" + emo)
      .then((res) => {
        if (res.status == 200) {
          // console.log(res.data);
          setcod(res.data.assignWork);
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
              onClick={() => {
                localStorage.removeItem("email");
                localStorage.removeItem("name");
                console.log(localStorage.getItem("email"));
                window.location = "./ManagerLogin";
              }}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-8 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Log Out
            </button>
          </div>
          <div>
            <h2 className="font-bold">Name:</h2>
            <h2 className="font-bold text-center">{name}</h2>
          </div>
          <div>
            <h2 className="font-bold">Assigned:</h2>
            <h2 className="font-bold text-center">{cod}</h2>
          </div>

          <div>
            <h2 className="font-bold">Completed:</h2>
            <h2 className="font-bold text-center">{work.completedWork}</h2>
          </div>
          <div>
            <h2 className="font-bold">Defactive:</h2>
            <h2 className="font-bold text-center">{work.defectedWork}</h2>
          </div>

          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4 border min-w-max border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
                <a
                  href="/WorkerDesk"
                  class="block py-2 pl-3 text-lg pr-4 mx-3  text-black bg-blue-700 rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Worker Assign
                </a>
              </li>
              <li>
                <a
                  href="/ManagerHome"
                  class="block py-2 pl-3 pr-4 text-lg text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Worker Info.
                </a>
              </li>

              <li>
                <a
                  href="/AddWorker"
                  class="block py-2 pl-3 pr-4 text-gray-700 text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Add Worker
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
