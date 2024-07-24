"use client";
import { getPayment } from "@/app/actions/PaymentAction";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  isPayment: boolean;
  amount: number;
};

export default function Payment({ isPayment, amount }: Props) {
  const router = useRouter();
  const handleBtnVNPAY = async () => {
    const payment = await getPayment(amount);
    router.push(`${payment.paymentUrl}`);
  };
  return (
    <div className={`${isPayment ? "flex" : "hidden"} flex-col w-full my-6`}>
      <h1 className="text-left w-full text-2xl font-semibold">
        Chọn phương thức thanh toán
      </h1>
      <div className="flex justify-around mt-6">
        <Button className="bg-purple-500 hover:bg-purple-300 w-[240px]">
          Momo
        </Button>
        <Button
          className="bg-blue-500 hover:bg-blue-300 w-[240px]"
          onClick={handleBtnVNPAY}
        >
          VNPay
        </Button>
      </div>
    </div>
  );
}
