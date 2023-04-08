import OwnerModel from "../model/OwnerLogin.js";

class OwnerLogin {
  static getAllDoc = async (req, res) => {
    try {
      const result = await OwnerModel.find();
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
    }
  };
  static getDocById = async (req, res) => {
    try {
      const result = await OwnerModel.findOne({
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
  static updateDoc = async (req, res) => {
    try {
      OwnerModel.findOneAndUpdate(
        { email: req.query.email },
        { cod: req.body.cod }
      )
        .then((result) => {
          return res.send(result);
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log(result);

      // return res.status(200).send(result);
    } catch (err) {
      console.log(err);
    }
  };
}
export default OwnerLogin;
