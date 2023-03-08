import { FC, useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import clsx from "clsx";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { SignUpDTO } from "~/common/types/signup";
import { signUpUser } from "~/validation-schemas/validation-schema";
import { TextInput } from "./components/components";
import { DateInput, GenderInput, SelectInput } from "./components/input/input";
import { Gender } from "~/common/enums/enums";
import signUpLogo from "~/assets/img/signup-logo.svg";
import styles from "./signup.module.scss";

export const SignUp: FC<{}> = () => {
	const [shake, setShake] = useState(false);
	const [visibilityMap, setVisibilityMap] = useState([
		true,
		...new Array(8).fill(false),
	]);
	const [isOpenSuccessPopup, setOpenSuccessPopup] = useState(false);
	const [submitVisibility, setSubmitVisibility] = useState(true);
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
		setTimeout(() => asyncDisappearing(), 500);
	};
	const handleSubmitError = () => {
		setShake(true);
		setTimeout(() => setShake(false), 250);
	};

	const asyncDisappearing = () => {
		const totalDissappearTime = visibilityMap.length * 200 + 200;
		visibilityMap.map((_, index) => {
			const timer = index * 200 + 200;
			setTimeout(() => {
				const substract = visibilityMap.length - index - 1;
				const nextVisibilityMap = visibilityMap.slice(0, substract);
				setVisibilityMap(nextVisibilityMap);
			}, timer);
		});
		setTimeout(() => setOpenSuccessPopup(true), totalDissappearTime);
		setSubmitVisibility(false);
	};

	useEffect(() => {
		const asyncAppearing = () => {
			visibilityMap.map((_, index) => {
				const timer = index * 200 + 200;
				setTimeout(() => {
					const nextVisibilityMap = new Array(index + 1).fill(true);
					setVisibilityMap(nextVisibilityMap);
				}, timer);
			});
		};
		asyncAppearing();
	}, []);

	console.log(visibilityMap);

	return (
		<div className={styles["signup-wrapper"]}>
			<div className={styles["aside-title"]}>
				<img className={styles["signup-logo"]} src={signUpLogo} />
			</div>
			<form
				onSubmit={handleSubmit(handleSignUp, handleSubmitError)}
				className={styles["signup-container"]}
			>
				<div
					className={clsx(styles["success-popup"], {
						[styles["hidden"]]: !isOpenSuccessPopup,
					})}
				>
					<h2>Thank You!</h2>
					<p>you registered!</p>
				</div>
				<div
					className={clsx(styles["heading-container"], {
						[styles["hidden"]]: !visibilityMap[0],
					})}
				>
					<h2>New user?</h2>
					<p>Use the form below to create your account.</p>
				</div>
				<div className={styles["form-grid"]}>
					<div
						className={clsx({
							[styles["hidden"]]: !visibilityMap[1],
						})}
					>
						<TextInput
							title="First Name"
							register={register("firstName")}
							error={errors.firstName}
						/>
					</div>
					<div
						className={clsx({
							[styles["hidden"]]: !visibilityMap[2],
						})}
					>
						<TextInput
							title="Last Name"
							register={register("lastName")}
							error={errors.lastName}
						/>
					</div>
					<div
						className={clsx({
							[styles["hidden"]]: !visibilityMap[3],
						})}
					>
						<SelectInput
							title="Nationality"
							register={register("nationality")}
							error={errors.nationality}
						/>
					</div>
					<div
						className={clsx({
							[styles["hidden"]]: !visibilityMap[4],
						})}
					>
						<TextInput
							title="E-mail"
							register={register("email")}
							error={errors.email}
						/>
					</div>
					<div
						className={clsx({
							[styles["hidden"]]: !visibilityMap[5],
						})}
					>
						<DateInput
							title="Date"
							register={register("date", { valueAsDate: true })}
							error={errors.date}
							formattedValue={getValues().date}
							setDate={(date: string): void =>
								setValue("date", date, { shouldValidate: true })
							}
						/>
					</div>
					<div
						className={clsx({
							[styles["hidden"]]: !visibilityMap[6],
						})}
					>
						<GenderInput
							title="Gender"
							register={register("gender", { value: Gender.MALE })}
							isValid={!!errors.gender}
						/>
					</div>

					<div
						className={clsx({
							[styles["hidden"]]: !visibilityMap[7],
						})}
					>
						<TextInput
							title="Password"
							register={register("password")}
							error={errors.password}
						/>
					</div>
					<div
						className={clsx({
							[styles["hidden"]]: !visibilityMap[8],
						})}
					>
						<TextInput
							title="Confirm Password"
							register={register("confirmPassword")}
							error={errors.confirmPassword}
						/>
					</div>
				</div>
				<div className={styles["bottom-container"]}>
					<p className={styles["redirect-description"]}>
						Have an account? <a href="#">Login</a>
					</p>
					<button
						className={clsx(styles["submit-button"], {
							[styles["shake"]]: shake,
							[styles["hidden"]]: !submitVisibility,
						})}
					>
						Complete Signup
					</button>
				</div>
			</form>
		</div>
	);
};
