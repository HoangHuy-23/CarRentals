"use sever";

import { Car, User } from "@/types";

const API_BASE_URL = "http://localhost:2003";

export const updateUser = async (req: User): Promise<User> => {
  const jwt = localStorage.getItem("jwt");
  const response = await fetch(`${API_BASE_URL}/api/users/update-my-account`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });

  if (!response.ok) {
    throw new Error("Failed to update user");
  }
  return response.json();
};

export const getMyFavouriteCar = async (): Promise<Car[]> => {
  const jwt = localStorage.getItem("jwt");
  const response = await fetch(`${API_BASE_URL}/api/users/my-favourite-car`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch list favourite car");
  }
  return response.json();
};

export const getMyCar = async (): Promise<Car[]> => {
  const jwt = localStorage.getItem("jwt");
  const response = await fetch(`${API_BASE_URL}/api/users/my-car`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch list my car");
  }
  return response.json();
};
