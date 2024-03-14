"use client";
import React, { useState } from "react";

// Components
import { Links } from "./navbar/links";
import { Logo } from "./navbar/logo";
import { Social } from "./navbar/Social";
import { ResponsiveMenu } from "./navbar/responsive-menu";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between md:gap-24 lg:gap-0 md:justify-center lg:justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 text-xl">
      <Logo />
      <Links links={links} />
      <Social />
      <ResponsiveMenu open={open} setOpen={setOpen} links={links} />
    </div>
  );
};
