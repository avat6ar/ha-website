import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";
import { getAuthData } from "@/lib/features/auth/session";
import { Discount } from "@/types/admin";
import useSWR from "swr";

export const getDiscounts = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/discounts";

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
    data: data ? (data.data as Discount[]) : [],
    mutate,
  };
};

export const addNewDiscount = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/admin/discounts", data, config);
    return response.data;
  } catch (error) {
   return handleRequestError(error);
  }
};

export const updateDiscount = async (data: FormData, id?: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/update_discount/${id}`,
      data,
      config
    );
    return response.data;
  } catch (error) {
   return handleRequestError(error);
  }
};

export const deleteDiscount = async (id: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/delete_discount/${id}`,
      null,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
