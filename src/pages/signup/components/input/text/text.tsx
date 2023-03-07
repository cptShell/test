import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./text.module.scss";

type Props = {
	register: UseFormRegisterReturn;
	title: string;
};

export const TextInput: FC<Props> = ({ title, register }) => {
	return (
		<div className={styles["input-container"]}>
			<label htmlFor={register.name}>{title}</label>
			<input type="text" {...register} />
		</div>
	);
};
