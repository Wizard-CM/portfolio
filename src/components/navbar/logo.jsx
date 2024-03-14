import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <div className="md:hidden lg:flex w-1/3 xl:justify-start">
      <Link
        href="/"
        className="h-14 w-14 bg-black rounded-full flex justify-center items-center"
      >
        <span className="bg-white h-11 w-11 rounded-full flex justify-center items-center p-2">
          <span className=" bg-black h-9 w-9 text-white rounded-full flex justify-center items-center p-4 ">
            RT
          </span>
        </span>
      </Link>
    </div>
  );
};
