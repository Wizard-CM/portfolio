"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <motion.div
        initial={{ y: "-200vh" }}
        animate={{ y: 0, transition: { duration: 1 } }}
        className="mt-2"
      >
        <section className="w-full h-full flex flex-col gap-8 lg:gap-0 lg:flex-row relative px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 ">
          {/* Image Container */}
          <ImageContainer />

          {/* Text  Container */}
          <TextContainer />
          <div className="absolute top-[300px] left-[-60px]">
            <div className="relative">
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                viewBox="0 0 300 300"
                className="w-64 h-64 md:w-[300px] md:h-[300px] "
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                  />
                </defs>
                <text fill="#000">
                  <textPath xlinkHref="#circlePath" className="text-xl">
                    Front-end Developer and UI Designer
                  </textPath>
                </text>
              </motion.svg>
              <Link
                href="/contact"
                className="w-16 h-16 md:w-20 md:h-20 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </section>
      </motion.div>
      <section className="w-full h-full  flex flex-col lg:flex-row"></section>
    </>
  );
};

export default Homepage;

// Local Components
const ImageContainer = () => {
  return (
    <motion.div className="w-full lg:w-1/2 flex justify-center">
      <Image
        src={"/hero.png"}
        alt="hero-img"
        width={500}
        className="object-cover"
        height={500}
      />
    </motion.div>
  );
};
const TextContainer = () => {
  return (
    <div className="w-full lg:w-1/2  text-center lg:text-start pt-5">
      {/* TITLE */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
        Crafting Digital Experiences, Designing Tomorrow.
      </h1>
      {/* DESC */}
      <p className="md:text-xl lg:my-9 my-6">
        Welcome to my digital canvas, where innovation and creativity converge.
        With a keen eye for aesthetics and a mastery of code, my portfolio
        showcases a diverse collection of projects that reflect my commitment to
        excellence.
      </p>
      {/* BUTTONS */}
      <div className="w-full  text-center lg:text-start">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white mx-5">
          View My Work
        </button>
        <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
      </div>
    </div>
  );
};
