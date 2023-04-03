import express from "express";
import WorkerLoginRoute from "./router/WorkerLoginRoute.js";
const router = express.Router();

router.get("/workerlogin/", WorkerLoginRoute.getAllDoc);

router.post("/workerlogin1/", WorkerLoginRoute.getDocById);

router.post("/workerlogin/", WorkerLoginRoute.createDoc);

router.put("/workerlogin/:id", WorkerLoginRoute.updateDocById);
router.put("/workerlogin/:id", WorkerLoginRoute.deleteDocById);
export default router;
