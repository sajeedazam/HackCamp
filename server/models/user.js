const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joiComplex = require("joi-password-complexity");
const Joi = require("joi");

// ref: https://www.youtube.com/watch?v=HGgyd1bYWsE
const userSchema = new mongoose.Schema({
	userName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWT_TOKEN, {
		expiresIn: "1d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		userName: Joi.string().required().label("Username"),
		email: Joi.string().email().required().label("Email"),
		password: joiComplex().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };