import useSWR from "swr";
import authApi from '@/api/auth/authApi';

export default function useUser() {
  const isServer = typeof window === 'undefined';
  let token = undefined
  if(isServer){
    // do your server stuff here
  } else {
    token = window.localStorage.jwt
  }
  const { data, mutate, isLoading, error } = useSWR('getMe', async () => await authApi.getMe(token))

  const loggedOut = !data && !isLoading

  return {
    loggedOut,
    user: data,
    mutate,
    isLoading
  };
}
