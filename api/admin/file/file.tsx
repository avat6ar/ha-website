import axios from "@/lib/axios";
import { getAuthData } from "@/lib/features/auth/session";
import { File } from "@/types/admin";
import useSWR from "swr";

export const getFiles = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/course_file";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const file = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error, mutate } = useSWR(url, file);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as File[]) : [],
    mutate,
  };
};
