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
			<label className="block font-medium">
				{label}
				<input
					type={type}
					{...registration}
					className="w-full px-4 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</label>
			{error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
		</div>
	);
}
