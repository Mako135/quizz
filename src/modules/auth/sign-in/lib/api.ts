import { apiRequest } from "@/lib/api";
import { setTokens } from "@/lib/refreshToken";
import type { SignInFormI, SignInResponseI } from "./types";

export const SignIn = async (data: SignInFormI) => {
	// Make the API request to sign in
	const { access_token, refresh_token } = await apiRequest<SignInResponseI>(
		"post",
		"/api/auth/sign-in/",
		data,
	);

	// Set the access token in cookies and axios headers
	setTokens(access_token, refresh_token);
};
