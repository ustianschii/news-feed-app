import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

import { loginSchema, registerSchema } from "../../utils/schemas";
import FormField from "../shared/FormField";
import Button from "../shared/Button";

type AuthMode = "login" | "register";
type LoginFormData = z.infer<typeof loginSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;

interface AuthFormProps {
	mode: AuthMode;
	onSubmit: (data: LoginFormData | RegisterFormData) => void;
}

export default function AuthForm({ mode, onSubmit }: AuthFormProps) {
	const isLogin = mode === "login";
	const schema = isLogin ? loginSchema : registerSchema;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData | RegisterFormData>({
		resolver: zodResolver(schema),
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
			{!isLogin && (
				<FormField
					label="Username"
					registration={register("username")}
					error={"username" in errors ? errors.username : undefined}
				/>
			)}

			<FormField
				label="Email"
				type="email"
				registration={register("email")}
				error={"email" in errors ? errors.email : undefined}
			/>

			<FormField
				label="Password"
				type="password"
				registration={register("password")}
				error={"password" in errors ? errors.password : undefined}
			/>

			{!isLogin && (
				<FormField
					label="Confirm Password"
					type="password"
					registration={register("confirmPassword")}
					error={
						"confirmPassword" in errors ? errors.confirmPassword : undefined
					}
				/>
			)}

			<Button type="submit" fullWidth>
				{isLogin ? "Login" : "Register"}
			</Button>
		</form>
	);
}
