import Joi from "joi";
import { SignUpDTO } from "../common/types/types";

const signUpUser = Joi.object<SignUpDTO>({
	firstName: Joi.string()
		.trim()
		.pattern(/^[a-zA-Z]+$/)
		.required(),
	lastName: Joi.string()
		.trim()
		.pattern(/^[a-zA-Z]+$/)
		.required(),
	nationality: Joi.string().pattern(/^[a-z A-Z]+$/),
	email: Joi.string()
		.email({ tlds: { allow: false } })
		.required(),
	date: Joi.date(),
	gender: Joi.string(),
	password: Joi.string().alphanum().required(),
	confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

export { signUpUser };
