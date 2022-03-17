const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");
const Expense = require("../models/expense");
const User = require("../models/user");
const auth = require("../middleware/auth");
require("../db/mongoose");

router.post("/api/v1/task/add", auth, async (req, res) => {
    try {
        const newExpense = new Expense({
            ...req.body,
            expensedBy: req.user._id,
        });
        result = await newExpense.save();
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;
