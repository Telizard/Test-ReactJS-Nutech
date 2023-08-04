import { checkToken } from "../utils/SessionsLookup";
import api from "./api";
import { toastError, toastSuccess } from "../utils/ToastMessage";

export const products = {
  list: async () => {
    try {
      checkToken();

      const response = await api.get("/product");
      return response.data;
    } catch (error) {
      toastError("Failed to get data");

      throw new Error("Data tidak ada");
    }
  },
  add: async (products) => {
    try {
      checkToken();

      const response = await api.post("/product", products);

      toastSuccess("New data added successfully");
      return response.data;
    } catch (error) {
      toastError("Failed to add new data");

      throw new Error("Ada kesalahan saat menambah produk");
    }
  },
  update: async (id, products) => {
    try {
      checkToken();

      const response = await api.put("/product/" + id, products);

      toastSuccess("Data updated successfully");
      return response.data;
    } catch (error) {
      toastError("Failed to update data");

      throw new Error("Ada kesalahan saat updated produk");
    }
  },
  delete: async (id) => {
    try {
      checkToken();

      const response = await api.delete("/product/" + id);

      toastSuccess("Data deleted successfully");
      return response.data;
    } catch (error) {
      toastError("Failed to delete data");

      throw new Error("Ada kesalahan saat menghapus produk");
    }
  },
};
