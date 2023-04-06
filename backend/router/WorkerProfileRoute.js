import WorkerProfileModel from "../model/WorkerProfile.js";

class WorkerProfileRoute {
  static createDoc = async (req, res) => {
    const obj = new WorkerProfileModel(req.body);
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
      const result = await WorkerProfileModel.find({
        email: req.query.email,
      });
      //   console.log(result);
      res.send(result);
    } catch (err) {
      console.log(err);
    }
  };
  static updateDocById = async (req, res) => {
    try {
      const result = await workerProfileModel.updateMany(
        { email: req.query.id },
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
