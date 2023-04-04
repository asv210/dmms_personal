import express from "express";
import OwnerManagerRoute from "./router/OwnerManagerRoute.js";
import WorkerManagerRoute from "./router/WorkerManagerRoute.js";
import ManagerProfileRoute from "./router/ManagerProfileRoute.js";
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

router.get("/workerprofile1/", WorkerProfileRoute.getDocById);

router.post("/workerprofile/", WorkerProfileRoute.createDoc);

router.put("/workerprofile/:id", WorkerProfileRoute.updateDocById);

router.put("/workerprofile/:id", WorkerProfileRoute.deleteDocById);

router.get("/managerprofile/", ManagerProfileRoute.getAllDoc);

router.get("/managerprofile1/", ManagerProfileRoute.getDocById);

router.post("/managerprofile/", ManagerProfileRoute.createDoc);

router.put("/managerprofile/:id", ManagerProfileRoute.updateDocById);

router.put("/managerprofile/:id", ManagerProfileRoute.deleteDocById);

// router.get("/workermanager/", WorkerManagerRoute.getAllDoc);

// router.get("/workermanager1/", WorkerManagerRoute.getDocById);

// router.post("/workermanager/", WorkerManagerRoute.createDoc);

// router.put("/workermanager/:id", WorkerManagerRoute.updateDocById);

// router.put("/workermanager/:id", WorkerManagerRoute.deleteDocById);

// router.get("/ownermanager/", OwnerManagerRoute.getAllDoc);

// router.get("/ownermanager1/", OwnerManagerRoute.getDocById);

// router.post("/ownermanager/", OwnerManagerRoute.createDoc);

// router.put("/ownermanager/:id", OwnerManagerRoute.updateDocById);

// router.put("/ownermanager/:id", OwnerManagerRoute.deleteDocById);

export default router;
