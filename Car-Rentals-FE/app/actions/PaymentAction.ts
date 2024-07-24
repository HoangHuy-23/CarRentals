"use server";

import { PaymentResponse } from "@/types";

const API_BASE_URL = "http://localhost:2003";

export const getPayment = async (amount: number): Promise<PaymentResponse> => {
  const response = await fetch(
    `${API_BASE_URL}/payment/vn-pay?amount=${amount}&bankcode=NCB`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to get payment");
  }
  return response.json();
};
