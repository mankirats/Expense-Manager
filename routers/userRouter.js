const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

router.get("/api/v1/userprofile", auth, (req, res) => {
    const user = req.user;
    res.send(user);
});

router.post("/api/v1/register", async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        const token = result.generateAuthToken();
        res.send({
            status: 200,
            data: result,
            generatedToken: token,
        });
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;
