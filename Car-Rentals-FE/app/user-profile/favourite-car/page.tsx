import ListCarFavourite from "@/components/SearchCarResult/ListCarFavourite";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold">Xe yêu thích của tôi</h1>
      <div>
        <ListCarFavourite />
      </div>
    </div>
  );
}
