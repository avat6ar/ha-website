import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";

export const storeContact = async (data: FormData) => {

  try {
    const response = await axios.post("/contact-us", data);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};
