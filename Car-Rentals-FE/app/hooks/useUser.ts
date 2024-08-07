"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addNewAddress,
  getMyCar,
  getMyFavouriteCar,
  updateAddress,
  updateUser,
  uploadDriverLicense,
} from "../actions/UserAction";

import { error } from "console";
import useAuth from "./useAuth";
import { useSelector } from "react-redux";

export function useUpdateUser() {
  const { refetch } = useAuth();
  const mutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error("Failed to update user:", error);
    },
  });
  const { mutate, isPending, isError } = mutation;
  return { mutate, isPending, isError };
}

export function useAddNewAddress() {
  const { refetch } = useAuth();
  const mutation = useMutation({
    mutationFn: addNewAddress,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error("Failed to create address:", error);
    },
  });
  const { mutate, isPending, isError } = mutation;
  return { mutate, isPending, isError };
}

export function useUpdateAddress() {
  const { refetch } = useAuth();
  const mutation = useMutation({
    mutationFn: updateAddress,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error("Failed to create address:", error);
    },
  });
  const { mutate, isPending, isError } = mutation;
  return { mutate, isPending, isError };
}

export function useUploadDriverLicense() {
  const { refetch } = useAuth();
  const mutation = useMutation({
    mutationFn: uploadDriverLicense,
    onSuccess: () => {
      refetch();
    },
    onError: (error) => {
      console.error("Failed to upload driver license:", error);
    },
  });
  const { mutate, isPending, isError } = mutation;
  return { mutate, isPending, isError };
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
