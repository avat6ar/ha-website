import { getAuthData } from "@/lib/features/auth/session";
import axios from "@/lib/axios";
import { AxiosError } from "axios";
import useSWR from "swr";
import { ResponseCart } from "@/types";

export const AddToCart = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/addToCart", data, config);
    return response.data;
  } catch (error: AxiosError | any) {
    if (error.response.status === 422) {
      return error.response.data;
    } else {
      throw error;
    }
  }
};

export const getDataCart = () => {
  const token = getAuthData()?.token;
  const url: string = "/userCart";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const carts = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, carts);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as ResponseCart) : null,
  };
};
