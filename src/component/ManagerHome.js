import React from "react";
import Navbar from "./Navbar";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import WorkerInfo from "./WorkerInfo";
const ManagerHome = () => {
  return (
    <>
      <Navbar></Navbar>
      <WorkerInfo></WorkerInfo>
    </>
  );
};

export default ManagerHome;
