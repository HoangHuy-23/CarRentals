"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMyCar, getMyFavouriteCar, updateUser } from "../actions/UserAction";
import { useAuthContext } from "../contexts/authContext";

export function useUpdateUser() {
  const { refetch } = useAuthContext();
  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error("Failed to update user:", error);
    },
  });
  return mutation;
}

export function useMyFavouriteCar() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["car"],
    queryFn: getMyFavouriteCar,
  });
  return { data, isLoading, error };
}

export function useMyCar() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["myCar"],
    queryFn: getMyCar,
  });
  return { data, isLoading, error };
}
