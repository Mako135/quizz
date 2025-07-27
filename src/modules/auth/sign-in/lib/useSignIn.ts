import { toast } from "sonner";
import type { SignInFormI } from "./types";

export const useSignIn = () => {
	const onSubmit = async (data: SignInFormI) => {
		console.log("Form submitted:", data);
	};

	const onSuccess = () => {
		toast.success("Sign in successful!");
	};

	return {
		onSubmit,
		onSuccess,
	};
};
