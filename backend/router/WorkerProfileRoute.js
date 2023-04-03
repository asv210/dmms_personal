import WorkerProfileModel from "../model/WorkerProfile.js";

class WorkerProfileRoute {
  static createDoc = async (req, res) => {
    const obj = new WorkerProfileRoute(req.body);
    const result = await obj.save();
    res.status(201).send(result);
  };
  static getAllDoc = async (req, res) => {
    try {
      const result = await WorkerProfileModel.find();
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };
  static getDocById = async (req, res) => {
    try {
      const result = await WorkerProfileModel.findOne({
        email: req.body.email,
      });
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };
  static updateDocById = async (req, res) => {
    try {
      const result = await workerProfileModel.updateMany(
        { email: req.param.id },
        { $set: req.body }
      );
      res.send(result);
    } catch (err) {
      console(err);
    }
  };

  static deleteDocById = async (req, res) => {
    try {
      const result = await workerProfileModel.deleteMany({
        email: req.param.id,
      });
      res.status(204).send(result);
    } catch (err) {
      console(err);
    }
  };
}
export default WorkerProfileRoute;