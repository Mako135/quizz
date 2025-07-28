import { type NextRequest, NextResponse } from "next/server";

const createRedirectResponse = (req: NextRequest, path: string) => {
	console.error("Redirecting to:", path);
	return NextResponse.redirect(new URL(path, req.url));
};

const isPublicPath = (pathname: string) => {
	return (
		pathname.startsWith("/auth") ||
		pathname.startsWith("/static") ||
		pathname.startsWith("/api") ||
		pathname === "/favicon.ico"
	);
};

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl;
	console.log("req.cookies", req.cookies);
	const refreshToken = req.cookies.get("refreshToken")?.value;
	const hasAuth = !!refreshToken;

	// let isTokenValid = false;

	// if (hasAuth) {
	// 	try {
	// 		const { isValid } = await verifyJwt(refreshToken);
	// 		console.log("JWT verification result:", isValid);
	// 		isTokenValid = isValid;
	// 	} catch (error) {
	// 		console.error("JWT verification failed:", error);
	// 		isTokenValid = false;
	// 	}
	// }

	if (isPublicPath(pathname)) {
		if (hasAuth) {
			// if (hasAuth && isTokenValid) {
			return createRedirectResponse(req, "/");
		}
		// if (hasAuth && !isTokenValid) {
		// 	const response = NextResponse.next();
		// 	response.cookies.set("refreshToken", "", {
		// 		path: "/",
		// 		expires: new Date(0),
		// 		httpOnly: true,
		// 		secure: true,
		// 		sameSite: "none",
		// 		domain: "localhost",
		// 	});
		// 	return response;
		// }

		return NextResponse.next();
	}

	// Приватные пути
	if (!hasAuth) {
		console.warn("Unauthorized access attempt to:", pathname);
		return createRedirectResponse(req, "/auth/sign-in");
	}

	// if (!isTokenValid) {
	// 	const response = createRedirectResponse(req, "/auth/sign-in");
	// 	response.cookies.set("refreshToken", "", {
	// 		path: "/",
	// 		expires: new Date(0),
	// 		httpOnly: true,
	// 		secure: false,
	// 		sameSite: "none",
	// 	});
	// 	return response;
	// }

	return NextResponse.next();
}
export const config = {
	matcher: ["/((?!_next/static|_next/image|favicon.ico|api/).*)"],
};
