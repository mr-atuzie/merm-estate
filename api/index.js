import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import errorHandler from "./middlewares/errorMiddleware.js";
dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB)
  .then(() => console.log("connected to Database"))
  .catch((error) => console.log(error));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

//Error Middleware
app.use(errorHandler);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
