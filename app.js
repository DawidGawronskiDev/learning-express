const express = require("express");
const app = express();
const port = 3000;

const morgan = require("morgan")

const fs = require("fs")
const path = require("path")

app.use(morgan("dev"))

app.use((req, res, next) => {
    const currentTime = new Date();
    const filePath = path.join(__dirname, "connectionTime.txt");

    fs.appendFile(filePath, currentTime + "\n", (err) => {
        console.log(err)
    })

    next()
})

app.get("/", function (req, res, next) {
  res.send("Hello World!");
  next()
});

app.get("/user/:id", (req, res, next) => {
    if (req.params.id === "0") {
        console.log("There is no user id")
    }
    next()
})

app.use((req, res, next) => {
    console.log("Testing!")
    next()
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
