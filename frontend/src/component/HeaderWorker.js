import React from "react";

const HeaderWorker = () => {
  return (
    <div className="">
      <div className="flex flex-row space-between   bg-green-200">
        <div className=" w-2 mx-4 text-center py-2 ">No.</div>
        <div className="text-center ml-8 w-full py-2">Date</div>
        <div className="text-center w-full py-2">Assigned</div>
        <div className="text-center w-full py-2">Completed</div>
        <div className="text-center w-full py-2">Defective</div>
        <div className="text-center w-full py-2">Salary</div>
      </div>
    </div>
  );
};

export default HeaderWorker;
