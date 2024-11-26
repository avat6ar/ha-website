import axios from "@/lib/axios";
import { AboutInstructor, Offer } from "@/types";
import { NumberLessons } from "@/types/admin";
import useSWR from "swr";

export const getInstructors = () => {
  const url: string = "/about_instructors";

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
    data: data ? (data.data as AboutInstructor[]) : [],
  };
};

export const getOffers = () => {
  const url: string = "/about_offers";

  const offers = async () => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, offers);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Offer) : null,
  };
};

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
