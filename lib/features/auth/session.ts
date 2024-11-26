import type { AuthDataUser } from "@/types";
import Cookies from "js-cookie";

// Set authentication data in cookies
export const setAuthData = (token: string, data: AuthDataUser) => {
  Cookies.set("token", token, { expires: 7 });
  Cookies.set("user", JSON.stringify(data), { expires: 7 });
};

// Get authentication data from cookies
export const getAuthData = (): { token: string; data: AuthDataUser } | null => {
  const storedToken = Cookies.get("token");
  const storedUserData = Cookies.get("user");

  if (storedToken && storedUserData) {
    const token = storedToken;
    const data = JSON.parse(storedUserData);
    return { token, data };
  }

  return null;
};

// Clear authentication data from cookies
export const clearAuthData = () => {
  Cookies.remove("token");
  Cookies.remove("user");
};

// Set authenticated email in cookies
export const setAuthEmail = (email: string) => {
  Cookies.set("email", email, { expires: 1 / 4 });
};

// Get authenticated email from cookies
export const getAuthEmail = (): string | null => {
  const storedEmail = Cookies.get("email");

  if (storedEmail) {
    return storedEmail;
  }

  return null;
};

// Clear authenticated email from cookies
export const clearAuthEmail = () => {
  Cookies.remove("email");
};
