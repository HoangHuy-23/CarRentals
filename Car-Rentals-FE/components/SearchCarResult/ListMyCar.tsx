"use client";

import { useMyCar } from "@/app/hooks/useUser";
import SearchResultCard from "./SearchResultCard";

export default function ListMyCar() {
  const { data, isLoading, error } = useMyCar();
  return (
    <div className="flex flex-col gap-6">
      {isLoading && <p>Loading...</p>}
      {data &&
        data?.map((car) => (
          <SearchResultCard
            car={car}
            isfavourite={false}
            myFavourite={false}
            key={car.id}
          />
        ))}
    </div>
  );
}
