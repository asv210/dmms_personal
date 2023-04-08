import ManagerProfileModel from "../model/ManagerProfile.js";

class ManagerProfileRoute {
  static createDoc = async (req, res) => {
    const obj = new ManagerProfileModel(req.body);
    const result = await obj.save();
    res.status(201).send(result);
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await ManagerProfileModel.find();
      res.send(result);
    } catch (err) {
      console(err);
    }
  };

  static getDocById = async (req, res) => {
    try {
      const result = await ManagerProfileModel.findOne({
        email: req.query.email,
      });
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
    }
  };

  static updateDocById = async (req, res) => {
    try {
      const result = await ManagerProfileModel.updateMany(
        { email: req.query.email },
        { $set: req.body }
      );
      res.send(result);
    } catch (err) {
      console(err);
    }
  };

  static deleteDocById = async (req, res) => {
    try {
      const result = await ManagerProfileModel.deleteMany({
        email: req.param.id,
      });
      res.status(204).send(result);
    } catch (err) {
      console(err);
    }
  };
}

export default ManagerProfileRoute;
