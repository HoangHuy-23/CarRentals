import { Car } from "@/types";
import { Dot, Heart, Luggage, Share, Star } from "lucide-react";
import React from "react";

type Props = {
  data: Car | undefined;
  isLoading: boolean;
  isError: boolean;
};

export default function CarInfo({ data, isLoading, isError }: Props) {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold font-sans">
          {data?.company} {data?.model} {data?.yearOfProduction}
        </h1>
        <div className="flex gap-1">
          <div className="border rounded-full px-2 py-2 flex items-center justify-center">
            <Share />
          </div>
          <div className="border rounded-full px-2 py-2 flex items-center justify-center">
            <Heart />
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <span className="text-sm flex justify-center items-center">
          <Star
            className="float-start text-yellow-500"
            width={20}
            height={20}
          />
          5.0
        </span>
        <Dot />
        <span className="text-sm flex justify-center items-center">
          <Luggage
            className="float-start text-blue-500"
            width={20}
            height={20}
          />{" "}
          {data?.numOfTrip} trips
        </span>
        <Dot />
        <span>
          {data?.address.ward}, {data?.address.city}
        </span>
      </div>
      <div id="card-content" className="flex gap-2 my-2">
        <div className="bg-blue-200 rounded-full flex items-center justify-center text-sm h-6 p-1">
          Automatic
        </div>
        <span className="bg-blue-200 rounded-full flex items-center justify-center text-sm h-6 p-1">
          Free delivery
        </span>
      </div>
    </div>
  );
}
