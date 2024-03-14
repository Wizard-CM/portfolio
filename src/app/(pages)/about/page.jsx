"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

// Components
import { TextContainer } from "../../../components/about/text-container";

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll(containerRef);
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: 0, transition: { duration: 1 } }}
      className="mt-2"
    >
      About
    </motion.div>
  );
};

export default AboutPage;
