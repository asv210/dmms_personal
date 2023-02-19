import React from "react";
import pic4 from "./image/worker.jpeg";
const WorkerCardV = () => {
  return (
    <div>
      <div className="my-2">
        <div className="flex flex-row space-between  bg-green-200">
          <div className=" w-2 mx-4 text-center py-4 ">1</div>
          <div className=" flex flex-row justify-center items-center w-48">
            <img
              src={pic4}
              className=" h-8 w-8  rounded-xl "
              alt=""
              srcset=""
            />
          </div>
          <div className=" w-full   text-center py-4 ">12-24-2022</div>

          <div className="text-center w-full  py-4">200</div>
          <div className="text-center w-full  py-4">20</div>

          <div className="text-center w-full py-4">20</div>
          <div className="text-center w-full py-4">salary</div>
        </div>
      </div>
    </div>
  );
};

export default WorkerCardV;
