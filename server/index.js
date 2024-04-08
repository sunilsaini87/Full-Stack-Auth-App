const express = require("express");
const dotenv = require("dotenv").config({
  path: "./.env",
});
const cors = require("cors");

const app = express();

const port = 8000;

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
