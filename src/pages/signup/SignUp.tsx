import { FC } from "react";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { SignUpDTO } from "~/common/types/signup";
import { signUpUser } from "~/validation-schemas/validation-schema";
import { TextInput } from "./components/components";

export const SignUp: FC<{}> = () => {
	const { register, handleSubmit, formState } = useForm<SignUpDTO>({
		resolver: joiResolver(signUpUser),
	});
	const f = register("firstName");

	return (
		<div>
			<div className="aside-title">
				<h1>Sign Up</h1>
			</div>
			<div className="main-content">
				<h2>New user?</h2>
				<p>Use the form below to create your account.</p>
				<form>
					<TextInput title="First Name" register={register("firstName")} />
					<TextInput title="Last Name" register={register("lastName")} />
				</form>
			</div>
		</div>
	);
};
