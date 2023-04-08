import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const WorkerDeskCard = ({ item }) => {
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
      .put("http://localhost:8000/api/workerprofile/?email=" + user.email, user)
      .then((res) => {
        if (res.status == 200) {
          // console.log(res.data);

          alert("successfully added");
          window.location.reload(true);
        } else {
          alert("wrong details");
          window.location.reload(true);
        }
      });
  };
  const [co, setco] = useState();
  const fun = async (e) => {
    await axios
      .get("http://localhost:8000/api/workerprofile1/?email=" + item?.email)
      .then((res) => {
        // console.log(res.data[0]);
        setUser(res.data[0]);
        // console.log(user);
      });
    await axios.get("http://localhost:8000/api/ownerlogin/").then((res) => {
      if (res.status == 200) {
        // console.log(res.data);
        setco(res.data[0].cod);
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
    <div className="flex flex-row space-between mt-2 bg-green-200">
      <div className=" w-2 mx-4 text-center py-4  ">1</div>

      <div className="w-full  text-center py-4 ">{item?.name}</div>

      <div className="text-center  w-full py-4">
        <input
          type="date"
          name="date"
          // value={user.date}
          value={moment(user.date).format("YYYY-MM-DD")}
          onChange={handler}
        />
      </div>

      <div className="text-center w-full py-4 ">
        <input
          style={{ width: "50% " }}
          className=""
          type="number"
          name="assignWork"
          value={user.assignWork}
          onChange={handler}
        />
      </div>

      <div className="text-center w-full py-4  ">
        <input
          style={{ width: "50% " }}
          className=""
          type="number"
          name="completedWork"
          value={user.completedWork}
          onChange={handler}
        />
      </div>
      <div className="text-center w-full py-4 ">
        <input
          style={{ width: "50% " }}
          className=""
          type="number"
          name="defectedWork"
          value={user.defectedWork}
          onChange={handler}
        />
      </div>

      <div className="w-full text-center py-4 ">
        <h3 className=" ">{parseInt(user.completedWork) * co}</h3>
      </div>
      <div className=" w-full text-center py-4">
        <button
          type="button"
          class="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
          onClick={confirmhandler}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default WorkerDeskCard;
