import React, { useState } from "react";
import axios from "axios";
const ManagerCard = ({ item }) => {
  const [user, setUser] = useState({
    email: item?.email,
    date: "",
    assignWork: "",
    completedWork: "",
    defectedWork: "",

    salary: "",
  });
  let name, value;
  const handler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const confirmhandler = async (e) => {
    e.preventDefault();

    await axios
      .put(
        "http://localhost:8000/api/managerprofile/?email=" + user.email,
        user
      )
      .then((res) => {
        if (res.status == 201) {
          // console.log(res.data);

          alert("successfully added");
          window.location = "/";
        } else {
          alert("wrong details");
          window.location.reload(true);
        }
      });
  };
  return (
    <div className="mt-2">
      <div className="flex flex-row space-between  bg-green-200">
        <div className=" w-2 px-4 text-center py-4 ">1</div>

        <div className="w-full mx-12 text-center py-4 ">{item?.name}</div>

        <div className="text-center w-full py-4 ">
          <input type="date" name="date" value={user.date} onChange={handler} />
        </div>

        <div className="text-center w-full py-4  ">
          <input
            style={{ width: "50% " }}
            className="pl-2 ml-10"
            type="number"
            name="assignWork"
            value={user.assignWork}
            onChange={handler}
            placeholder="00"
          />
        </div>

        <div className="text-center w-full py-4  "></div>
        <div className="text-center w-full py-4 "></div>

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
