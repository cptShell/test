import { Gender } from "../enums/enums";

export type SignUpDTO = {
	firstName: string;
	lastName: string;
	nationality: string;
	email: string;
	date: string;
	gender: Gender;
	password: string;
	confirmPassword: string;
};
