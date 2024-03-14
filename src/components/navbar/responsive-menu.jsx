"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const ResponsiveMenu = ({ links, open, setOpen }) => {
  const topBarVariant = {
    closed: { rotate: 0 },
    open: { rotate: 45, backgroundColor: "#fff" },
  };
  const centerBarVariant = {
    closed: {
      opacity: 1,
    },
    open: {
      opacity: 0,
    },
  };
  const bottomBarVariant = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: -45,
      backgroundColor: "#fff",
    },
  };

  // List Variants
  const listVarients = {
    open: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    close: {
      x: "100vw",
    },
  };

  // List Item Variants
  const listItemVariants = {
    close: {
      x: -10,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="md:hidden">
      {/* MENU BUTTON */}
      <button
        className="w-10 h-8 flex flex-col justify-between z-50 relative"
        onClick={() => setOpen((prev) => !prev)}
      >
        <motion.div
          variants={topBarVariant}
          animate={open ? "open" : "closed"}
          className="w-10 h-1 bg-black rounded origin-left"
        ></motion.div>
        <motion.div
          variants={centerBarVariant}
          animate={open ? "open" : "closed"}
          className="w-10 h-1 bg-black rounded"
        ></motion.div>
        <motion.div
          variants={bottomBarVariant}
          animate={open ? "open" : "closed"}
          className="w-10 h-1 bg-black rounded origin-left"
        ></motion.div>
      </button>
      {/* MENU LIST */}
      {open && (
        <motion.div
          variants={listVarients}
          initial={"close"}
          animate={"open"}
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
        >
          {links.map((link) => (
            <motion.div
              variants={listItemVariants}
              className=""
              key={link.title}
            >
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
