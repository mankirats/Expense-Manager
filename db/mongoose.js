const mongoose = require("mongoose");
const db = process.env.DB;
const dburl = process.env.DBURL;
mongoose.connect(`${dburl}/${db}`);
