import React, { useState, useEffect } from "react";
import axios from "axios";
import bg from "./image/home.jpeg";
import WorkerHome from "./WorkerHome";
const WorkerLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const login = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/workerlogin1/", user).then((res) => {
      if (res.status == 200) {
        <WorkerHome />;
      } else {
        alert("wrong details");
        window.location.reload(true);
      }
    });
  };
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 ">
            Worker Login
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handler}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handler}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <a href="#" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button
                onClick={login}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkerLogin;
