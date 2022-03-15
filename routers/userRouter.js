const express = require("express");
const router = new express.Router();
const User = require("../models/user");
const auth = require("../middleware/auth");

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

module.exports = router;
