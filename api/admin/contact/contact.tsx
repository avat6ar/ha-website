import axios from "@/lib/axios";
import { getAuthData } from "@/lib/features/auth/session";
import { Contact } from "@/types/admin";
import useSWR from "swr";

export const getContacts = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/contact-us";

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
    data: data ? (data.data as Contact[]) : [],
    mutate,
  };
};

export const getContactDetails = (id: string | string[]) => {
  const token = getAuthData()?.token;
  const url: string = `/admin/contact-us/${id}`;

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
    data: data ? (data.data as Contact) : undefined,
    mutate,
  };
};

export const deleteContact = async (id: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(`/admin/contact-us/${id}`, null, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAllContact = async () => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      "/admin/contact-us-delete-all",
      null,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
