import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import { TanstackProviders } from "@/lib/tanstackProvider";

const openSans = Open_Sans({
	subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
	title: "Quizz App",
	description:
		"The best quizz app ever created by a human being named Kuanyshbek M.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					crossOrigin="anonymous"
					src="//unpkg.com/react-scan/dist/auto.global.js"
				/>
			</head>
			<body className={`${openSans.className} antialiased`}>
				<Toaster richColors position="top-center" />
				<TanstackProviders>{children}</TanstackProviders>
			</body>
		</html>
	);
}
