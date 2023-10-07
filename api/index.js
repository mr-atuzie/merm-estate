import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.DB)
  .then(() => console.log("connected to Database"))
  .catch((error) => console.log(error));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
