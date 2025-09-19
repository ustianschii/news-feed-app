import type { z } from "zod";
import type { loginSchema, registerSchema } from "../../utils/schemas";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type AuthMode = "login" | "register";
type LoginFormData = z.infer<typeof loginSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;

interface AuthFormProps {
	mode: AuthMode;
	onSubmit: (data: LoginFormData | RegisterFormData) => void;
}

export default function AuthForm({ mode, onSubmit }: AuthFormProps) {
	if (mode === "login") {
		return <LoginForm onSubmit={onSubmit as (data: LoginFormData) => void} />;
	}

	return (
		<RegisterForm onSubmit={onSubmit as (data: RegisterFormData) => void} />
	);
}
