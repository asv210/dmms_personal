import React from "react";

const HeaderMInfo = () => {
  return (
    <div className="flex mt-2 flex-row space-between  bg-green-200">
      <div className=" w-full text-center py-4 ml-9">Name</div>

      <div className="text-center w-full py-4">Mobile No.</div>
      <div className="text-center w-full py-4">Email</div>

      <div className="text-center w-full py-4">Address</div>

      <div className=" w-full text-center py-4">Salary</div>
      <div className=" w-full text-center py-4">Edit</div>

      <div className=" w-full text-center py-4">Remove</div>
    </div>
  );
};

export default HeaderMInfo;
