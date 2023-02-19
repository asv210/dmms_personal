import React from "react";
import HeaderDesk from "./HeaderDesk";
import Navbar from "./Navbar";
import WorkerDeskCard from "./WorkerDeskCard";
const WorkerDesk = () => {
  return (
    <>
      <Navbar></Navbar>
      <HeaderDesk></HeaderDesk>
      <WorkerDeskCard></WorkerDeskCard>
    </>
  );
};

export default WorkerDesk;
