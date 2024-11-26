import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";
import { getAuthData } from "@/lib/features/auth/session";
import type { Course, CourseDetails, Questions, Videos } from "@/types";
import type { AxiosError, AxiosRequestConfig } from "axios";
import useSWR from "swr";

export const getCourses = () => {
  const url: string = "/courses";

  const courses = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, courses);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Course[]) : [],
  };
};

export const getCourseDetails = (link: string | string[] | undefined) => {
  const url: string = "/course";

  const config: AxiosRequestConfig = {
    headers: {
      Link: link,
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
    data: data ? (data.data as CourseDetails) : null,
  };
};

export const addReview = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/add_review", data, config);
    return response.data;
  } catch (error: AxiosError | any) {
    return handleRequestError(error);
  }
};

export const getVideos = (link: string | string[]) => {
  const token = getAuthData()?.token;
  const url: string = "/profile_course_lessons";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      Link: link,
    },
  };

  const videos = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, videos);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Videos) : undefined,
  };
};

export const getQuestions = (id: string | string[]) => {
  const token = getAuthData()?.token;
  const url: string = "/show_quizz_question/" + id;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
 
  const videos = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, videos);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data.questions as Questions[]) : undefined,
  };
};
