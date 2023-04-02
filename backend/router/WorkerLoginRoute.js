import workerLoginModel from "../model/workerLogin";

class workerLoginRoute {
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
      const result = await workerLoginModel.find({ email: req.param.id });
      res.send(result);
    } catch (err) {
      console(err);
    }
  };
  static getDocById = async (req, res) => {
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
}
