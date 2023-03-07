import { FC } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { SignUpDTO } from "~/common/types/signup";
import { signUpUser } from "~/validation-schemas/validation-schema";
import { TextInput } from "./components/components";

export const SignUp: FC<{}> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
	} = useForm<SignUpDTO>({
		resolver: joiResolver(signUpUser),
	});
	const f = register("firstName");

	const handleSignUp = (payload: SignUpDTO) => {
		console.log(payload);
		console.log("SUCCESS!!!");
	};

	console.log(errors);

	return (
		<div>
			<div className="aside-title">
				<h1>Sign Up</h1>
			</div>
			<div className="main-content">
				<h2>New user?</h2>
				<p>Use the form below to create your account.</p>
				<form onSubmit={handleSubmit(handleSignUp)}>
					<TextInput title="First Name" register={register("firstName")} />
					<TextInput title="Last Name" register={register("lastName")} />
					<TextInput title="E-mail" register={register("email")} />
					<TextInput title="Password" register={register("password")} />
					<TextInput
						title="Confirm Password"
						register={register("confirmPassword")}
					/>
					<button onClick={() => handleSubmit(handleSignUp)()}>Submit</button>
				</form>
			</div>
		</div>
	);
};
