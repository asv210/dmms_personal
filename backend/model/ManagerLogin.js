import mongoose, { Schema } from "mongoose";

const managerLoginSchema = new mongoose.Schema({
  parent: { type : String },
  email: { type : String },
  password: { type : String },
  name: { type : String },
  phone: { type : String },
  address: { type : String },
  salary:{type : Number}
});

const ManagerLoginModel = mongoose.model("managerLogin", managerLoginSchema);
export default ManagerLoginModel;
