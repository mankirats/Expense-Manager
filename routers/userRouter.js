const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

router.get("/api/v1/userprofile", auth, (req, res) => {
    const user = req.user;
    res.send(user);
});

router.post("/api/v1/userlogin", async (req, res) => {
    const user = await user.findByCredentials(req.body);
    try {
        if (!user) {
            res.status(400).send({
                status: 400,
                message: "Credentials entered are invalid",
            });
        }

        res.status(200).send({
            status: 400,
            message: "Credentials entered are invalid",
            data: user,
        });
    } catch (err) {
        res.status(400).send({
            status: 400,
            message: message.err,
        });
    }
});

router.post("/api/v1/register", async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        const token1 = result.generateAuthToken();
        res.send({
            status: 200,
            data: result,
            generatedToken: token1,
        });
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;
