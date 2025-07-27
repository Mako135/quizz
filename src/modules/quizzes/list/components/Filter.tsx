import { FilterTag } from "./FilterTag";
import { Search } from "./Search";

export const Filter = () => {
	return (
		<div>
			<h2 className="text-lg font-semibold mb-4">Filter Quizzes</h2>
			<Search />
			<FilterTag />
		</div>
	);
};
