"use client";
import {
  Car,
  Heart,
  Lock,
  LockKeyhole,
  MapPin,
  Trash2,
  User,
} from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

const listNav = [
  {
    href: "/user-profile/my-account",
    label: "Tài khoản của tôi",
    icon: <User />,
  },
  {
    href: "/user-profile/favourite-car",
    label: "Xe yêu thích",
    icon: <Heart />,
  },
  {
    href: "/user-profile/my-car",
    label: "Xe của tôi",
    icon: <Car />,
  },
  {
    href: "/user-profile/my-address",
    label: "Địa chỉ của tôi",
    icon: <MapPin />,
  },
  {
    href: "/user-profile/change-password",
    label: "Đổi mật khẩu",
    icon: <LockKeyhole />,
  },
  {
    href: "/user-profile/delete-account",
    label: "Yêu cầu xóa tài khoản",
    icon: <Trash2 />,
  },
];

export default function ProfileNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col mr-4">
      <h1 className="text-4xl font-serif font-semibold mb-6 text-zinc-700">
        Xin chào!
      </h1>
      <ul>
        {listNav.map((nav) => (
          <li key={nav.href} className="hover:bg-neutral-200">
            <Link href={nav.href}>
              <Separator />
              <div className="relative">
                {pathname === nav.href && (
                  <div className="bg-blue-500 w-1 absolute h-[90%] left-0 top-0 my-1"></div>
                )}
                <p className="text-xl font-sans text-zinc-700 py-4 px-4 flex gap-2">
                  {nav.icon}
                  {nav.label}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
