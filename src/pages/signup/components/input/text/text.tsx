import { FC } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { SignUpDTO } from "~/common/types/types";
import { SignUp } from "~/pages/signup/SignUp";

type Props = {
	register: UseFormRegisterReturn;
	title: string;
};

export const TextInput: FC<Props> = ({ title, register }) => {
	return (
		<div>
			<label htmlFor={register.name}>{title}</label>
			<input type="text" {...register} />
		</div>
	);
};
