"use client";

import { DynamicForm } from "@/shared/components";
import { signInFieldConfig, signInFormSchema, useSignIn } from "./lib";

export default function SignInPage() {
	const { onSubmit, onSuccess } = useSignIn();

	return (
		<DynamicForm
			schema={signInFormSchema}
			onSuccess={onSuccess}
			fields={signInFieldConfig}
			onSubmit={onSubmit}
			submitText="Sign In"
			title="Sign In"
			description="Please enter your credentials to sign in."
		/>
	);
}
