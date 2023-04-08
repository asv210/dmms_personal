import ManagerWorkerRelationModel from "../model/WorkerManager.js";

class WorkerManagerRoute {
  static createDoc = async (req, res) => {
    const obj = new ManagerWorkerRelationModel(req.body);
    const result = await obj.save();
    res.status(201).send(result);
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await ManagerWorkerRelationModel.find();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

  static getDocById = async (req, res) => {
    try {
      const result = await ManagerWorkerRelationModel.find({
        email: req.query.email,
      });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

  static updateDocById = async (req, res) => {
    try {
      const result = await ManagerWorkerRelationModel.updateMany(
        { email: req.params.id },
        { $set: req.body }
      );
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };

  static deleteDocById = async (req, res) => {
    try {
      const result = await ManagerWorkerRelationModel.deleteMany({
        email: req.params.id,
      });
      res.status(204).send(result);
    } catch (err) {
      console.log(err);
    }
  };
}
export default WorkerManagerRoute;
