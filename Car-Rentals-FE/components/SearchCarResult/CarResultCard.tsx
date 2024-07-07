"use client";
import { AspectRatio } from "../ui/aspect-ratio";
import { Heart, Luggage, MapPin, Star } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useState } from "react";
import { Car } from "@/types";
import { useRouter } from "next/navigation";
import { formatPriceToK } from "@/utils";

type Props = {
  car: Car;
  isfavourite: boolean;
  myFavourite: boolean;
};

export default function SearchResultCard({
  car,
  isfavourite,
  myFavourite,
}: Props) {
  const router = useRouter();

  const [favourite, setFavourite] = useState<boolean>(false);

  const handleFavouriteCar = () => {
    if (favourite) setFavourite(false);
    else setFavourite(true);
  };

  const imageUrl =
    car && car.carImages && car.carImages.length > 0
      ? car.carImages[0].urlImage
      : "";
  return (
    <div
      //   href="/#"
      className="grid md:grid-cols-[2fr_3fr_1fr] group border-[1px] rounded-md hover:bg-slate-50 relative"
    >
      <Button
        className="absolute z-10 rounded-full top-2 left-2  p-1 bg-transparent"
        onClick={handleFavouriteCar}
      >
        <Heart
          width={24}
          height={24}
          className={`${(isfavourite || favourite) && "text-red-500"}`}
        />
      </Button>
      <AspectRatio ratio={12 / 6} className="my-2 mx-2">
        <img
          src={imageUrl}
          alt=""
          className="rounded-md w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="flex flex-col items-start justify-evenly mx-2">
        <h3 className="text-2xl font-bold tracking-tight mb-1">
          {car.company} {car.model} {car.yearOfProduction}
        </h3>
        <p className="text-sm text-gray-700 font-semibold flex items-center">
          <MapPin className="float-start" width={16} height={16} />
          {car.address.district}, {car.address.city}
        </p>
        <div id="card-content" className="grid sm:grid-cols-2 gap-2 my-2">
          <div className="bg-blue-200 rounded-full flex items-center justify-center text-sm h-6 p-1">
            {car.transmission}
          </div>
          <span className="bg-blue-200 rounded-full flex items-center justify-center text-sm h-6 p-1">
            Free delivery
          </span>
        </div>
        <Separator />

        {car.numOfTrip === 0 ? (
          <span className="text-sm text-blue-400">Car has not trip</span>
        ) : (
          <div className="w-full flex items-start py-2">
            <span className="text-sm flex justify-center items-center">
              <Star
                className="float-start text-yellow-500"
                width={20}
                height={20}
              />{" "}
            </span>
            <span className="text-sm flex justify-center items-center ml-8">
              <Luggage
                className="float-start text-blue-500"
                width={20}
                height={20}
              />{" "}
              {car.numOfTrip} trips
            </span>
          </div>
        )}
      </div>
      <div className="flex md:flex-col justify-between md:justify-evenly items-center flex-row mx-2 my-2 relative">
        <Separator
          orientation="vertical"
          className="absolute -left-2 hidden md:block"
        />
        <Separator className="md:hidden absolute -top-2" />
        <div className="flex md:flex-col items-center justify-start">
          <span className="text-sm">Price for day: </span>
          <span className="text-lg font-bold text-blue-500">
            {formatPriceToK(car.price)}
          </span>
        </div>
        {myFavourite && (
          <Button className="bg-white text-blue-500 border-blue-500 border hover:bg-blue-50">
            Unlike
          </Button>
        )}
        <Button
          className="bg-blue-500 hover:bg-blue-300"
          onClick={() => {
            router.push(`/car/${car.id}`);
          }}
        >
          Detail
        </Button>
      </div>
    </div>
  );
}
