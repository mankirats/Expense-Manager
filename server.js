const express = require("express");
const app = express();
const User = require("./models/user");
// require("dotenv").config({ path: "/config/dev.env" });
const userRouter = require("./routers/userRouter");
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
    console.log("Server is running at port - " + port);
});
