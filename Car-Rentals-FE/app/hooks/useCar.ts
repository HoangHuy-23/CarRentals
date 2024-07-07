"use client";

import { useQuery } from "@tanstack/react-query";
import { getCarById, getOwner } from "../actions/CarAction";

export function useCarById(id: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["myCar"],
    queryFn: () => getCarById(id),
  });
  return { data, isLoading, isError };
}

export function useOwner(id: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["ownerCar"],
    queryFn: () => getOwner(id),
  });
  return { data, isLoading, isError };
}
