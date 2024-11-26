import axios from "@/lib/axios";
import { getAuthData } from "@/lib/features/auth/session";
import { Question } from "@/types/admin";
import useSWR from "swr";

export const getQuestions = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/question";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const discounts = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error, mutate } = useSWR(url, discounts);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Question[]) : [],
    mutate,
  };
};
