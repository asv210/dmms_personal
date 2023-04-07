import mongoose from "mongoose";

const managerProfileSchema = new mongoose.Schema({
  email: { type: String },
  date: { type: Date },
  assignWork: { type: Number },
  completedWork: { type: Number },
  defectedWork: { type: Number },

  salary: { type: Number },
});

const ManagerProfileModel = mongoose.model(
  "managerProfile",
  managerProfileSchema
);

export default ManagerProfileModel;
