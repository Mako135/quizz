import { z } from "zod";

export const signUpFormSchema = z.object({
	username: z.string().min(6, {
		message: "Username must be at least 6 characters.",
	}),
	firstName: z.string().min(2, {
		message: "First name must be at least 2 characters.",
	}),
	lastName: z.string().min(2, {
		message: "Last name must be at least 2 characters.",
	}),
	password: z.string().min(8).max(100),
});

export type SignUpFormI = z.infer<typeof signUpFormSchema>;
