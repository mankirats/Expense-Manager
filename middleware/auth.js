const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async function (req, res, next) {
    const token = req.header("authorization").replace("Bearer ", "");
    console.log(`auth: ${token}`);
    const verifyToken = await jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
        throw new Error("Please authenticate");
    }
    const decodeToken = await jwt.decode(token, { complete: true });
    const user = await User.findOne({
        id: decodeToken.payload.id,
        "tokens['token']": token,
    });

    console.log(user);
    req.user = user;
    next();
};

module.exports = auth;
