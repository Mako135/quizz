import type { ReactNode } from "react";
import { Header } from "@/modules/header";

export default function layout({ children }: { children: ReactNode }) {
	return (
		<main className="max-w-7xl mx-auto space-y-4 px-4 xl:px-0">
			<Header />
			<main>{children}</main>
		</main>
	);
}
