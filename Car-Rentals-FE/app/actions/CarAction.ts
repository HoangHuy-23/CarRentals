"use server";
import { SearchState } from "@/components/SearchCarResult/ListCarAndFilter";
import { Car, CarSearchResponse, User } from "@/types";

const API_BASE_URL = "http://localhost:2003";

export const searchCar = async (
  searchState: SearchState
): Promise<CarSearchResponse> => {
  const params = new URLSearchParams();
  params.set("pageNo", searchState.page.toString());
  params.set("city", searchState.city);
  params.set("company", searchState.automaker);
  params.set("fuel", searchState.fuel);
  params.set("transmission", searchState.transmission);
  params.set("price", searchState.price.toString());
  params.set("seat", searchState.seat);
  params.set("sort", searchState.sort);

  console.log(params.toString());

  const response = await fetch(
    `${API_BASE_URL}/api/cars/filter?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("Failed to get car");
  }

  return response.json();
};

export const getCarById = async (id: string): Promise<Car> => {
  const response = await fetch(`${API_BASE_URL}/api/cars/car?carId=${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch car by id");
  }
  return response.json();
};

export const getOwner = async (id: string): Promise<User> => {
  const response = await fetch(
    `${API_BASE_URL}/api/cars/car/owner?carId=${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch car owner by id");
  }
  return response.json();
};
