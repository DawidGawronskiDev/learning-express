const fs = require("fs")
const path = require("path")

app.use((req, res, next) => {
    const currentTime = new Date();
    const filePath = path.join(__dirname, "connectionTime.txt");

    fs.appendFile(filePath, currentTime + "\n", (err) => {
        console.log(err)
    })

    next()
})