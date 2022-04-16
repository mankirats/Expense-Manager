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

router.get("/api/v1/allExpenses", async (req, res) => {
    try {
        const expense = await Expense.find({});
        console.log(expense);
        res.send(expense);
    } catch (err) {
        res.send(err.message);
    }
});

router.post("/api/v1/expense/add", auth, async (req, res) => {
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

router.patch("/api/v1/expense/:id/update", auth, async (req, res) => {
    try {
        const expense_object = await Expense.findOne({});
        const allowed_updates = Object.keys(expense_object.toJSON()).slice(
            1,
            -4
        );
        const req_updates = Object.keys(req.body);

        const expense = await Expense.findOne({
            _id: req.params.id.toString(),
            expensedBy: req.user._id,
        });

        if (!expense) {
            throw new Error("Expense not available");
        }

        const isValidUpdate = req_updates.every((key) =>
            allowed_updates.includes(key)
        );

        if (!isValidUpdate) {
            throw new Error(
                `Requested updates are not valid. Allowed updates are listed below:${allowed_updates}`
            );
        }

        for (x of req_updates) {
            expense[x] = req.body[x];
        }
        const updatedExpense = await expense.save();

        res.status(201).send({
            status: 201,
            data: updatedExpense,
        });
    } catch (err) {
        res.status(400).send({
            status: 400,
            message: err.message,
        });
    }
});

module.exports = router;
