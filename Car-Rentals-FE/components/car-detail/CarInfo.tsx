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
          {data?.ratingScores}
        </span>
        <Dot />
        <span className="text-sm flex justify-center items-center">
          <Luggage
            className="float-start text-blue-500"
            width={20}
            height={20}
          />{" "}
          {data?.numOfTrip} chuyến
        </span>
        <Dot />
        <span>
          {data?.address.ward}, {data?.address.city}
        </span>
      </div>
      <div id="card-content" className="flex gap-2 my-2">
        <div className="bg-green-100 rounded-full flex items-center justify-center text-sm h-6 px-2">
          {data?.transmission === "MANUAL" ? "Số sàn" : "Số tự động"}
        </div>
        {data?.deliveryToCusLocation && (
          <span className="bg-blue-100 rounded-full flex items-center justify-center text-sm h-6 px-2">
            Giao xe tận nơi
          </span>
        )}
        {data?.mortgage && (
          <span className="bg-orange-100 rounded-full flex items-center justify-center text-sm h-6 px-2">
            Miễn thế chấp
          </span>
        )}
      </div>
    </div>
  );
}
