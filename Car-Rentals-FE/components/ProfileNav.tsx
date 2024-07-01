"use client";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { usePathname } from "next/navigation";

const listNav = [
  {
    href: "/user-profile/my-account",
    label: "My account",
  },
  {
    href: "/user-profile/favourite-car",
    label: "Favourite car",
  },
  {
    href: "/user-profile/my-car",
    label: "My Car",
  },
  {
    href: "/user-profile/my-address",
    label: "My address",
  },
  {
    href: "/user-profile/change-password",
    label: "Change password",
  },
  {
    href: "/user-profile/delete-account",
    label: "Delete my account",
  },
];

export default function ProfileNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col mr-4">
      <h1 className="text-4xl font-bold mb-6 text-zinc-700">Hello!</h1>
      <ul>
        {listNav.map((nav) => (
          <li key={nav.href} className="hover:bg-neutral-200">
            <Link href={nav.href}>
              <Separator />
              <div className="relative">
                {pathname === nav.href && (
                  <div className="bg-blue-500 w-1 absolute h-[90%] left-0 top-0 my-1"></div>
                )}
                <p className="text-xl font-medium text-zinc-700 py-4 px-2">
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
