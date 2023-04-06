import React, { useState, useEffect } from "react";
import NavbarOw from "./NavbarOw";
import HeaderOwner from "./HeaderOwner";
import ManagerCard from "./ManagerCard";
import axios from "axios";
const OwnerHome = () => {
  const [dat, setData] = useState([]);
  const func = async () => {
    // e.preventDefault();
    const ema = localStorage.getItem("email");

    const { data } = await axios.get(
      "http://localhost:8000/api/managerlogin/?parent=" + ema
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
      <NavbarOw></NavbarOw>
      <HeaderOwner></HeaderOwner>

      {dat.length > 0 ? (
        <div>
          {dat[0].map((item) => {
            return <ManagerCard item={item} />;
          })}
        </div>
      ) : (
        <div className="text-center">Data Loading</div>
      )}
    </>
  );
};

export default OwnerHome;
