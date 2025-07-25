"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { type ReactNode, useMemo } from "react";
import {
	type DefaultValues,
	type Path,
	type Resolver,
	type SubmitHandler,
	useForm,
} from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/shared/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

interface FieldConfig {
	label: string;
	placeholder?: string;
	description?: string;
	type?: "text" | "email" | "password" | "number";
}

interface DynamicFormProps<T extends z.ZodRawShape> {
	schema: z.ZodObject<T>;
	fields: Record<keyof T, FieldConfig>;
	onSubmit: (data: z.input<z.ZodObject<T>>) => Promise<void>;
	onSuccess?: () => void;
	defaultValues?: Partial<z.input<z.ZodObject<T>>>;
	submitText?: string;
	className?: string;
	title: string;
	description?: string;
	footer?: ReactNode;
}

export function DynamicForm<T extends z.ZodRawShape>({
	schema,
	fields,
	onSubmit,
	onSuccess,
	defaultValues,
	submitText = "Submit",
	className,
	title,
	description = "Please fill out the form below.",
	footer,
}: DynamicFormProps<T>) {
	type FormData = z.input<z.ZodObject<T>>;

	const methods = useForm<FormData>({
		resolver: zodResolver(schema) as Resolver<FormData>,
		defaultValues: defaultValues as DefaultValues<FormData>,
	});

	const { control, handleSubmit, reset } = methods;

	const { mutateAsync, isPending } = useMutation<void, Error, FormData>({
		mutationFn: async (data) => {
			await onSubmit(data);
		},
		onSuccess: () => {
			toast.success("Form submitted successfully!");
			onSuccess?.();
			reset();
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	const mutationFn: SubmitHandler<FormData> = async (data) => {
		const filteredData = Object.fromEntries(
			Object.entries(data).filter(
				([_, value]) => value !== "" && value !== undefined,
			),
		) as T;
		await mutateAsync(filteredData as FormData);
	};

	const fieldEntries = useMemo(() => Object.entries(fields), [fields]);

	return (
		<Card className="max-w-96 mx-auto py-6 w-full">
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			<CardContent>
				<Form {...methods}>
					<form
						onSubmit={handleSubmit(mutationFn)}
						className={cn("space-y-4", className)}
					>
						{fieldEntries.map(([fieldName, config]) => (
							<FormField
								key={fieldName}
								control={control}
								name={fieldName as Path<FormData>}
								render={({ field }) => (
									<FormItem>
										<FormLabel>{config.label}</FormLabel>
										<FormControl>
											<Input
												type={config.type || "text"}
												placeholder={config.placeholder}
												value={field.value?.toString() ?? ""}
												onChange={field.onChange}
												onBlur={field.onBlur}
												name={field.name}
												ref={field.ref}
											/>
										</FormControl>
										{config.description && (
											<FormDescription>{config.description}</FormDescription>
										)}
										<FormMessage />
									</FormItem>
								)}
							/>
						))}
						<Button type="submit" disabled={isPending} className="w-full">
							{submitText}
						</Button>
					</form>
				</Form>
			</CardContent>
			{footer && <CardFooter>{footer}</CardFooter>}
		</Card>
	);
}
