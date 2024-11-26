import axios from "@/lib/axios";
import { Blog, BlogResponse } from "@/types";
import { AxiosRequestConfig } from "axios";
import useSWR from "swr";

export const getBlogs = () => {
  const url: string = "/blogs";

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
    data: data ? (data.data as Blog[]) : [],
  };
};

export const getBlogDetails = (link: string | string[]) => {
  const url: string = "/blog";

  const config: AxiosRequestConfig = {
    headers: {
      Link: link,
    },
  };

  const blog = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, blog);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as BlogResponse) : null,
  };
};
