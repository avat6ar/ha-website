"use client";
import { getAuthData } from "@/lib/features/auth/session";
import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";
import useSWR from "swr";
import { CourseCardSwiperProps, ResponseCart } from "@/types";

export const changeProfile = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/update_profile", data, config);

    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

// Function to change user password
export const changePassword = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/change_password", data, config);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

// Function to logout user
export const logout = async () => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    await axios.post("/auth/logout", null, config);
    return 200;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const getCourses = () => {
  const token = getAuthData()?.token;
  const url: string = "/profile";

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
    data: data ? (data.data as CourseCardSwiperProps[]) : [],
  };
};

export const getCart = () => {
  const token = getAuthData()?.token;
  const url: string = "/userCart";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const cart = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error, mutate } = useSWR(url, cart);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as ResponseCart) : null,
    mutate,
  };
};

export const checkout = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/checkout", data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const removeFromCart = async (data: FormData) => {
  const token = getAuthData()?.token;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post("/cart_remove", data, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
