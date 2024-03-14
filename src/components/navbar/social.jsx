import Image from "next/image";
import Link from "next/link";
import React from "react";

// Icons
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="hidden md:flex gap-4 w-1/3 justify-end">
      <Link href="/" className="">
        <FaGithubSquare className="w-8 rounded-full h-8" />
      </Link>
      <Link href="/" className="">
        <FaInstagramSquare className="w-8 rounded-full h-8" />
      </Link>
      <Link href="/" className="">
        <FaFacebookSquare className="w-8 rounded-full h-8" />
      </Link>
      <Link href="/" className="">
        <FaLinkedin className="w-8 rounded-full h-8" />
      </Link>
    </div>
  );
};
