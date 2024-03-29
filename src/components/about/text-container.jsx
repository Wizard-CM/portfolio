import { motion } from "framer-motion";
import React from "react";

const skills = [
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "Shadcn",
  "SASS",
  "NEXT JS",
  "Node JS",
  "Express JS",
  "MongoDB",
  "Postgresl",
  "Prisma",
];

export const TextContainer = () => {
  return (
    <div className=" py-5  flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
      {/* BIOGRAPHY CONTAINER */}
      <Biography />
      {/* SKILLS CONTAINER */}
      <Skills />
    </div>
  );
};

// Local Components
const Biography = () => {
  return (
    <div className="flex flex-col gap-12 justify-center">
      {/* BIOGRAPHY IMAGE */}
      {/* <Image
          src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          width={112}
          height={112}
          className="w-28 h-28 rounded-full object-cover"
        /> */}
      {/* BIOGRAPHY TITLE */}
      <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
      {/* BIOGRAPHY DESC */}
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum
        quibusdam cupiditate nobis accusamus sed aut aperiam, reiciendis
        numquam! Voluptas voluptatibus obcaecati dolore itaque suscipit! Vel
        doloremque numquam quam nihil.
      </p>
      {/* BIOGRAPHY QUOTE */}
      <span className="italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      {/* BIOGRAPHY SIGN SVG*/}
      <div className="self-end">Signature SVG</div>
      {/* BIOGRAPHY SCROLL SVG */}
      <motion.svg
        initial={{ opacity: 0.2, y: 0 }}
        animate={{ opacity: 1, y: "10px" }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
      >
        <path
          d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
          stroke="#000000"
          strokeWidth="1"
        ></path>
        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
        <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
      </motion.svg>
    </div>
  );
};
const Skills = () => {
  return (
    <div className="flex flex-col gap-12 justify-center">
      {/* SKILL TITLE */}
      <motion.h1
        //   initial={{ x: "-300px" }}
        //   animate={isSkillRefInView ? { x: 0 } : {}}
        //   transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        SKILLS
      </motion.h1>
      {/* SKILL LIST */}
      <motion.div
        //   initial={{ x: "-300px" }}
        //   animate={isSkillRefInView ? { x: 0 } : {}}
        className="flex gap-4 flex-wrap"
      >
        {skills.map((skill) => (
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            {skill}
          </div>
        ))}
      </motion.div>
      {/* SKILL SCROLL SVG */}
      <motion.svg
        initial={{ opacity: 0.2, y: 0 }}
        animate={{ opacity: 1, y: "10px" }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
      >
        <path
          d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
          stroke="#000000"
          strokeWidth="1"
        ></path>
        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
        <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
      </motion.svg>
    </div>
  );
};
