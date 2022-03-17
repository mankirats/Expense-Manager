const mongoose = require("mongoose");
const User = require("../models/user");
require("../db/mongoose");

const expenseSchema = new mongoose.Schema(
    {
        expenseTitle: { type: String, required: true },
        expenseAmount: { type: Number, required: true },
        expensedBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "user",
        },
    },
    { timestamps: true }
);

const Expense = mongoose.model("expense", expenseSchema);

module.exports = Expense;
