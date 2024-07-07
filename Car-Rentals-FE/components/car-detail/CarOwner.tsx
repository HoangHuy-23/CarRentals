"use client";
import { useOwner } from "@/app/hooks/useCar";
import { AvatarIcon } from "@radix-ui/react-icons";
import { Dot, Luggage, Star } from "lucide-react";
import React from "react";

type Props = {
  carId: string;
};

export default function CarOwner({ carId }: Props) {
  const { data, isLoading, isError } = useOwner(carId);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Owner</h1>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <AvatarIcon width={50} height={50} />
          <div>
            <h1>{data?.fullName}</h1>
            <div className="flex">
              <span className="text-sm flex justify-center items-center">
                <Star
                  className="float-start text-yellow-500"
                  width={14}
                  height={14}
                />
                {data?.ratingScores}
              </span>
              <Dot />
              <span className="text-sm flex justify-center items-center">
                <Luggage
                  className="float-start text-blue-500"
                  width={14}
                  height={14}
                />{" "}
                {data?.numOfTrip} trips
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-500">Response rate</h1>
            <h1>100%</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-500">Response time</h1>
            <h1>5 minutes</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-500">Agreement rate</h1>
            <h1>100%</h1>
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-600 bg-blue-200 rounded-md p-2">
        5* car owners have quick response times, high approval rates, and
        reasonable prices competitive & service received many good reviews from
        customers.
      </div>
    </div>
  );
}
