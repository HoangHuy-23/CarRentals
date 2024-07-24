"use client";
import { setBookingStep } from "@/redux/reducer/bookingSlice";
import { RootState } from "@/redux/store";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PaymentCallback() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { selectedCar } = useSelector((state: RootState) => state.booking);
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);

  const carId = sessionStorage.getItem("booking-carId");

  useEffect(() => {
    const vnp_ResponseCode = searchParams.get("vnp_ResponseCode");
    const originalUrlParam = searchParams.get("originalUrl");

    if (originalUrlParam) {
      setOriginalUrl(decodeURIComponent(originalUrlParam));
    }

    if (vnp_ResponseCode) {
      switch (vnp_ResponseCode) {
        case "00":
          setStatus("Success");
          setMessage("Your payment was successful.");
          // if (originalUrl) {
          //   router.push(originalUrl);
          // }
          dispatch(setBookingStep(3));
          router.push(`/booking/${selectedCar?.id}`);
          break;
        case "24":
          setStatus("Cancel");
          setMessage("Your payment was cancelled.");
          // if (originalUrl) {
          //   router.push(originalUrl);
          // }
          router.push(`/booking/${selectedCar?.id}`);
          break;
        default:
          setStatus("Failed");
          setMessage("An error occurred during your payment.");
          break;
      }
    } else {
      setStatus("Error");
      setMessage("An error occurred while processing your payment.");
    }
  }, [searchParams, originalUrl, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Payment Status</h1>
      {status === "Success" ? (
        <p className="text-green-500 text-xl">{message}</p>
      ) : status === "Cancel" ? (
        <p className="text-yellow-500 text-xl">{message}</p>
      ) : (
        <p className="text-red-500 text-xl">{message}</p>
      )}
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => router.push("/")}
      >
        Go to Homepage
      </button>
    </div>
  );
}
