const mongoose = require("../db/mongoose");

const expenseSchema = new mongoose.Schema(
    {
        expenseTitle: { type: String, required: true },
        expenseAmount: { type: Number, required: true },
        expensedBy: { type: Schema.Type.Object.Id, ref: "User" },
    },
    { timestamps: true }
);

const Expense = mongoose.model("expense", expenseSchema);

module.exports = Expense;
