const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async function (req, res, next) {
    const token = req.header("authorization").replace("Bearer ", "");
    const decodeToken = jwt.decode(token, process.env.JWT_SECRET);
    const user = await User.findOne({
        id: decodeToken,
        "tokens['token']": token,
    });

    req.user = user;
    next();
};

module.exports = auth;
