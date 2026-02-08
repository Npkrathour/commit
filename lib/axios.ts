import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

axiosInstance.interceptors.request.use((config) => {
  const auth = localStorage.getItem("auth");

  if (auth) {
    const { accessToken } = JSON.parse(auth);
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export default axiosInstance;
