const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");
const Expense = require("../models/expense");
require("../db/mongoose");
router.get("/api/v1/userprofile", auth, (req, res) => {
    const user = req.user;
    res.send(user);
});

router.post("/api/v1/userlogin", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findByCredentials(email, password);
        const token = user.generateAuthToken();
        res.status(200).send({
            status: 200,
            message: "Log in Successful",
            data: user,
            generatedToken: token,
        });
    } catch (err) {
        res.status(400).send({
            status: 400,
            message: err.message,
        });
    }
});

router.post("/api/v1/register", async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        const token1 = result.generateAuthToken();
        res.status(201).send({
            status: 201,
            data: result,
            generatedToken: token1,
        });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

router.patch("/api/v1/user/update", auth, async (req, res) => {
    try {
        const user = req.user;
        const allowed_updates = Object.keys(user.toJSON());
        const req_updates = Object.keys(req.body);
        const valid_update = req_updates.every((key) => {
            return allowed_updates.includes(key);
        });
        if (!valid_update) {
            throw new Error("Invalid update");
        }
        for (let key of req_updates) {
            user[key] = req.body[key];
        }
        const result = await user.save();
        res.status(201).send({
            status: 201,
            message: "User successfully updated",
            data: result,
        });
    } catch (err) {
        res.status(400).send({ status: 400, message: err.message });
    }
});

router.delete("/api/v1/user/delete", auth, async (req, res) => {
    try {
        const user = req.user;
        const deletedUser = await user.deleteOne();
        res.status(202).send({
            status: 202,
            message: "User delete successfully",
            data: deletedUser,
        });
    } catch (err) {
        res.status(204).send({ status: 204, message: err.message });
    }
});

module.exports = router;
