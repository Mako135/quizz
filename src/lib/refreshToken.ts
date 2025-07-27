import axios from "axios";
import Cookies from "js-cookie";
import type { NextRequest } from "next/server";
import { coreClient } from "./api";

export type RefreshTokenI = {
	access_token: string;
};

export const refreshToken = async (): Promise<RefreshTokenI> => {
	try {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}auth/jwt/refresh/`,
			undefined,
			{ withCredentials: true },
		);
		const { access_token } = response.data as RefreshTokenI;
		setTokens(access_token);
		return { access_token };
	} catch (error) {
		Cookies.remove("accessToken", { path: "/" });
		await coreClient.post("auth/logout");
		window.location.href = "/auth/sign-in";
		throw error;
	}
};

export const setTokens = (access_token: string, req?: NextRequest) => {
	// Проверка на валидность токена
	if (!access_token || access_token.trim() === "") {
		return;
	}

	// Установка cookies с флагами безопасности
	Cookies.set("accessToken", access_token, {
		expires: 1 / 24,
		sameSite: "strict",
	});

	coreClient.defaults.headers.common.Authorization = `Bearer ${access_token}`;

	if (req) {
		req.cookies.set("accessToken", access_token);
	}
};
