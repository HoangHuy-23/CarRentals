"use client";
import { useCarById } from "@/app/hooks/useCar";
import CarImage from "@/components/car-detail/CarImage";
import CarInfo from "@/components/car-detail/CarInfo";
import CarRentalInsurance from "@/components/car-detail/CarRentalInsurance";
import RentBox from "@/components/car-detail/RentBox";
import CarCharacteristics from "@/components/car-detail/CarCharacteristics";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AvatarIcon } from "@radix-ui/react-icons";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Dot,
  Heart,
  Luggage,
  Map,
  MapPin,
  Share,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";
import React from "react";
import CarDescription from "@/components/car-detail/CarDescription";
import CarRentalDocuments from "@/components/car-detail/CarRentalDocuments";
import Collateral from "@/components/car-detail/Collateral";
import CarAddress from "@/components/car-detail/CarAddress";
import CarOwner from "@/components/car-detail/CarOwner";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function page({ params }: { params: { id: string } }) {
  const { data, isLoading, isError } = useCarById(params.id);
  const router = useRouter();

  return (
    <div className="container">
      {/* component-1 */}
      <div className="mt-8">
        <Button
          className="bg-white hover:bg-slate-50 text-blue-500 mb-8"
          onClick={() => {
            router.back();
          }}
        >
          <ChevronLeft /> Trở về
        </Button>
        <CarImage data={data} isLoading={isLoading} isError={isError} />
        <div className="grid lg:grid-cols-[4fr_2fr] grid-cols-1 mb-8 mt-4 gap-4">
          {/* contetn left */}
          <div className="flex flex-col gap-8">
            <CarInfo data={data} isLoading={isLoading} isError={isError} />
            <Separator />
            <CarCharacteristics
              data={data}
              isLoading={isLoading}
              isError={isError}
            />
            <Separator />
            <CarDescription
              data={data}
              isLoading={isLoading}
              isError={isError}
            />
            <Separator />
            <CarRentalDocuments />
            <Separator />
            <Collateral data={data} isLoading={isLoading} isError={isError} />
            <Separator />
            <CarAddress data={data} isLoading={isLoading} isError={isError} />
            <Separator />
          </div>
          {/* content right */}
          <div className="flex flex-col mt-4 gap-8">
            {/* bao hiem */}
            <CarRentalInsurance />
            {/* rent box */}
            <RentBox data={data} isLoading={isLoading} isError={isError} />
          </div>
        </div>
        <div className="grid lg:grid-cols-[4fr_2fr] grid-cols-1 mb-8 mt-4 gap-4">
          <div>
            <CarOwner carId={params.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
