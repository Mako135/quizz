// import { useQuery } from "@tanstack/react-query";
// import { coreClient } from "@/lib/api";
// import type { User } from "./types";

// const getUser = async () => {
// 	const response = await coreClient.get("/auth/me/");
// 	return response.data as User;
// };

export const useUserData = () => {
	// return useQuery({
	// 	queryKey: ["userData"],
	// 	queryFn: getUser,
	// });

	const data = {
		full_name: "John Doe",
		username: "john.doe@example.com",
		avatar: "/avatars/john_doe.jpg",
	};

	return { data };
};
