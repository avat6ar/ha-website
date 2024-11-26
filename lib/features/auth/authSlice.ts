import { clearAuthData, getAuthData, setAuthData } from "./session";
import type { AuthDataUser, AuthState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  authData: {
    user: getAuthData()?.data,
    token: getAuthData()?.token,
  },
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{ token: string; user: AuthDataUser }>
    ) => {
      const { token, user } = action.payload;
      setAuthData(token, user);
      state.authData = { user, token };
    },
    clearAuth: (state) => {
      clearAuthData();
      state.authData = {
        user: undefined,
        token: undefined,
      };
    },
  },
});

export const { clearAuth, setAuth } = auth.actions;
export default auth.reducer;
