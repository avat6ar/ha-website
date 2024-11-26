import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";
import { getAuthData } from "@/lib/features/auth/session";
import type { Course_Details, Courses, Options } from "@/types/admin";
import useSWR from "swr";

export const getCourses = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/courses";

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

  const { data, error } = useSWR(url, courses);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Courses[]) : [],
  };
};

export const getCourseDetails = (id: string | string[]) => {
  const token = getAuthData()?.token;
  const url: string = `/admin/courses/${id}`;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const course = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, course);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Course_Details) : undefined,
  };
};

export const addCourse = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/admin/courses", data, config);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const updateCourse = async (data: FormData, id: string | number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/update_course/${id}`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const getCoursesSelector = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/courses_selector";

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

  const { data, error } = useSWR(url, courses);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Options[]) : [],
  };
};

export const deleteCourse = async (id: number | string) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.post(
      `/admin/delete_course/${id}`,
      null,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
