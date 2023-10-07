import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();

const app = express();

mongoose
  .connect(process.env.DB)
  .then(() => console.log("connected to Database"))
  .catch((error) => console.log(error));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.use("/api/v1/user", userRouter);
