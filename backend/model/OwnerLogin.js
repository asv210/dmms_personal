import mongoose from "mongoose";

const ownerLogin = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
  cod: { type: Number },
});

const OwnerModel = new mongoose.model("ownermodel", ownerLogin);

export default OwnerModel;
