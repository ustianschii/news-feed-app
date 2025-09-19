import { create } from "zustand";

interface AuthState {
	user: { email: string; password?: string } | null;
	login: (email: string, password: string) => void;
	register: (username: string, email: string, password: string) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	user: JSON.parse(localStorage.getItem("user") || "null"),
	login: (email, password) => {
		set({ user: { email, password } });
		localStorage.setItem("user", JSON.stringify({ email }));
	},
	register: (_username, email, _password) => {
		const user = { email };
		set({ user });
		localStorage.setItem("user", JSON.stringify(user));
	},
	logout: () => {
		set({ user: null });
		localStorage.removeItem("user");
	},
}));
