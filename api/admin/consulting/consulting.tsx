import axios from "@/lib/axios";
import { getAuthData } from "@/lib/features/auth/session";
import { Consulting } from "@/types/admin";
import useSWR from "swr";

export const getConsultings = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/Ask-me";

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
    data: data ? (data.data as Consulting[]) : [],
    mutate,
  };
};

export const getConsultingDetails = (id: string | string[]) => {
  const token = getAuthData()?.token;
  const url: string = `/admin/Ask-me/${id}`;

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
    data: data ? (data.data as Consulting) : undefined,
    mutate,
  };
};

export const deleteConsulting = async (id: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(`/admin/Ask-me/${id}`, null, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAllConsulting = async () => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      "/admin/Ask-me-delete-all",
      null,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
