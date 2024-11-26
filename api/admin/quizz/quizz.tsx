import axios from "@/lib/axios";
import { getAuthData } from "@/lib/features/auth/session";
import { Options, Quizz } from "@/types/admin";
import useSWR from "swr";

export const getQuizzs = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/quizz";

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
    data: data ? (data.data as Quizz[]) : [],
    mutate,
  };
};

export const getQuizzSelector = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/quizz_selector";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const quizz = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, quizz);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Options[]) : [],
  };
};
