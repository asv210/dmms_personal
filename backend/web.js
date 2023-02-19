import express from "express";
import WorkerLoginController from "./WorkerLoginController.js";
import WorkerProfileController from "./WorkerProfileController.js";
import ManagerLoginController from "./ManagerLoginController.js";
import ManagerProfileController from "./ManagerProfileController.js";
import ManagerWorkerRelationController from "./ManagerWorkerRelationController.js";
import OwnerManagerRelationController from "./OwnerManagerRelationController.js";

const router = express.Router();

router.get('/workerlogin/', WorkerLoginController.getAllDoc)

router.post('/workerlogin/', WorkerLoginController.createDoc)

router.get('/workerlogin/:id', WorkerLoginController.getSingleDocById)

router.put('/workerlogin/:id', WorkerLoginController.updateDocById)

router.delete('/workerlogin/:id', WorkerLoginController.deleteDocById)

router.get('/workerprofile/', WorkerProfileController.getAllDoc)

router.post('/workerprofile/', WorkerProfileController.createDoc)

router.get('/workerprofile/:id', WorkerProfileController.getSingleDocById)

router.put('/workerprofile/:id', WorkerProfileController.updateDocById)

router.delete('/workerprofile/:id', WorkerProfileController.deleteDocById)

router.get('/managerlogin/', ManagerLoginController.getAllDoc)

router.post('/managerlogin/', ManagerLoginController.createDoc)

router.get('/managerlogin/:id', ManagerLoginController.getSingleDocById)

router.put('/managerlogin/:id', ManagerLoginController.updateDocById)

router.delete('/managerlogin/:id', ManagerLoginController.deleteDocById)

router.get('/managerprofile/', ManagerProfileController.getAllDoc)

router.post('/managerprofile/', ManagerProfileController.createDoc)

router.get('/managerprofile/:id', ManagerProfileController.getSingleDocById)

router.put('/managerprofile/:id', ManagerProfileController.updateDocById)

router.delete('/managerprofile/:id', ManagerProfileController.deleteDocById)

router.get('/managerworkerrelation/', ManagerWorkerRelationController.getAllDoc)

router.post('/managerworkerrelation/', ManagerWorkerRelationController.createDoc)

router.get('/managerworkerrelation/:id', ManagerWorkerRelationController.getSingleDocById)

router.put('/managerworkerrelation/:id', ManagerWorkerRelationController.updateDocById)

router.delete('/managerworkerrelation/:id', ManagerWorkerRelationController.deleteDocById)

router.get('/omr/', OwnerManagerRelationController.getAllDoc)

router.post('/omr/', OwnerManagerRelationController.createDoc)

router.get('/omr/:id', OwnerManagerRelationController.getSingleDocById)

router.put('/omr/:id', OwnerManagerRelationController.updateDocById)

router.delete('/omr/:id', OwnerManagerRelationController.deleteDocById)

export default router