import Link from "next/link";
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/ui";
import { Badge } from "@/shared/ui/badge";

export const QuizCard = () => {
	return (
		<Card className="group hover:shadow-xl transition-all p-4 overflow-hidden gap-2">
			<div className="flex flex-wrap gap-2">
				<Badge className="bg-red-100 text-red-500" variant="outline">
					Frontend
				</Badge>
				<Badge className="bg-green-100 text-green-500" variant="outline">
					JavaScript
				</Badge>
				<Badge className="bg-purple-100 text-purple-500" variant="outline">
					React
				</Badge>
			</div>
			<CardHeader className="p-0">
				<CardTitle className="group-hover:text-primary text-xl">
					Quiz Title
				</CardTitle>
				<CardDescription className="text-sm">
					Short description of the quiz.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex items-center justify-between p-0">
				<p className="text-sm text-muted-foreground">
					<time dateTime="2023-10-01">October 1, 2023</time>
				</p>

				<Link href="/1">
					<Button className="bg-transparent text-primary hover:bg-primary hover:text-white">
						Start Quiz
					</Button>
				</Link>
			</CardContent>
		</Card>
	);
};
