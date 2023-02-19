import React, { useState } from "react";

const ManagerCard = () => {
  const [user, setUser] = useState({
    Date: "",
    Assign: "",
    Completed: "",
    Defective: "",
    DailySalary: "",
  });
  let name, value;
  const handler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user.Date);
  };

  const confirmhandler = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="mt-2">
      <div className="flex flex-row space-between  bg-green-200">
        <div className=" w-2 px-4 text-center py-4 ">1</div>

        <div className="w-full mx-12 text-center py-4 ">
          Mahendralal Chiman oza
        </div>

        <div className="text-center w-full py-4">
          <input type="date" name="Date" value={user.Date} onChange={handler} />
        </div>

        <div className="text-center w-full py-4  ">
          <input
            style={{ width: "50% " }}
            className=""
            type="number"
            name="Assign"
            value={user.Assign}
            onChange={handler}
          />
        </div>

        <div className="text-center w-full py-4  ">
          <input
            style={{ width: "50% " }}
            className=""
            type="number"
            name="Completed"
            value={user.Completed}
            onChange={handler}
          />
        </div>
        <div className="text-center w-full py-4 ">
          <input
            style={{ width: "50% " }}
            className=""
            type="number"
            name="Defective"
            value={user.Defective}
            onChange={handler}
          />
        </div>

        <div className=" w-full text-center py-4 ">
          <h3>Salary</h3>
        </div>
        <div className=" w-full text-center py-4">
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-yellow-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
            onClick={confirmhandler}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagerCard;
