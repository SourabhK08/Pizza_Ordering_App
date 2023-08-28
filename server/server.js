const express = require("express");
const morgan = require("morgan");
require("colors");

const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

//route
app.get("/", (req, res) => {});

app.listen(8080, () => {
  console.log("Server Is Running on Port 8080");
});
