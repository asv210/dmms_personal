import express from "express";
import ManagerLoginRoute from "./router/ManagerLoginRoute.js";
import WorkerProfileRoute from "./router/WorkerProfileRoute.js";
import WorkerLoginRoute from "./router/WorkerLoginRoute.js";
const router = express.Router();

router.get("/workerlogin/", WorkerLoginRoute.getAllDoc);

router.post("/workerlogin1/", WorkerLoginRoute.getDocById);

router.post("/workerlogin/", WorkerLoginRoute.createDoc);

router.put("/workerlogin/:id", WorkerLoginRoute.updateDocById);

router.put("/workerlogin/:id", WorkerLoginRoute.deleteDocById);

router.get("/managerlogin/", ManagerLoginRoute.getAllDoc);

router.post("/managerlogin1/", ManagerLoginRoute.getDocById);

router.post("/managerlogin/", ManagerLoginRoute.createDoc);

router.put("/managerlogin/:id", ManagerLoginRoute.updateDocById);

router.put("/managerlogin/:id", ManagerLoginRoute.deleteDocById);

router.get("/workerprofile/", WorkerProfileRoute.getAllDoc);

router.post("/workerprofile1/", WorkerProfileRoute.getDocById);

router.post("/workerprofile/", WorkerProfileRoute.createDoc);

router.put("/workerprofile/:id", WorkerProfileRoute.updateDocById);

router.put("/workerprofile/:id", WorkerProfileRoute.deleteDocById);

export default router;
