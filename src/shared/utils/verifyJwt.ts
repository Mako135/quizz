"use server";
import { importSPKI, jwtVerify } from "jose";

const PUBLIC_KEY = process.env.PUBLIC_KEY;
if (!PUBLIC_KEY)
	throw new Error("PUBLIC_KEY environment variable is not defined");

export async function verifyJwt(token: string): Promise<{ isValid: boolean }> {
	console.log("Verifying JWT token...");
	if (!PUBLIC_KEY) return { isValid: false };

	if (!token) {
		console.error("No token provided for verification");
		return { isValid: false };
	}
	try {
		// Импортируем публичный ключ
		const publicKey = await importSPKI(PUBLIC_KEY, "RS256");

		// Верифицируем JWT токен
		await jwtVerify(token, publicKey, {
			algorithms: ["RS256"],
		});

		return { isValid: true };
	} catch (err) {
		console.error("JWT verification failed:", err);
		return { isValid: false };
	}
}
