import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/api";
import type { ApiResponse } from "@/lib/types";
import type { QuizDetail, QuizRateI } from "./types";

export const getQuizByID = async (id: string) => {
	return apiRequest<QuizDetail>("get", `/api/quizzes/${id}`);
};

export const useQuizDetail = (id: string) => {
	return useQuery({
		queryKey: ["quizDetail", id],
		queryFn: () => getQuizByID(id),
	});
};

const getQuizResults = async (id: string) => {
	return apiRequest<ApiResponse<QuizRateI>>("get", `/api/quizzes/${id}/result`);
};

export const useQuizResults = (id: string) => {
	return useQuery({
		queryKey: ["quizResults", id],
		queryFn: () => getQuizResults(id),
	});
};

export const rateQuiz = async (quizId: string, data: { rating: number }) => {
	return apiRequest("post", `/api/quizzes/${quizId}/rate`, { body: data });
};
