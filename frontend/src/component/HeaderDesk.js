import React from "react";

const HeaderDesk = () => {
  return (
    <div className="flex flex-row space-between  mt-2 bg-green-200">
      <div className=" w-2 mx-4 text-center py-4 ">No.</div>
      <div className=" w-full text-center py-4 ">Name</div>

      <div className="text-center w-full py-4">Date</div>
      <div className="text-center w-full py-4">Assign</div>
      <div className="text-center w-full py-4">Completed</div>

      <div className="text-center w-full py-4">Defective</div>
      <div className="text-center w-full py-4">Salary</div>
      <div className="text-center w-full py-4">Confirm</div>
    </div>
  );
};

export default HeaderDesk;
