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
}

export function getToken() {
  return localStorage.getItem('@token');
}

export function getUser() {
  const user = localStorage.getItem('@user')

  if (user)
    return JSON.parse(user)
}