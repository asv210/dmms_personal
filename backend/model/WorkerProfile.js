import mongoose from "mongoose";

const workerProfileSchema = new mongoose.Schema({
  email: { type: String },
  date: { type: Date },
  assignWork: { type: String },
  completedWork: { type: String },
  defectedWork: { type: String },
  salary: { type: String },
});

const WorkerProfileModel = mongoose.model(
  "managerProfile",
  workerProfileSchema
);
export default WorkerProfileModel;
