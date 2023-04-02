const express = require("express");
const cors = require("cors");
const app = express();
// import web from "./web";
const port = 8000;
app.use(cors());
const mongoDB = require("./db");
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.use("/api", web);
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
