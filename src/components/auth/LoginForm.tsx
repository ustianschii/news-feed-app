import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

import { loginSchema } from "../../utils/schemas";
import FormField from "../shared/FormField";
import Button from "../shared/Button";

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginFormProps {
	onSubmit: (data: LoginFormData) => void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	const fields = [
		{ name: "email", label: "Email", type: "email" },
		{ name: "password", label: "Password", type: "password" },
	] as const;

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
			{fields.map((field) => (
				<FormField
					key={field.name}
					label={field.label}
					type={field.type}
					registration={register(field.name)}
					error={errors[field.name]}
				/>
			))}
			<Button type="submit" fullWidth>
				Login
			</Button>
		</form>
	);
}
