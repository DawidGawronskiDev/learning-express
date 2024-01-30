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

app.use((req, res, next) => {
    console.log("Hi!")
    res.status(404).send("File that you're looking for might be absent")
    next()
})

// Remaining errors handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
