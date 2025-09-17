import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: "primary" | "secondary";
	fullWidth?: boolean;
}

export default function Button({
	children,
	variant = "primary",
	fullWidth = false,
	className = "",
	...props
}: ButtonProps) {
	const baseStyles =
		"py-3 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2";

	const variants = {
		primary:
			"bg-brand-primary text-text-inverted hover:bg-brand-primaryDark focus:ring-brand-primary",
		secondary:
			"bg-brand-secondary text-text-base hover:bg-brand-secondaryDark focus:ring-brand-secondaryDark",
	};

	const width = fullWidth ? "w-full" : "";

	return (
		<button
			className={`${baseStyles} ${variants[variant]} ${width} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}
