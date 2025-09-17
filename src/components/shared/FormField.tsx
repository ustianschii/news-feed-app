import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface FormFieldProps {
	label: string;
	type?: string;
	registration: UseFormRegisterReturn;
	error?: FieldError;
}

export default function FormField({
	label,
	type = "text",
	registration,
	error,
}: FormFieldProps) {
	return (
		<div>
			<label className="block font-medium text-text-inverted">
				{label}
				<input
					type={type}
					{...registration}
					className="w-full px-4 py-2 mt-1 border border-brand-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary"
				/>
			</label>
			{error && <p className="text-danger text-sm mt-1">{error.message}</p>}
		</div>
	);
}
