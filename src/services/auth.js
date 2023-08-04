import { removeDataStorage, setAccessToken, setName } from "../utils/LocalStorage";
import { toastSuccess } from "../utils/ToastMessage";
import api from "./api";

export const auth = {
  user: async () => {
    try {
      const response = await api.get("/login");
      return response.data;
    } catch (error) {
      throw new Error("Oopss, Terjadi kesalahan saat mengambil data user");
    }
  },
  login: async (email, password) => {
    try {
      const checkUser = await auth.user();
      const filteredUser = checkUser.filter((user) => user.email === email && user.password === password);

      if (filteredUser[0]) {
        setName(filteredUser[0].name);
        setAccessToken(filteredUser[0].token);
        return filteredUser[0];
      }

      throw Error;
    } catch (error) {
      throw new Error("Cek lagi ya email dan passwordnya");
    }
  },

  logout: () => {
    toastSuccess("Logout successfully");
    removeDataStorage();
  },
};
