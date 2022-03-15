const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../db/mongoose");

const userSchema = mongoose.Schema(
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
    const user = await user.find({
        email: userEmail,
    });

    if (!user) {
        return "Incorrect credentials";
    }

    const validPassword = bcrypt.compare(user.password, userPassword);

    if (!validPassword) {
        return "Incorrect credentials";
    }

    return user;
};

userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.tokens;
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
        console.log(err.message);
    }
};

userSchema.methods.verifyAuthToken = function () {
    const user = this;
    // try{

    // }
};

userSchema.pre("save", async function (next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
