import React, { useState, useEffect } from "react";
import HeaderDesk from "./HeaderDesk";
import Navbar from "./Navbar";
import WorkerDeskCard from "./WorkerDeskCard";
import axios from "axios";
const WorkerDesk = () => {
  const [dat, setData] = useState([]);

  const func = async () => {
    // e.preventDefault();
    const ema = localStorage.getItem("email");

    const { data } = await axios.get(
      "http://localhost:8000/api/workerlogin/?parent=" + ema
    );
    // .then((res) => {
    // const data1 = res.data;
    // console.log(res.data);
    // const data = await res.data;
    if (data.length > 0) {
      setData([data]);
    } else {
    }

    // // console.log(res.data);
    // setData(res.data);
    // console.log(dat);

    // .then((res) => {
    //   setData([...data, res.data]);
    //   console.log(data);
    // });
  };
  useEffect(() => {
    func();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <HeaderDesk></HeaderDesk>
      {dat.length > 0 ? (
        <div>
          {dat[0].map((item) => {
            return <WorkerDeskCard item={item} />;
          })}
        </div>
      ) : (
        <div className="text-center">Data Loading</div>
      )}
    </>
  );
};

export default WorkerDesk;
