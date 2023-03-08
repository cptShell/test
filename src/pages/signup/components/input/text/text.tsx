import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";
import styles from "./text.module.scss";

type Props = {
	register: UseFormRegisterReturn;
	title: string;
	isValid: boolean;
};

export const TextInput: FC<Props> = ({ title, register, isValid }) => {
	return (
		<div
			className={clsx(styles["input-container"], {
				[styles["invalid"]]: isValid,
			})}
		>
			<label htmlFor={register.name}>{title}</label>
			<input type="text" {...register} />
			{isValid && <span className={styles["error-message"]}>error</span>}
		</div>
	);
};
