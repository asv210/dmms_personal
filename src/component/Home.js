import React from "react";
import pic1 from "./image/dimond1.png";
import manager from "./image/manager.jpeg.jpg";
import owner from "./image/owner.jpeg.jpg";
import worker from "./image/worker.jpeg";
import bg from "./image/BackgroundImage.png";

import { NavLink } from "react-router-dom";
// import pic1 from "./image/.png";
const Home = () => {
  return (
    <div className="h-screen " style={{ backgroundImage: `url(${bg})` }}>
      <div className="mx-auto pt-12">
        <h1 className="text-center text-2xl text-white font-serif">
          SRK Groups
        </h1>
        <img
          src={pic1}
          className="h-[240px] w-[240px] mx-auto"
          alt=""
          srcset=""
        />
        <h2 className="text-center text-xl text-white">
          Select yout Account type
        </h2>
      </div>
      <div className="flex flex-row justify-around mt-8 ">
        <div>
          <NavLink className="" to="OwnerLogin">
            <img src={owner} className="h-[166px] w-[300px]" alt="" srcset="" />
          </NavLink>
          <h2 className="text-center font-mono text-white  text-2xl">Owner</h2>
        </div>
        <div>
          <NavLink to="ManagerLogin">
            <img
              src={manager}
              className="h-[166px] w-[300px]"
              alt=""
              srcset=""
            />
          </NavLink>
          <h2 className="text-center font-mono text-white  text-2xl">
            Manager
          </h2>
        </div>
        <div>
          <NavLink to="WorkerLogin">
            <img
              src={worker}
              className="h-[166px] w-[300px]"
              alt=""
              srcset=""
            />
          </NavLink>
          <h2 className="text-center font-mono text-white  text-2xl">Worker</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
