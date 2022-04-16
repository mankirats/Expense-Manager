const express = require("express");
const app = express();
const User = require("./models/user");
// require("dotenv").config({ path: "/config/dev.env" });
const userRouter = require("./routers/userRouter");
const expenseRouter = require("./routers/expenseRouter");
const port = process.env.PORT;
require("./db/mongoose");
const cors = require("cors");
const url = new URL("http://localhost:5000");
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(expenseRouter);

app.listen(port, () => {
    console.log("Server is running at port - " + port);
});
