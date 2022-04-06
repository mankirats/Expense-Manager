const mongoose = require("mongoose");
const User = require("../models/user");
require("../db/mongoose");

const expenseSchema = new mongoose.Schema(
    {
        expenseTitle: { type: String, required: true },
        expenseTotal: { type: Number, required: true },
        expenseDate: {
            type: Date,
            min: "1999-01-11",
            required: "true",
            validate: {
                validator: function (v) {
                    return (
                        v && // check that there is a date object
                        v.getTime() < Date.now() + 24 * 60 * 60 * 1000
                    );
                },
                message: "Expense date cannot be greater than current date",
            },
        },
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
