import express from "express";
import OwnerLogin from "./router/OwnerLogin.js";
import OwnerManagerRoute from "./router/OwnerManagerRoute.js";
import WorkerManagerRoute from "./router/WorkerManagerRoute.js";
import ManagerProfileRoute from "./router/ManagerProfileRoute.js";
import ManagerLoginRoute from "./router/ManagerLoginRoute.js";
import WorkerProfileRoute from "./router/WorkerProfileRoute.js";
import WorkerLoginRoute from "./router/WorkerLoginRoute.js";
import ManagerLoginModel from "./model/ManagerLogin.js";
const router = express.Router();

router.get("/workerlogin/", WorkerLoginRoute.getAllDoc);

router.post("/workerlogin1/", WorkerLoginRoute.getDocById);

router.post("/workerlogin/", WorkerLoginRoute.createDoc);

router.post("/getWorkerInfo/", WorkerLoginRoute.getDoc);

router.put("/workerlogin/:id", WorkerLoginRoute.updateDocById);

router.put("/workerlogin11/", WorkerLoginRoute.updateDoc);

router.delete("/workerlogin/", WorkerLoginRoute.deleteDocById);

router.get("/managerlogin/", ManagerLoginRoute.getAllDoc);

router.post("/managerlogin1/", ManagerLoginRoute.getDocById);

router.post("/getManagerInfo/", ManagerLoginRoute.getDoc);

router.post("/managerlogin/", ManagerLoginRoute.createDoc);

router.put("/managerlogin/", ManagerLoginRoute.updateDocById);

router.put("/managerlogin11/", ManagerLoginRoute.updateDoc);

router.delete("/managerlogin/", ManagerLoginRoute.deleteDocById);

router.get("/workerprofile/", WorkerProfileRoute.getAllDoc);

router.get("/workerprofile1/", WorkerProfileRoute.getDocById);

router.post("/workerprofile/", WorkerProfileRoute.createDoc);

router.put("/workerprofile/", WorkerProfileRoute.updateDocById);

router.put("/workerprofile/:id", WorkerProfileRoute.deleteDocById);

router.get("/managerprofile/", ManagerProfileRoute.getAllDoc);

router.get("/managerprofile1/", ManagerProfileRoute.getDocById);

router.post("/managerprofile/", ManagerProfileRoute.createDoc);

router.put("/managerprofile/", ManagerProfileRoute.updateDocById);

router.put("/managerprofile/:id", ManagerProfileRoute.deleteDocById);

router.put("/ownerlogin/", OwnerLogin.updateDoc);

router.post("/ownerlogin/", OwnerLogin.getDocById);

router.get("/ownerlogin/", OwnerLogin.getAllDoc);

export default router;
