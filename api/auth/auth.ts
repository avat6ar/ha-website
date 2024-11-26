import axios from "@/lib/axios";
import { handleRequestError } from "@/lib/errorRequest";

export const loginUser = async (data: FormData) => {
  try {
    const response = await axios.post("/auth/login", data);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const registerUser = async (data: FormData) => {
  try {
    const response = await axios.post("/auth/register", data);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const verifyUser = async (data: FormData) => {
  try {
    const response = await axios.post("/auth/test_verficationCode", data);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const resendCodeVerify = async (data: FormData) => {
  try {
    const response = await axios.post("/auth/resend_code", data);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const sendCodeForgetPassword = async (data: FormData) => {
  try {
    const response = await axios.post("/auth/forget_password", data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const verifyCodeForgetPassword = async (data: FormData) => {
  try {
    const response = await axios.post("/auth/test_verificationCode", data);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const newPassword = async (data: FormData) => {
  try {
    const response = await axios.post("/auth/new_password", data);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const loginGoogle = async () => {
  try {
    const response = await axios.get("/auth/login/google");
    return response.data;
  } catch (error) {
    return error;
  }
};
