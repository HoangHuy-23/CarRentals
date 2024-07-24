"use sever";

import { RootState } from "@/redux/store";
import {
  Car,
  DriverLicense,
  DriverLicenseReq,
  User,
  UserAddress,
} from "@/types";
import { formatDateToLocalDate } from "@/utils";
import { useSelector } from "react-redux";

const API_BASE_URL = "http://localhost:2003";

export const updateUser = async (req: User): Promise<User> => {
  const jwt = sessionStorage.getItem("jwt");
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

export const addNewAddress = async (req: UserAddress): Promise<User> => {
  const jwt = sessionStorage.getItem("jwt");
  const response = await fetch(`${API_BASE_URL}/api/users/add-address`, {
    method: "POST",
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

export const uploadDriverLicense = async (
  req: DriverLicenseReq
): Promise<DriverLicense> => {
  const jwt = sessionStorage.getItem("jwt");
  const formData = new FormData();
  formData.append("code", req.code);
  formData.append("fullName", req.fullName);
  formData.append("dob", formatDateToLocalDate(req.dob));
  formData.append("status", "PENDING");
  //formData.append("image", req.image);
  if (req.image) {
    formData.append("image", req.image);
  }
  const response = await fetch(`${API_BASE_URL}/api/users/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Failed to update user");
  }
  return response.json();
};

export const updateAddress = async (req: UserAddress): Promise<UserAddress> => {
  const jwt = sessionStorage.getItem("jwt");
  const response = await fetch(
    `${API_BASE_URL}/api/users/update-address?idAddress=${req.id}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to update user");
  }
  return response.json();
};

export const getMyFavouriteCar = async (): Promise<Car[]> => {
  //const jwt = useSelector((state: RootState) => state.auth.token);
  const jwt = sessionStorage.getItem("jwt");
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
  const jwt = sessionStorage.getItem("jwt");
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
