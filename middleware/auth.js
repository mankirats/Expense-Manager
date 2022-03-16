const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async function (req, res, next) {
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log(`auth: ${token}`);
    const decodeToken = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(decodeToken);
    console.log(decodeToken.id);
    console.log(token);
    const user = await User.findOne({
        _id: decodeToken.id,
        "tokens['token']": token,
    });

    // console.log(user);
    req.user = user;
    console.log(req.user);
    next();
};

module.exports = auth;
