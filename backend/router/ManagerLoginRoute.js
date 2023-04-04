import ManagerLoginModel from "../model/ManagerLogin.js";

class ManagerLoginRoute {
  static createDoc = async (req, res) => {
    const obj = new ManagerLoginModel(req.body);
    const result = await obj.save();
    res.status(201).send(result);
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await ManagerLoginModel.find();
      res.send(result);
    } catch (err) {
      console(err);
    }
  };

  static getDocById = async (req, res) => {
    try {
      const result = await ManagerLoginModel.findOne({
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
      const result = await ManagerLoginModel.updateMany(
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
      const result = await ManagerLoginModel.deleteMany({
        email: req.param.id,
      });
      res.status(204).send(result);
    } catch (err) {
      console(err);
    }
  };
}
export default ManagerLoginRoute;
