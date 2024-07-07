import { Car } from "@/types";
import React from "react";

type Props = {
  data: Car | undefined;
  isLoading: boolean;
  isError: boolean;
};
export default function CarDescription({ data, isLoading, isError }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">Description</h1>
      <div>
        <p>{data?.description}</p>
      </div>
    </div>
  );
}
