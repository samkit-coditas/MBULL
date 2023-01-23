import axios from "axios";
import { refresh } from "../constants/urls";
const baseURL = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;
const axiosInstance = axios.create({
  baseURL: baseURL,
});
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers = {
    "Content-Type": "application/json",
    authorization: token || "",
    "ngrok-skip-browser-warning": "skip-browser-warning",
  };
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const token = localStorage.getItem("accessToken");
    if (
      error?.response?.status == 401 &&
      token != undefined &&
      token !== null
    ) {
      originalRequest._retry = true;
      const res = await getNewAccesToken();
      localStorage.setItem("accessToken", JSON.stringify(res.data));
      return res;
    } else {
      // window.location.href = "/signIn";
    }
  }
);
export const getNewAccesToken = async () => {
  const string: any = localStorage.getItem("refreshToken");
  const data = {
    refresh_token: JSON.parse(string),
  };
  const res = await axiosInstance.post(refresh, data);
  return res;
};
export default axiosInstance;
