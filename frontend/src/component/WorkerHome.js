import React, { useEffect, useState } from "react";
import HeaderWorker from "./HeaderWorker";
import NavbarWo from "./NavbarWo";
import WorkerCardV from "./WorkerCardV";
import axios from "axios";
const WorkerHome = () => {
  const [dat, setData] = useState([]);
  const func = async () => {
    // e.preventDefault();
    const ema = localStorage.getItem("email");

    const { data } = await axios.get(
      "http://localhost:8000/api/workerprofile1/?email=" + ema
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
      <NavbarWo></NavbarWo>
      <HeaderWorker></HeaderWorker>
      {dat.length > 0 ? (
        <div>
          {dat[0].map((item) => {
            return <WorkerCardV item={item} />;
          })}
        </div>
      ) : (
        <div className="text-center">Data Loading</div>
      )}
    </>
  );
};

export default WorkerHome;
