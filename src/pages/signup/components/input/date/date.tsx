import clsx from "clsx";
import { FC, useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import arrowDrop from "~/assets/img/arrow-drop.svg";
import styles from "./date.module.scss";

type Props = {
	register: UseFormRegisterReturn;
	title: string;
	isValid: boolean;
};

export const DateInput: FC<Props> = ({ title, register, isValid }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleShowDatePicker = () => {
		inputRef.current?.showPicker();
	};

	return (
		<div className={styles["date-wrapper"]}>
			<label htmlFor={register.name}>{title}</label>
			<div className={styles["date-container"]}>
				<div
					onClick={handleShowDatePicker}
					className={clsx(styles["placeholder"], styles["day"])}
				>
					<span>21</span>
					<img src={arrowDrop} />
				</div>
				<div
					onClick={handleShowDatePicker}
					className={clsx(styles["placeholder"], styles["month"])}
				>
					<span>December</span>
					<img src={arrowDrop} />
				</div>
				<div
					onClick={handleShowDatePicker}
					className={clsx(styles["placeholder"], styles["year"])}
				>
					<span>1995</span>
					<img src={arrowDrop} />
				</div>
			</div>
			<input ref={inputRef} type="date" />
		</div>
	);
};
