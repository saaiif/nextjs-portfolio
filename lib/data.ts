import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import adminDashboard from "@/public/admindashboard.png";
import expenseTracker from "@/public/expensetracker.png";
import newsApp from "@/public/newsapp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer 2",
    location: "Bangalore, IN",
    description:
      "I am working as a frontend developer, Actively involved in creating responsive and user-friendly interfaces while ensuring optimal user experience also Collaborate with cross-functional teams to develop and implement robust and scalable web applications",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "Software Engineer",
    location: "Bangalore, IN",
    description: "I worked as a frontend developer for 1 year",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Web Developer",
    location: "Belagavi, IN",
    description: "I worked as a frontend developer for 9 months",
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Admin Dashboard",
    description:
      "The Admin Dashboard application utilizes ReactJS, Redux, Nivo Charts, and Context API to display comprehensive business data analysis with a variety of interactive charts.",
    tags: [
      "React",
      "Nivo Charts",
      "Context",
      "Material UI",
      "React",
      "Nivo Charts",
      "Context",
      "Material UI",
    ],
    imageUrl: adminDashboard,
    url: "https://saif-admindashboard.netlify.app/",
  },
  {
    title: "DigitalKhaata",
    description:
      "Expense Tracker for tracking daily, monthly and yearly expenses. I was the front-end and back-end developer. It has features like filtering, sorting, pagination and authentication and authorization.",
    tags: ["React", "Context", "Firebase", "antD", "react-router6+"],
    imageUrl: expenseTracker,
    url: "https://digitalkhaata.web.app/",
  },
  {
    title: "News Web App",
    description:
      "It showcases daily news updates, offering an engaging and user-friendly platform for accessing current news articles.",
    tags: ["React", "Context"],
    imageUrl: newsApp,
    url: "https://saif-newsappwithcontext.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Context API",
  "Redux",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Firebase",
  "Framer Motion",
] as const;
