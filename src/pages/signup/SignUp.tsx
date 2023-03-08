import { FC } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { SignUpDTO } from "~/common/types/signup";
import { signUpUser } from "~/validation-schemas/validation-schema";
import { TextInput } from "./components/components";
import styles from "./signup.module.scss";
import { GenderInput, SelectInput } from "./components/input/input";
import { Gender } from "~/common/enums/enums";

export const SignUp: FC<{}> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm<SignUpDTO>({
		resolver: joiResolver(signUpUser),
	});

	const handleSignUp = (payload: SignUpDTO) => {
		console.log(payload, "SUCCESS!!!");
	};

	return (
		<div className={styles["signup-wrapper"]}>
			<div className={styles["aside-title"]}>
				<h1>Sign Up</h1>
			</div>
			<form
				onSubmit={handleSubmit(handleSignUp)}
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
						isValid={!!errors.firstName}
					/>
					<TextInput
						title="Last Name"
						register={register("lastName")}
						isValid={!!errors.lastName}
					/>
					<TextInput
						title="E-mail"
						register={register("email")}
						isValid={!!errors.email}
					/>
					<TextInput
						title="Password"
						register={register("password")}
						isValid={!!errors.password}
					/>
					<TextInput
						title="Confirm Password"
						register={register("confirmPassword")}
						isValid={!!errors.confirmPassword}
					/>
					<GenderInput
						title="Gender"
						register={register("gender", { value: Gender.MALE })}
						isValid={!!errors.gender}
					/>
					<SelectInput
						title="Nationality"
						register={register("nationality")}
						isValid={!!errors.nationality}
					/>
				</div>
				<div className={styles["bottom-container"]}>
					<p className={styles["redirect-description"]}>
						Have an account? <a href="#">Login</a>
					</p>
					<button className={styles["submit-button"]}>Complete Signup</button>
				</div>
			</form>
		</div>
	);
};
