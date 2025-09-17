import { create } from "zustand";

interface AuthState {
	user: { email: string } | null;
	login: (email: string) => void;
	logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
	user: JSON.parse(localStorage.getItem("user") || "null"),
	login: (email) => {
		set({ user: { email } });
		localStorage.setItem("user", JSON.stringify({ email }));
	},
	logout: () => {
		set({ user: null });
		localStorage.removeItem("user");
	},
}));
