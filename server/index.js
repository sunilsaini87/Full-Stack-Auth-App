import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({
  path: "./.env",
});

const app = express();

const port = process.env.port;

app.listen(process.env.port, () => {
  console.log(`app is running at ${process.env.port}`);
});
