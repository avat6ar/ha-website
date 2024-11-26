import axios from "@/lib/axios";
import { getAuthData } from "@/lib/features/auth/session";
import { ReviewCourse } from "@/types/admin";
import useSWR from "swr";

export const getReviews = () => {
  const token = getAuthData()?.token;
  const url: string = "/admin/reviews";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const discounts = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error, mutate } = useSWR(url, discounts);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as ReviewCourse[]) : [],
    mutate,
  };
};

export const deleteReview = async (id: number) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(
      `/admin/delete_review/${id}`,
      null,
      config
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
