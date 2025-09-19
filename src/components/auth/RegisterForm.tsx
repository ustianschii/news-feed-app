import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

import { registerSchema } from "../../utils/schemas";
import FormField from "../shared/FormField";
import Button from "../shared/Button";

type RegisterFormData = z.infer<typeof registerSchema>;

interface RegisterFormProps {
	onSubmit: (data: RegisterFormData) => void;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>({
		resolver: zodResolver(registerSchema),
	});

	const fields = [
		{ name: "username", label: "Username", type: "text" },
		{ name: "email", label: "Email", type: "email" },
		{ name: "password", label: "Password", type: "password" },
		{ name: "confirmPassword", label: "Confirm Password", type: "password" },
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
				Register
			</Button>
		</form>
	);
}
