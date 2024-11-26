import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";
import { getAuthData } from "@/lib/features/auth/session";
import type { Instructor, InstructorDetails, Options } from "@/types/admin";
import useSWR from "swr";

export const getInstructors = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/instructors";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const instructors = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, instructors);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Instructor[]) : [],
  };
};

export const getInstructorsSelector = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/instructors_selector";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const instructors = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, instructors);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Options[]) : [],
  };
};

export const updateInstructor = async (data: FormData, id: number | string) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/update_instructor/${id}`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const getInstructorDetails = (id: string | string[]) => {
  const token = getAuthData()?.token;
  const url: string = `/admin/instructors/${id}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const instructor = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, instructor);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as InstructorDetails) : undefined,
  };
};

export const deleteInstructor = async (id: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/delete_instructor/${id}`,
      null,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addInstructor = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/admin/instructors", data, config);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};
