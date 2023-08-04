import { auth } from "../services/auth";
import { getAccessToken, removeDataStorage } from "./LocalStorage";

export const checkToken = async () => {
    const user = await auth.user();

    const validateToken = user.filter((user) => user.token === getAccessToken());

    if (getAccessToken() === null || validateToken.length === 0) {
        removeDataStorage();
        return window.location.href = '/login';
    }
}