import { FC } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";
import styles from "./text.module.scss";

type Props = {
	register: UseFormRegisterReturn;
	title: string;
	error: FieldError | undefined;
};

export const TextInput: FC<Props> = ({ title, register, error }) => {
	return (
		<div
			className={clsx(styles["input-container"], {
				[styles["invalid"]]: error,
			})}
		>
			<label htmlFor={register.name}>{title}</label>
			<input type="text" {...register} />
			{error && (
				<span className={styles["error-message"]}>{error.message}</span>
			)}
		</div>
	);
};
