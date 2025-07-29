import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const { username, password } = await req.json();

	const body = new FormData();
	body.append("username", username);
	body.append("password", password);

	try {
		const res = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}auth/login/`,
			body,
			{
				headers: {
					Authorization: req.headers.get("Authorization") || "",
				},
			},
		);

		return NextResponse.json(res.data, { status: res.status });
	} catch (err: unknown) {
		console.error("Error during sign-in:", err);
		const error = err as { message?: string; response?: { status?: number } };
		return NextResponse.json(
			{ error: error.message || "An error occurred" },
			{ status: error.response?.status || 500 },
		);
	}
}
