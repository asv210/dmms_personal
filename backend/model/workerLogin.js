import mongoose from "mongoose";
const workerLoginSchema = new mongoose.Schema({
  password: { type: String },
  name: { type: String },
  phone: { type: String },
  address: { type: String },
  email: { type: String },
});
const workerLoginModel = mongoose.model("WorkerLogin", workerLoginSchema);
export default workerLoginModel;
