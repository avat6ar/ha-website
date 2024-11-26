import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";
import { getAuthData } from "@/lib/features/auth/session";
import { ChapterDetails, Chapters, Options } from "@/types/admin";
import useSWR from "swr";

export const getChapters = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/chapters";

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
    data: data ? (data.data as Chapters[]) : [],
    mutate,
  };
};

export const getChapterDetails = (id: string | string[]) => {
  const token = getAuthData()?.token;
  const url: string = `/admin/chapters/${id}`;

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
    data: data ? (data.data as ChapterDetails) : undefined,
    mutate,
  };
};

export const updateChapter = async (data: FormData, id: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/update_chapter/${id}`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const deleteChapter = async (id: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/delete_chapter/${id}`,
      null,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addNewChapter = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/admin/chapters", data, config);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const getChaptersSelector = async (id: number | string) => {
  const token = getAuthData()?.token;
  const url: string = "/admin/chapters_selector/" + id;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(url, config);
    return response.data.data;
  } catch (error) {
    return error;
  }
};
