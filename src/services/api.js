import axios from "axios";

const API_BASE_URL = "https://648816ca0e2469c038fceb90.mockapi.io";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
