import axios from "@/lib/axios";
import { getAuthData } from "@/lib/features/auth/session";
import { Book, BookDetails } from "@/types/admin";
import useSWR from "swr";

export const getBook = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/book_online_course";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const courses = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error, mutate } = useSWR(url, courses);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Book[]) : [],
    mutate,
  };
};

export const getBookDetails = (id: string | string[]) => {
  const token = getAuthData()?.token;
  const url: string = `/admin/book_online_course/${id}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const contacts = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error, mutate } = useSWR(url, contacts);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as BookDetails) : undefined,
    mutate,
  };
};

export const deleteBook = async (id: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.delete(
      `/admin/book_online_course/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
