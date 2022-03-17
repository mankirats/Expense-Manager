const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Expense = require("../models/expense");
require("../db/mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: { type: String, index: true, unique: true, required: true },
        password: {
            type: String,
            required: true,
        },
        tokens: [
            {
                token: {
                    type: String,
                    required: true,
                },
            },
            (validate = function (val) {
                return val.length > 1;
            }),
        ],
    },
    { timestamps: true }
);

userSchema.statics.findByCredentials = async (userEmail, userPassword) => {
    const user = await User.findOne({
        email: userEmail,
    });
    if (!user) {
        throw new Error("Credentials provided are incorrect. Please try again");
    }

    const validPassword = await bcrypt.compare(userPassword, user.password);
    if (!validPassword) {
        throw new Error(
            "Credentials provided are incorrect. Please try again11"
        );
    }
    return user;
};

userSchema.virtual("allExpense", {
    ref: "expense",
    localField: "_id",
    foreignField: "expensedBy",
});

userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.tokens;
    delete userObject.password;
    return userObject;
};

userSchema.methods.generateAuthToken = function () {
    const user = this;
    try {
        const token = jwt.sign(
            { id: user._id.toString() },
            process.env.JWT_SECRET
        );
        user.tokens = user.tokens.concat({ token });
        user.save();
        return token;
    } catch (err) {
        res.send(err.message);
    }
};

userSchema.methods.verifyAuthToken = function (reqToken) {
    const token = jwt.verify(reqToken, process.env.JWT_SECRET);
    return token;
};

userSchema.pre("deleteOne", { document: true }, async function (next) {
    try {
        const user = this;
        console.log(user._id);
        const deleteAllTasks = await Expense.deleteMany({
            expensedBy: user._id,
        });
    } catch (err) {
        throw new Error(err.message);
    }
    next();
});

userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
