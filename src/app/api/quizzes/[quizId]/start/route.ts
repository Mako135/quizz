import axios from "axios";
import { NextResponse } from "next/server";
import type { QuizParams } from "../result/route";

export async function POST(req: Request, { params }: QuizParams) {
	const body = await req.json();
	const { quizId } = await params;

	try {
		const res = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}quizzes/${quizId}/start/`,
			body,
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: req.headers.get("Authorization") || "",
				},
			},
		);

		return NextResponse.json(res.data, { status: res.status });
	} catch (err: unknown) {
		console.error("Error during sign-up:", err);
		const error = err as { message?: string; response?: { status?: number } };
		return NextResponse.json(
			{ error: error.message || "An error occurred" },
			{ status: error.response?.status || 500 },
		);
	}
}
