import React from "react";
import pic4 from "./image/worker.jpeg";
import axios from "axios";
import { NavLink } from "react-router-dom";
const WorkerCard = ({ item }) => {
  const func = async (e) => {
    e.preventDefault();

    await axios
      .delete("http://localhost:8000/api/workerlogin/?email=" + item?.email)
      .then((res) => {
        if (res.status === 204) {
          // console.log(res.data);

          alert("successfully delete");
          window.location.reload(true);
        } else {
          window.location.reload(true);
        }
      });
  };
  return (
    <div className="my-2">
      <div className="flex flex-row space-between  bg-green-200">
        <div className=" flex flex-row justify-center items-center ml-3 w-52">
          <img src={pic4} className=" h-8 w-8  rounded-xl " alt="" srcset="" />
        </div>
        <div className="w-full text-center  py-4 ">{item?.name}</div>

        <div className="text-center w-full py-4">{item?.phone}</div>
        <div className="text-center w-full py-4">{item?.email}</div>

        <div className="text-center w-full overflow overflow-x-hidden py-4">
          {item?.address}
        </div>

        <div className=" w-full text-center py-4">
          <NavLink
            to="/EditWorker"
            onClick={() => {
              localStorage.setItem("email1", item?.email);
            }}
          >
            {/* <img src={pic5} className="h-8 w-8 mx-auto" alt="" srcset="" /> */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-auto"
              viewBox="0 0 576 512"
            >
              <path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z" />
            </svg>
          </NavLink>
        </div>

        <div className=" w-full text-center py-4">
          <NavLink onClick={func}>
            {/* <img src={pic6} className="h-8 w-8 mx-auto" srcset="" />
             */}
            <svg
              className="h-8 w-8 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
