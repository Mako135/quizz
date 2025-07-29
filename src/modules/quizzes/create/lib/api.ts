import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/api";
import type { ApiResponse } from "@/lib/types";
import type { TagI } from "./types";

const getTags = async () => {
	return await apiRequest<ApiResponse<TagI>>("get", "/api/quizzes/tags");
};

export const useTags = () => {
	return useQuery({
		queryKey: ["tags"],
		queryFn: getTags,
	});
};
