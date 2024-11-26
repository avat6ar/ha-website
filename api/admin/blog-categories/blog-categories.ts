import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";
import { getAuthData } from "@/lib/features/auth/session";
import type {
  BlogCategory,
  BlogCategoryDetails,
  Category,
  Options,
} from "@/types/admin";
import useSWR from "swr";

export const getBlogCategories = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/blogCategories";

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
    data: data ? (data.data as BlogCategory[]) : [],
    mutate,
  };
};

export const getBlogCategoriesSelector = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/blogsCategory_selector";

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

export const updateBlogCategory = async (data: FormData, id: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/update_blogCategory/${id}`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const geBlogCategoryDetails = (id: string | string[]) => {
  const token = getAuthData()?.token;
  const url: string = `/admin/blogCategories/${id}`;

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
    data: data ? (data.data as BlogCategoryDetails) : undefined,
    mutate,
  };
};

export const deleteBlogCategory = async (id: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/delete_blogCategory/${id}`,
      null,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addNewBlogCategory = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/admin/blogCategories", data, config);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};
