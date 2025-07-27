"use client";

import { DynamicForm } from "@/shared/components";
import { SignUpFooter } from "./components/SignUpFooter";
import { signUpFieldConfig, signUpFormSchema, useSignUp } from "./lib";

export default function SignUpPage() {
	const { onSubmit, onSuccess } = useSignUp();
	return (
		<DynamicForm
			schema={signUpFormSchema}
			onSuccess={onSuccess}
			fields={signUpFieldConfig}
			onSubmit={onSubmit}
			submitText="Sign Up"
			title="Sign Up"
			description="Please enter your credentials to sign up."
			footer={<SignUpFooter />}
		/>
	);
}
