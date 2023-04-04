import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import WorkerInfo from "./WorkerInfo";
import axios from "axios";
const ManagerHome = () => {
  const [dat, setData] = useState([]);
  const func = async () => {
    // e.preventDefault();
    const ema = localStorage.getItem("email");

    const { data } = await axios.get(
      "http://localhost:8000/api/managerprofile1/?email=" + ema
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
      {dat.length > 0 ? (
        <div>
          {dat[0].map((item) => {
            return <WorkerInfo item={item} />;
          })}
        </div>
      ) : (
        <div>fgfcrt</div>
      )}
    </>
  );
};

export default ManagerHome;
