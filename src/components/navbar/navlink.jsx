"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded px-3 py-1 ${
        pathName === link.url && "bg-[#913dff84] text-white"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};
