import OwnerModel from "../model/OwnerLogin.js";

class OwnerLogin {
  static updateDoc = async (req, res) => {
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
export default OwnerLogin;
