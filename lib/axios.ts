import axios from "axios";
import { getAuthData } from "./features/auth/session";

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACK_END_URL,
  headers: {
    Accept: "application/json",
    Authorization: "Bearer " + getAuthData()?.token,
  },
});
