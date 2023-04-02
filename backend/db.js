const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://apar:apar@cluster0.i6z9xrs.mongodb.net/DiamondManagement?retryWrites=true&w=majority";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, async (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected successfully");
    }
  });
};
module.exports = mongoDB;
