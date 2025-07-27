import type { SignUpFormI } from "./types";

export const useSignUp = () => {
	const onSubmit = async (data: SignUpFormI) => {
		// Handle sign up logic here
	};

	const onSuccess = () => {
		// Handle success logic here, e.g., redirecting or showing a success message
	};

	return {
		onSubmit,
		onSuccess,
	};
};
