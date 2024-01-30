const express = require("express");
const app = express();
const port = 3000;

const morgan = require("morgan")

app.use(morgan("dev"))

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
