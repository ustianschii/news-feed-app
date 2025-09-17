import { z } from "zod";

export const loginSchema = z.object({
	email: z.email("Invalid email"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export const registerSchema = z
	.object({
		username: z.string().min(3, "Username must be at least 3 characters"),
		email: z.email("Invalid email"),
		password: z.string().min(6, "Password must be at least 6 characters"),
		confirmPassword: z.string().min(6, "Confirm password is required"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});
