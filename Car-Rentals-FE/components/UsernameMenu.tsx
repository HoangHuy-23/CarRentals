"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuthContext } from "@/app/contexts/authContext";
import { useRouter } from "next/navigation";

export default function UsernameMenu() {
  const router = useRouter();
  const { user, logout } = useAuthContext();
  const handleLogout = () => {
    logout();
    router.push("/");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex justify-center items-center px-2 cursor-pointer capitalize py-2 font-semibold text-sm hover:text-blue-500">
        <CircleUserRound className="text-blue-500 mr-[4px]" />
        {user?.fullName}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link
            href="/user-profile/my-account"
            className="font-bold hover:text-blue-500"
          >
            Thông tin của tôi
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={handleLogout}
            className="flex flex-1 font-bold bg-blue-500"
          >
            Đăng xuất
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
