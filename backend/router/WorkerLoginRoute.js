import workerLoginModel from "../model/workerLogin.js";

class WorkerLoginRoute {
  static createDoc = async (req, res) => {
    const obj = new workerLoginModel(req.body);
    const result = await obj.save();
    res.status(201).send(result);
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await workerLoginModel.find({ parent: req.query.parent });
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
  static getDoc = async (req, res) => {
    const email = req.query.email;

    const data = await workerLoginModel.findOne({ email });
    return res.status(200).send(data);
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
  static updateDoc = async (req, res) => {
    try {
      const updateuser = await workerLoginModel.findOne({
        email: req.query.email,
      });
      if (updateuser.email === req.body.email) {
        await updateuser.updateOne({ $set: req.body });
        res.status(200).json("User Has Been Updated.");
      } else {
        res.status(403).json("You Can Not Update User");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  };
  static deleteDocById = async (req, res) => {
    try {
      const result = await workerLoginModel.deleteMany({
        email: req.query.email,
      });
      res.status(204).send(result);
    } catch (err) {
      console(err);
    }
  };
}
export default WorkerLoginRoute;
