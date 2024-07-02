"use sever";

import { User } from "@/types";

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
