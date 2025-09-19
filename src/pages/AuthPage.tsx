import { useState } from "react";
import type { z } from "zod";

import { useAuthStore } from "../store/useAuthStore";
import type { loginSchema, registerSchema } from "../utils/schemas";
import AuthForm from "../components/auth/AuthForm";
import Button from "../components/shared/Button";

type AuthMode = "login" | "register";
type LoginFormData = z.infer<typeof loginSchema>;
type RegisterFormData = z.infer<typeof registerSchema>;

export default function AuthPage() {
	const [mode, setMode] = useState<AuthMode>("login");

	const login = useAuthStore((state) => state.login);
	const register = useAuthStore((state) => state.register);

	const isLogin = mode === "login";

	const handleAuthSubmit = (data: LoginFormData | RegisterFormData) => {
		if ("username" in data) {
			register(data.username, data.email, data.password);
		} else {
			login(data.email, data.password);
		}
	};

	return (
		<div
			className="bg-background-gray p-12 rounded-xl max-w-md mx-auto"
			style={{ width: "480px" }}
		>
			<h1 className="text-4xl font-bold mb-8 text-center text-text-inverted">
				{isLogin ? "Login" : "Register"}
			</h1>
			<AuthForm mode={mode} onSubmit={handleAuthSubmit} />
			<p className="mt-6 text-center text-sm text-text-inverted">
				{isLogin ? "No account?" : "Already have an account?"}{" "}
				<Button
					className="ml-2"
					type="button"
					variant="secondary"
					onClick={() => setMode(isLogin ? "register" : "login")}
				>
					{isLogin ? "Register" : "Login"}
				</Button>
			</p>
		</div>
	);
}
