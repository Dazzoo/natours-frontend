import useSWR from "swr";
import authApi from '@/api/auth/authApi';

export default function useUser() {
  const { data, mutate, isLoading, error } = useSWR('getMe', async () => await authApi.getMe())

  const loggedOut = !data && !isLoading

  return {
    loggedOut,
    user: data,
    mutate,
    isLoading
  };
}
