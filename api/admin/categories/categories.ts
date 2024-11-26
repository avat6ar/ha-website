import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";
import { getAuthData } from "@/lib/features/auth/session";
import type { Category, CategoryDetails, Options } from "@/types/admin";
import useSWR from "swr";

export const getCategories = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/categories";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const categories = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error, mutate } = useSWR(url, categories);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Category[]) : [],
    mutate,
  };
};

export const getCategoriesSelector = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/categories_selector";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const categories = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, categories);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Options[]) : [],
  };
};

export const updateCategory = async (data: FormData, id: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/update_category/${id}`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const geCategoryDetails = (id: string | string[]) => {
  const token = getAuthData()?.token;
  const url: string = `/admin/categories/${id}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const categories = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, categories);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as CategoryDetails) : undefined,
  };
};

export const deleteCategory = async (id: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/delete_category/${id}`,
      null,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addNewCategory = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/admin/categories", data, config);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};
