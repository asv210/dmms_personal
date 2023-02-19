import React from "react";
import HeaderWorker from "./HeaderWorker";
import NavbarWo from "./NavbarWo";
import WorkerCardV from "./WorkerCardV";

const WorkerHome = () => {
  return (
    <>
      <NavbarWo></NavbarWo>
      <HeaderWorker></HeaderWorker>
      <WorkerCardV></WorkerCardV>
    </>
  );
};

export default WorkerHome;
