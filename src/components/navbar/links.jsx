import React from "react";
import { NavLink } from "./navlink";

export const Links = ({ links }) => {
  return (
    <div className="hidden md:flex gap-4 w-1/3 justify-center">
      {links.map((link) => (
        <NavLink link={link} key={link.title} />
      ))}
    </div>
  );
};
