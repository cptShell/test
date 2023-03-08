import Joi from "joi";
import { SignUpDTO } from "../common/types/types";

const signUpUser = Joi.object<SignUpDTO>({
	firstName: Joi.string()
		.trim()
		.pattern(/^[a-zA-Z]+$/)
		.required()
		.messages({
			"string.empty": "This field is required",
		}),
	lastName: Joi.string()
		.trim()
		.pattern(/^[a-zA-Z]+$/)
		.required()
		.messages({
			"string.empty": "This field is required",
		}),
	nationality: Joi.string().messages({
		"string.empty": "This field is required",
	}),
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required()
		.messages({
			"string.empty": "This field is required",
			"string.email": "Incorrect email",
		}),
	date: Joi.date().less("now").required().messages({
		"date.base": "This field is required",
		"date.less": "Input previous date",
	}),
	gender: Joi.string().required(),
	password: Joi.string()
		.alphanum()
		.pattern(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,32}/)
		.required()
		.messages({
			"string.empty": "This field is required",
			"string.pattern.base":
				"Password must include numbers, upper and lowercase letters",
		}),
	confirmPassword: Joi.string()
		.pattern(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,32}/)
		.valid(Joi.ref("password"))
		.required()
		.messages({
			"any.only": "Passwords mismatch",
			"string.pattern.base":
				"Password must include numbers, upper and lowercase letters",
		}),
});

export { signUpUser };
