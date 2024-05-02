const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((error) => {
    console.log("Failed to connect to MOngoDb", error);
  });

const applicationRoutes = require("../Backend/src/routes/ApplicationRoutes");
app.use("/applications", applicationRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}.....`);
});
