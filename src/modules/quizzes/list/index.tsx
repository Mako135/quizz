import { Filter } from "./components/filter/Filter";
import { QuizCard } from "./components/QuizCard";

export const AllQuizzes = () => {
	return (
		<div>
			<Filter />

			<h1 className="text-2xl font-bold">All Quizzes</h1>
			<p className="text-sm text-muted-foreground">
				Explore a variety of quizzes on different topics.
			</p>
			<div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				<QuizCard />
				<QuizCard />
				<QuizCard />
				<QuizCard />
				{/* Add more QuizCard components as needed */}
			</div>
		</div>
	);
};
