const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");
const Expense = require("../models/expense");
const User = require("../models/user");
const auth = require("../middleware/auth");
require("../db/mongoose");

router.get("/api/v1/expenses", auth, async (req, res) => {
    try {
        const user = req.user;
        await user.populate("allExpense");
        res.send(user.allExpense);
    } catch (err) {
        res.send(err.message);
    }
});

router.post("/api/v1/task/add", auth, async (req, res) => {
    try {
        const expense = new Expense({
            ...req.body,
            expensedBy: req.user._id,
        });
        result = await expense.save();
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;
