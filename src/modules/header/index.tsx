import Link from "next/link";
import { NavUser } from "@/modules/header/components/nav-user";

export const Header = () => {
	return (
		<div className="flex items-center justify-between py-4">
			<Link href="/" className="text-2xl font-bold">
				Quizz App
			</Link>
			<NavUser />
		</div>
	);
};
