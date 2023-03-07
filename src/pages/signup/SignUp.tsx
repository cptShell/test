import { FC } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { SignUpDTO } from "~/common/types/signup";
import { signUpUser } from "~/validation-schemas/validation-schema";
import { TextInput } from "./components/components";
import styles from "./signup.module.scss";

export const SignUp: FC<{}> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
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
			<div className={styles["signup-container"]}>
				<div className={styles["heading-container"]}>
					<h2>New user?</h2>
					<p>Use the form below to create your account.</p>
				</div>
				<form
					className={styles["form-grid"]}
					onSubmit={handleSubmit(handleSignUp)}
				>
					<TextInput title="First Name" register={register("firstName")} />
					<TextInput title="Last Name" register={register("lastName")} />
					<TextInput title="E-mail" register={register("email")} />
					<TextInput title="Password" register={register("password")} />
					<TextInput
						title="Confirm Password"
						register={register("confirmPassword")}
					/>
					<button>Submit</button>
				</form>
			</div>
		</div>
	);
};
