import express from "express";
import UserAuthRouter from "./routes/UserAuthRouter.js";
import dbConnect from "./lib/dbConnect.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// Initialize environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*", credentials: true }));

// Routes
app.use("/user", UserAuthRouter);

dbConnect();
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
