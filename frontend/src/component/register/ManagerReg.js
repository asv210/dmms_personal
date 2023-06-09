import React, { useState } from "react";
import axios from "axios";
const ManagerReg = () => {
  const [user, setUser] = useState({
    parent: localStorage.getItem("email"),
    email: "",
    password: "",
    name: "",
    phone: "",
    address: "",
    reenterpassword: "",
  });
  const [profile, setProfile] = useState({
    email: "",
    date: "00",
    assignWork: "00",
    completedWork: "00",
    defectedWork: "00",

    salary: "00",
  });
  let name, value;
  const handler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    setProfile({ ...user, [name]: value });

    // console.log(localStorage.getItem("email"));
  };
  const register = async (e) => {
    e.preventDefault();
    if (user.password === user.reenterpassword) {
      await axios
        .post("http://localhost:8000/api/managerprofile/", profile)
        .then((res) => {
          console.log(profile.email);
          if (res.status == 201) {
            console.log("confirm");
          }
        });
      await axios
        .post("http://localhost:8000/api/managerlogin/", user)
        .then((res) => {
          if (res.status == 201) {
            // console.log(res.data);

            alert("successfully added");
            window.location = "/AddManager";
          } else {
            alert("wrong details");
            window.location.reload(true);
          }
        });
    } else {
      alert("wrong password");
      window.location = "/AddWorker";
    }
  };
  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div>
        <h3 className="text-4xl font-bold text-purple-600">Add Manager</h3>
      </div>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <form>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Name
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handler}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Email
            </label>
            <div className="flex flex-col items-start">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handler}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 undefined">
              Mobile_No
            </label>
            <div className="flex flex-col items-start">
              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handler}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="address"
              className=" text-sm font-medium text-gray-700 undefined"
            >
              Address
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handler}
                className=" block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Password
            </label>
            <div className="flex flex-col items-start">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handler}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Confirm Password
            </label>
            <div className="flex flex-col items-start">
              <input
                type="password"
                name="reenterpassword"
                value={user.reenterpassword}
                onChange={handler}
                className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={register}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManagerReg;
