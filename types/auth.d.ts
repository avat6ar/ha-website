export interface DataUser {
  user: AuthDataUser;
  token: string;
}

export interface AuthDataUser {
  id: number;
  name: string;
  email: string;
  image: string;
  role: string;
  cartLength: number;
}

export interface AuthState {
  authData: {
    user?: AuthDataUser;
    token?: string;
    cartLength?: number;
  };
}
