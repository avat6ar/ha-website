import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";
import { getAuthData } from "@/lib/features/auth/session";
import { Lesson } from "@/types/admin";
import useSWR from "swr";

export const getLessons = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/lessons";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const lessons = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error, mutate } = useSWR(url, lessons);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Lesson[]) : [],
    mutate,
  };
};

export const updateLesson = async (data: FormData, id?: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/update_lesson/${id}`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const deleteLesson = async (id: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/delete_lesson/${id}`,
      null,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addNewLesson = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/admin/lessons", data, config);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};
