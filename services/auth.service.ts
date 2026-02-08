import axiosInstance from "@/lib/axios";

export const getUserProfile = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
};
