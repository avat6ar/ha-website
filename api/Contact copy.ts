import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";

export const storeConsulting = async (data: FormData) => {

  try {
    const response = await axios.post("/ask-me", data);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};
