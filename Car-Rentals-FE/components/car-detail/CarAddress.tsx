import { Car } from "@/types";
import { ChevronRight, Map, MapPin } from "lucide-react";
import React from "react";

type Props = {
  data: Car | undefined;
  isLoading: boolean;
  isError: boolean;
};
export default function CarAddress({ data, isLoading, isError }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Address</h1>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <MapPin />
          <span>
            {data?.address.ward}, {data?.address.city}
          </span>
        </div>
        <div className="flex gap-2">
          <Map />
          <span>View map</span>
          <ChevronRight />
        </div>
      </div>
      <p className="text-sm text-gray-400">
        Specific address will be displayed after deposit
      </p>
    </div>
  );
}
