import clsx from "clsx";
import { FC, useRef } from "react";
import {
	FieldError,
	UseFormRegisterReturn,
	UseFormSetValue,
} from "react-hook-form";
import arrowDrop from "~/assets/img/arrow-drop.svg";
import styles from "./date.module.scss";
import dayjs from "dayjs";
import { SignUpDTO } from "~/common/types/types";

type Props = {
	register: UseFormRegisterReturn;
	title: string;
	error: FieldError | undefined;
	formattedValue: string;
	setDate: (date: string) => void;
};

export const DateInput: FC<Props> = ({
	title,
	register,
	error,
	formattedValue,
	setDate,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const dayJsData = dayjs(formattedValue);
	const { day, month, year } = {
		day: dayJsData.format("D"),
		month: dayJsData.format("MMMM"),
		year: dayJsData.format("YYYY"),
	};

	const handleShowDatePicker = () => {
		inputRef.current?.showPicker();
	};

	const handleChangeDate = (e: React.FormEvent<HTMLInputElement>) => {
		setDate(dayjs(e.currentTarget.value).format("YYYY-MM-DD"));
	};

	return (
		<div className={styles["date-wrapper"]}>
			<label htmlFor={register.name}>{title}</label>
			<div className={styles["date-container"]}>
				<div
					onClick={handleShowDatePicker}
					className={clsx(styles["placeholder"], styles["day"])}
				>
					<span>{day}</span>
					<img src={arrowDrop} />
				</div>
				<div
					onClick={handleShowDatePicker}
					className={clsx(styles["placeholder"], styles["month"])}
				>
					<span>{month}</span>
					<img src={arrowDrop} />
				</div>
				<div
					onClick={handleShowDatePicker}
					className={clsx(styles["placeholder"], styles["year"])}
				>
					<span>{year}</span>
					<img src={arrowDrop} />
				</div>
			</div>
			<input
				{...register}
				onChange={handleChangeDate}
				ref={inputRef}
				type="date"
				max={new Date().toISOString().split("T")[0]}
			/>
			{error && (
				<span className={styles["error-message"]}>{error.message}</span>
			)}
		</div>
	);
};
