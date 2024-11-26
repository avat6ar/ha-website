import axios from "@/lib/axios";
import useSWR from "swr";
import { getAuthData } from "@/lib/features/auth/session";
import type { UserDetails, Users } from "@/types/admin";

export const getUsers = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/users";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const users = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, users);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Users[]) : [],
  };
};

export const changeStatus = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/admin/change_status", data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changeStatusCourse = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      "/admin/status_user_course",
      data,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changeRole = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/admin/change_role", data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const geUserDetails = (id: string) => {
  const token = getAuthData()?.token;
  const url: string = `/admin/users/${id}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const user = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, user);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as UserDetails) : undefined,
  };
};
