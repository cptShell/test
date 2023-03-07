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
	nationality: Joi.string()
		.pattern(/^[a-zA-Z]+$/)
		.required(),
	email: Joi.string().email().required(),
	date: Joi.date(),
	gender: Joi.string().required(),
	password: Joi.string().alphanum().required(),
	confirmPassword: Joi.string().alphanum().required(),
});

export { signUpUser };
