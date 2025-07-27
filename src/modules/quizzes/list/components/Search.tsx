"use client";

import { useState } from "react";
import { Input } from "@/shared/ui";

export const Search = () => {
	const [query, setQuery] = useState("");

	return (
		<div>
			Search: {query}
			<Input
				type="search"
				placeholder="Search quizzes..."
				value={query}
				onChange={(e) => {
					setQuery(e.target.value);
				}}
			/>
		</div>
	);
};
