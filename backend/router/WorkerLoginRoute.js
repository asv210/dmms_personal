import workerLoginModel from "../model/workerLogin.js";

class WorkerLoginRoute {
  static createDoc = async (req, res) => {
    const obj = new workerLoginModel(req.body);
    const result = await obj.save();
    res.status(201).send(result);
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await workerLoginModel.find();
      res.send(result);
    } catch (err) {
      console(err);
    }
  };

  static getDocById = async (req, res) => {
    try {
      const result = await workerLoginModel.findOne({
        email: req.body.email,
      });
      if (result != null) {
        if (result.password === req.body.password) {
          res.status(200).send(result);
        } else {
          res.status(203).send("not ok");
        }
      } else {
        res.status(203).send("not ok");
      }
    } catch (err) {
      console.log(err);
    }
  };

  static updateDocById = async (req, res) => {
    try {
      const result = await workerLoginModel.updateMany(
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
      const result = await workerLoginModel.deleteMany({ email: req.param.id });
      res.status(204).send(result);
    } catch (err) {
      console(err);
    }
  };
}
export default WorkerLoginRoute;
