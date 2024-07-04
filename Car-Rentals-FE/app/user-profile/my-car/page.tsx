import ListMyCar from "@/components/SearchCarResult/ListMyCar";
import React from "react";

export default function MyCar() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">My car</h1>
      <div>
        <ListMyCar />
      </div>
    </div>
  );
}
