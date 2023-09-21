"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

function About() {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      // ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        I am a dedicated Software Engineer with 4.9 years of experience,{" "}
        <span className='font-medium'>
          {" "}
          specialized in web and app development using cutting-edge frontend
          technologies.
        </span>{" "}
        Currently, I hold the position of <b>Software Engineer 2</b> where I
        am consistently delivering innovative solutions and maintained a strong
        commitment to quality and excellence.{" "}
        <span className='italic'>My favorite part of programming</span> is the
        problem-solving aspect. I <span className='underline'>love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className='font-medium'>
          React, Next.js, JavaScript, and firebase
        </span>
        . I am also familiar with TypeScript and NodeJS. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className='font-medium'>full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className='italic'>When I'm not coding</span>, I enjoy playing
        video games, watching movies, and Singing. I also enjoy{" "}
        <span className='font-medium'>learning new things</span>. I am currently
        learning new skills{" "}
        <span className='font-medium'>NodeJS and TypeScript</span>.
      </p>
    </motion.section>
  );
}

export default About;
