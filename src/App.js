// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import ManagerLogin from "./component/ManagerLogin";
import WorkerLogin from "./component/WorkerLogin";
import OwnerLogin from "./component/OwnerLogin";
import OwnerHome from "./component/OwnerHome";
import ManagerHome from "./component/ManagerHome";
import WorkerHome from "./component/WorkerHome";
import WorkerReg from "./component/register/WorkerReg";
import ManagerReg from "./component/register/ManagerReg";
import WorkerInfo from "./component/WorkerInfo";
import Help from "./component/Help";
import AddWorker from "./component/AddWorker";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route
            exact
            path="/ManagerLogin"
            element={<ManagerLogin></ManagerLogin>}
          />
          <Route exact path="/Help" element={<Help></Help>} />

          <Route exact path="/AddWorker" element={<AddWorker></AddWorker>} />
          <Route exact path="/WorkerInfo" element={<WorkerInfo></WorkerInfo>} />
          <Route exact path="/ManagerReg" element={<ManagerReg></ManagerReg>} />
          <Route
            exact
            path="/ManagerHome"
            element={<ManagerHome></ManagerHome>}
          />

          <Route exact path="/OwnerLogin" element={<OwnerLogin></OwnerLogin>} />
          <Route exact path="/OwnerHome" element={<OwnerHome></OwnerHome>} />
          <Route
            exact
            path="/WorkerLogin"
            element={<WorkerLogin></WorkerLogin>}
          />
          <Route exact path="/WorkerHome" element={<WorkerHome></WorkerHome>} />
          <Route exact path="/WorkerReg" element={<WorkerReg></WorkerReg>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
