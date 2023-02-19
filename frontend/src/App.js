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
import Header from "./component/Header";
import WorkerCard from "./component/WorkerCard";
import WorkerDesk from "./component/WorkerDesk";
import HeaderDesk from "./component/HeaderDesk";
import WorkerDeskCard from "./component/WorkerDeskCard";
import NavbarWo from "./component/NavbarWo";
import WorkerCardV from "./component/WorkerCardV";
import NavbarOw from "./component/NavbarOw";
import HeaderWorker from "./component/HeaderWorker";
import HeaderOwner from "./component/HeaderOwner";
import AddManager from "./component/AddManager";
import ManagerInfo from "./component/ManagerInfo";
import ManagerCard from "./component/ManagerCard";
import HeaderMInfo from "./component/HeaderMInfo";
import OwnerCard from "./component/OwnerCard";
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
          <Route exact path="/WorkerDesk" element={<WorkerDesk></WorkerDesk>} />
          <Route
            exact
            path="/WorkerDeskCard"
            element={<WorkerDeskCard></WorkerDeskCard>}
          />
          <Route
            exact
            path="/WorkerCardV"
            element={<WorkerCardV></WorkerCardV>}
          />
          <Route exact path="/NavbarWo" element={<NavbarWo></NavbarWo>} />
          <Route exact path="/NavbarOw" element={<NavbarOw></NavbarOw>} />
          <Route exact path="/Help" element={<Help></Help>} />
          <Route exact path="/WorkerCard" element={<WorkerCard></WorkerCard>} />
          <Route exact path="/Header" element={<Header></Header>} />
          <Route exact path="/HeaderDesk" element={<HeaderDesk></HeaderDesk>} />
          <Route
            exact
            path="/HeaderOwner"
            element={<HeaderOwner></HeaderOwner>}
          />
          <Route exact path="/OwnerCard" element={<OwnerCard></OwnerCard>} />
          <Route
            exact
            path="/HeaderWorker"
            element={<HeaderWorker></HeaderWorker>}
          />
          <Route
            exact
            path="/HeaderMInfo"
            element={<HeaderMInfo></HeaderMInfo>}
          />

          <Route exact path="/AddWorker" element={<AddWorker></AddWorker>} />
          <Route exact path="/AddManager" element={<AddManager></AddManager>} />
          <Route exact path="/WorkerInfo" element={<WorkerInfo></WorkerInfo>} />
          <Route
            exact
            path="/ManagerInfo"
            element={<ManagerInfo></ManagerInfo>}
          />
          <Route exact path="/ManagerReg" element={<ManagerReg></ManagerReg>} />
          <Route
            exact
            path="/ManagerCard"
            element={<ManagerCard></ManagerCard>}
          />
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
