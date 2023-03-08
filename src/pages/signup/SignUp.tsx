import { FC, useRef, useState } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { SignUpDTO } from "~/common/types/signup";
import { signUpUser } from "~/validation-schemas/validation-schema";
import { TextInput } from "./components/components";
import { DateInput, GenderInput, SelectInput } from "./components/input/input";
import { Gender } from "~/common/enums/enums";
import styles from "./signup.module.scss";
import dayjs from "dayjs";
import clsx from "clsx";

export const SignUp: FC<{}> = () => {
	const [shake, setShake] = useState(false);
	const { register, handleSubmit, formState, getValues, setValue, reset } =
		useForm<SignUpDTO>({
			resolver: joiResolver(signUpUser),
			defaultValues: {
				date: dayjs().format("YYYY-MM-DD"),
			},
		});
	const { errors } = formState;

	const handleSignUp = (payload: SignUpDTO) => {
		console.log(payload, "SUCCESS!!!");
		reset();
	};
	const handleSubmitError = () => {
		setShake(true);
		setTimeout(() => setShake(false), 250);
	};

	return (
		<div className={styles["signup-wrapper"]}>
			<div className={styles["aside-title"]}>
				<h1>Sign Up</h1>
			</div>
			<form
				onSubmit={handleSubmit(handleSignUp, handleSubmitError)}
				className={styles["signup-container"]}
			>
				<div className={styles["heading-container"]}>
					<h2>New user?</h2>
					<p>Use the form below to create your account.</p>
				</div>
				<div className={styles["form-grid"]}>
					<TextInput
						title="First Name"
						register={register("firstName")}
						error={errors.firstName}
					/>
					<TextInput
						title="Last Name"
						register={register("lastName")}
						error={errors.lastName}
					/>
					<SelectInput
						title="Nationality"
						register={register("nationality")}
						error={errors.nationality}
					/>
					<TextInput
						title="E-mail"
						register={register("email")}
						error={errors.email}
					/>
					<DateInput
						title="Date"
						register={register("date", { valueAsDate: true })}
						error={errors.date}
						formattedValue={getValues().date}
						setDate={(date: string): void =>
							setValue("date", date, { shouldValidate: true })
						}
					/>
					<GenderInput
						title="Gender"
						register={register("gender", { value: Gender.MALE })}
						isValid={!!errors.gender}
					/>
					<TextInput
						title="Password"
						register={register("password")}
						error={errors.password}
					/>
					<TextInput
						title="Confirm Password"
						register={register("confirmPassword")}
						error={errors.confirmPassword}
					/>
				</div>
				<div className={styles["bottom-container"]}>
					<p className={styles["redirect-description"]}>
						Have an account? <a href="#">Login</a>
					</p>
					<button
						className={clsx(styles["submit-button"], {
							[styles["shake"]]: shake,
						})}
					>
						Complete Signup
					</button>
				</div>
			</form>
		</div>
	);
};
