//import { useAuth } from "@/app/api/AuthApi";

import Link from "next/link";
import UsernameMenu from "./UsernameMenu";
import { useAuthContext } from "@/app/contexts/authContext";

const NavLinks = [
  {
    id: "1",
    name: "Become our partner",
    link: "/#",
  },
  {
    id: "2",
    name: "About us",
    link: "/#",
  },
  {
    id: "3",
    name: "Support",
    link: "/#",
  },
];

export default function MainNav() {
  const { isAuthenticated } = useAuthContext();

  return (
    <span>
      <ul className="flex space-x-2 items-center">
        {NavLinks.map(({ id, name, link }) => (
          <li
            key={id}
            className="px-2 cursor-pointer capitalize py-2 font-semibold text-sm hover:text-blue-500"
          >
            <Link href={link}>{name}</Link>
          </li>
        ))}
        {isAuthenticated ? (
          <UsernameMenu />
        ) : (
          <li
            key="login"
            className="px-2 cursor-pointer capitalize py-2 font-semibold text-sm hover:text-blue-500"
          >
            <Link href="/login">Log in</Link>
          </li>
        )}
      </ul>
    </span>
  );
}
