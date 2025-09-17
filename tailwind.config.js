/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: "#2563eb",
					primaryDark: "#1d4ed8",
					primaryLight: "#60a5fa",
					secondary: "#e5e7eb",
					secondaryDark: "#d1d5db",
					secondaryText: "#374151",
					accent: "#10b981",
					danger: "#ef4444",
				},
				background: {
					light: "#ffffff",
					muted: "#f9fafb",
					card: "#f3f4f6",
					gray: "#374151"
				},
				text: {
					base: "#111827",
					muted: "#6b7280",
					inverted: "#ffffff",
				},
			},
			fontFamily: {
				sans: ["Inter", "system-ui", "sans-serif"],
			},
			borderRadius: {
				xl: "0.75rem",
			},
		},
	},
	plugins: [],
};
