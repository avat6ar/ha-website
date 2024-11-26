import axios from "@/lib/axios";
import useSWR from "swr";
import { getAuthData } from "@/lib/features/auth/session";
import { IndexData, NumberLessons } from "@/types/admin";
import { handleRequestError } from "@/lib/errorRequest";

export const getDataIndex = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/index";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const index = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, index);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as IndexData) : null,
  };
};

export const getNumber = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/settings";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const numbers = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error, mutate } = useSWR(url, numbers);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as NumberLessons) : null,
    mutate,
  };
};

export const updateNumberSetting = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/admin/settings", data, config);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};
