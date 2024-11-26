import axios from "@/lib/axios";
import { getAuthData } from "@/lib/features/auth/session";
import { Invoice } from "@/types";
import useSWR from "swr";

export const getInvoice = () => {
  const token = getAuthData()?.token;
  const url: string = "/my_invoice";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const invoice = async () => {
    try {
      const response = await axios.get(url, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, error } = useSWR(url, invoice);

  return {
    isLoading: !data && !error,
    isError: error,
    data: data ? (data.data as Invoice) : undefined,
  };
};
