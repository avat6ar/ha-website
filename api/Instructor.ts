import axios from "@/lib/axios";
import type { AllInstructor, ResponseInstruct } from "@/types";
import type { AxiosRequestConfig } from "axios";
import useSWR from "swr";

export const getInstructors = () => {
  const url: string = "/instructors";

  const instructors = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, instructors);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as AllInstructor[]) : [],
  };
};

export const getInstructorDetails = (link: string | string[]) => {
  const url: string = "/instructor";

  const config: AxiosRequestConfig = {
    headers: {
      Link: link,
    },
  };

  const instructor = async () => {
    try {
      const response = await axios.get("/instructor", config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, instructor);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as ResponseInstruct) : null,
  };
  console.log("🚀 ~ getInstructorDetails ~ data:", data);
};
