const express = require("express");
const router = new express.Router();
const User = require("../models/user");

router.get("/api/v1/register", (req, res) => {
    res.send("hello");
});

router.post("/api/v1/register", async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.send(result);
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;
