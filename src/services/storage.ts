import { api } from "./api";

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface SignInProps {
  user: User;
  token: string;
}

export function signIn({token, user}: SignInProps) {
  localStorage.setItem('@token', token)
  localStorage.setItem('@user', JSON.stringify(user))

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export const signOut = () => {
  localStorage.removeItem('@token')
  localStorage.removeItem('@user')

  api.defaults.headers.common["Authorization"] = false;
};

export function getToken() {
  return localStorage.getItem('@token');
}

export function getUser() {
  const user = localStorage.getItem('@user')

  if (user)
    return JSON.parse(user)
}