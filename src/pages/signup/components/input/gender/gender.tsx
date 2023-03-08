import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./gender.module.scss";

type Props = {
	register: UseFormRegisterReturn;
	title: string;
	isValid: boolean;
};

export const GenderInput: FC<Props> = ({ title, register, isValid }) => {
	return (
		<div className={styles["input-container"]}>
			<label htmlFor={register.name}>{title}</label>
			<div className={styles["radio-wrapper"]}>
				<div className={styles["radio-container"]}>
					<input
						{...register}
						className={styles["radio"]}
						type="radio"
						value="male"
					/>
					<span>Male</span>
				</div>
				<div className={styles["radio-container"]}>
					<input
						{...register}
						className={styles["radio"]}
						type="radio"
						value="female"
					/>
					<span>Female</span>
				</div>
			</div>
		</div>
	);
};
