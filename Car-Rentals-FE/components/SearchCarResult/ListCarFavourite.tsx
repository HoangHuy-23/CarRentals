"use client";
import { useMyFavouriteCar } from "@/app/hooks/useUser";
import SearchResultCard from "./SearchResultCard";

export default function ListCarFavourite() {
  const { data, isLoading, error } = useMyFavouriteCar();
  return (
    <div className="flex flex-col gap-6">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data?.map((car) => (
          <SearchResultCard
            car={car}
            isfavourite={true}
            myFavourite={true}
            key={car.id}
          />
        ))
      )}
    </div>
  );
}
