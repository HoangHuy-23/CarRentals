"use client";
import { getPayment } from "@/app/actions/PaymentAction";
import { useCarById } from "@/app/hooks/useCar";
import BookingSuccess from "@/components/booking/BookingSuccess";
import ContactInformation from "@/components/booking/ContactInformation";
import Payment from "@/components/booking/Payment";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RootState } from "@/redux/store";
import { PaymentResponse } from "@/types";
import { Calendar, MapPin } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function page({ params }: { params: { carId: string } }) {
  const { data, isLoading, isError } = useCarById(params.carId);
  const router = useRouter();
  const { bookingStep } = useSelector((state: RootState) => state.booking);
  const [isContact, setIsContact] = useState<boolean>(false);
  const [isPayment, setIsPayment] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [totalRent, setTotalRent] = useState<number>(0);

  const updateState = (bookingStep: number | null) => {
    switch (bookingStep) {
      case 2:
        setIsContact(false);
        setIsPayment(true);
        setIsSuccess(false);
        break;
      case 3:
        setIsContact(false);
        setIsPayment(false);
        setIsSuccess(true);
        break;
      default:
        setIsContact(true);
        setIsPayment(false);
        setIsSuccess(false);
    }
  };

  useEffect(() => {
    updateState(bookingStep);
  }, [bookingStep]);

  return (
    <div className="flex flex-col w-full my-6">
      <ContactInformation
        carId={params.carId}
        isContact={isContact}
        setTotalRent={setTotalRent}
      />
      <Payment isPayment={isPayment} amount={totalRent} />
      <BookingSuccess isSuccess={isSuccess} />
    </div>
  );
}
