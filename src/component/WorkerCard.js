import React from "react";
import pic4 from "./image/worker.jpeg";
import { NavLink } from "react-router-dom";
const WorkerCard = () => {
  return (
    <div className="my-2">
      <div className="flex flex-row space-between  bg-green-200">
        <div className=" w-2 mx-4 text-center py-4 ">No.</div>
        <div className=" flex flex-row justify-center items-center ml-6 mr-7 w-52">
          <img src={pic4} className=" h-8 w-8  rounded-xl " alt="" srcset="" />
        </div>
        <div className="mr-24  text-center py-4 ">Name</div>

        <div className="text-center w-full py-4">Mobile No.</div>
        <div className="text-center w-full py-4">Email</div>

        <div className="text-center w-full py-4">Address</div>

        <div className=" w-full text-center py-4">
          <NavLink>
            <img src="" alt="" srcset="" />
          </NavLink>
        </div>

        <div className=" w-full text-center py-4">
          <NavLink>
            <img src="" alt="" srcset="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;
