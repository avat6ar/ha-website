import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";
import { getAuthData } from "@/lib/features/auth/session";
import { BlogDetails } from "@/types";
import { Blog } from "@/types/admin";
import useSWR from "swr";

export const getBlogs = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/blogs";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const blogs = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, blogs);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Blog[]) : [],
  };
};

export const addBlog = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/admin/blogs", data, config);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const getBlogDetails = (id: string | string[]) => {
  const token = getAuthData()?.token;
  const url: string = `/admin/blogs/${id}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const blog = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, blog);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as BlogDetails) : undefined,
  };
};

export const updateBlog = async (data: FormData, id: string | number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(`/admin/update_blog/${id}`, data, config);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const deleteBlog = async (id: number | string) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(`/admin/delete_blog/${id}`, null, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
