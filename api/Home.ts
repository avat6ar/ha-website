import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";
import { HomeCategories, HomeCourse, HomeReviews } from "@/types";
import { NumberLessons } from "@/types/admin";
import useSWR from "swr";

export const getNumberLessons = () => {
  const url: string = "/settings";

  const numbers = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, numbers);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as NumberLessons) : null,
  };
};

export const subscribe = async (data: FormData) => {
  if (!data) {
    return;
  }

  try {
    const response = await axios.post("/subscribe", data);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const getCourses = () => {
  const url: string = "/home_courses";

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
    data: data ? (data.data as HomeCourse[]) : [],
  };
};

export const getReviews = () => {
  const url: string = "/home_reviews";

  const reviews = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, reviews);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as HomeReviews[]) : null,
  };
};

export const getBlogs = () => {
  const url: string = "/home_blogs";

  const blogs = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, blogs);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? data.data : null,
  };
};

export const getCategories = () => {
  const url: string = "/home_categories";

  const categories = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, categories);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as HomeCategories[]) : [],
  };
};
