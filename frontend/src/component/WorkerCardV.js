import React, { useEffect } from "react";
import pic4 from "./image/worker.jpeg";

const WorkerCardV = ({ item }) => {
  return (
    <div>
      <div className="my-2">
        <div className="flex flex-row space-between  bg-green-200">
          {/* <div className=" w-2 mx-4 text-center py-4 ">{item.length}</div> */}
          <div className=" flex flex-row justify-center items-center w-48">
            <img
              src={pic4}
              className=" h-8 w-8 mx-8 rounded-xl "
              alt=""
              srcset=""
            />
          </div>
          <div className=" w-full   text-center py-4 ">{item?.date}</div>

          <div className="text-center w-full  py-4">{item?.assignWork}</div>
          <div className="text-center w-full  py-4">{item?.completedWork}</div>

          <div className="text-center w-full py-4">{item?.defectedWork}</div>
          <div className="text-center w-full py-4">{item?.salary}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkerCardV;
