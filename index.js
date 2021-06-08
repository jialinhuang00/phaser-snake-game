const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public/"));
app.get("/", (req, res) => res.sendFile("/public/index.html"));
app.listen(port, () => console.log("hi"));
