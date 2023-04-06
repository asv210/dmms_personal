import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import WorkerCard from "./WorkerCard";
const WorkerInfo = () => {
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
      <Header></Header>

      <WorkerCard></WorkerCard>
    </>
  );
};

export default WorkerInfo;
