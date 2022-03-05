const express = require("express");
const app = express();
// require("dotenv").config({ path: "/config/dev.env" });
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log("Server is running at port - " + port);
});
