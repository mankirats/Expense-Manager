const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("../db/mongoose");
const auth = async function (req, res, next) {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");

        const decodeToken = await jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({
            id: decodeToken.id,
            'tokens["token"]': token,
        });

        if (!user) {
            throw new Error("Please authenticate");
        }

        req.user = user;
        next();
    } catch (err) {
        res.status(401).send("Please authenticate");
    }
};

module.exports = auth;
