import { ShieldCheck } from "lucide-react";
import React from "react";

export default function CarRentalInsurance() {
  return (
    <div className="border rounded-md flex gap-2 items-start">
      <ShieldCheck width={40} height={40} className="text-blue-500 align-top" />
      <div>
        <h1 className="text-blue-500 font-semibold">Bao hiem thue xe</h1>
        <p className="text-sm text-gray-500">
          Chuyen xe co mua bao hiem, khach thue boi thuong toi da 2.000.000 vnd
          cho truong hop su co ngoai y muon
        </p>
        <p className="text-sm font-semibold">Xem chi tiet</p>
      </div>
    </div>
  );
}
