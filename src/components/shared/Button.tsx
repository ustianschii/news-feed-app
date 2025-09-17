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
		"py-3 rounded font-medium transition-colors focus:outline-none focus:ring-2";

	const variants = {
		primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
		secondary: "bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400",
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
