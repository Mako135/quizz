import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import { apiRequest } from "@/lib/api";
import { QuizFormSchema, type QuizFormValues } from "./types";

export const useQuizCreate = () => {
	const methods = useForm<QuizFormValues>({
		resolver: zodResolver(QuizFormSchema),
		defaultValues: {
			name: "",
			description: "",
			tags: "",
			questions: [],
		},
	});

	const {
		register,
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = methods;

	console.log("errors", errors);

	const { fields, append, remove } = useFieldArray({
		control,
		name: "questions",
	});

	const { mutateAsync } = useMutation({
		mutationFn: async (data: QuizFormValues) => {
			return await apiRequest("post", "/quizzes", data, "auth");
		},
		onError: (error) => {
			toast.error(`Error creating quiz: ${error.message}`);
		},
	});

	const onSubmit = async (data: QuizFormValues) => {
		await mutateAsync(data);
		toast.success("Quiz created successfully!");
		methods.reset();
	};

	return {
		methods,
		register,
		control,
		handleSubmit,
		setValue,
		fields,
		append,
		remove,
		onSubmit,
	};
};
