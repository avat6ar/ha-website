import { AxiosError } from "axios";

export const handleRequestError = (error: AxiosError | any) => {
  if (error.response.status === 422) {
    return error.response.data;
  } else {
    throw error;
  }
};
