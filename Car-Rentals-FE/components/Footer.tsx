import React from "react";

export default function Footer() {
  return (
    <div className="bg-blue-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tighter">
          CarRentals.com
        </span>
        <span className="text-white font-bold tracking-tighter flex gap-4">
          <span>Chính sách bảo mật</span>
          <span>Điều khoản dịch vụ</span>
        </span>
      </div>
    </div>
  );
}
