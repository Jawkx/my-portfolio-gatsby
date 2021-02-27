import React from "react";
import {
  SiFigma,
  SiFirebase,
  SiLinkedin,
  SiNetlify,
  SiNodeDotJs,
  SiPython,
  SiReact,
  SiTensorflow,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";

import { FiMail, FiPhone } from "react-icons/fi";

export const TechNToolsData = [
  {
    name: "React",
    icon: <SiReact />,
    description: "I use it to create frontend UI",
    color: "#61DAFB",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    description: "I use it as backend for most of my projects that require it",
    color: "#FFCA28",
  },
  {
    name: "Python",
    icon: <SiPython />,
    description:
      "I use it for scripting and data preprocessing / occasionally doing image processing",
    color: "#3776AB",
  },
  {
    name: "Tensorflow js",
    icon: <SiTensorflow />,
    description: "I use it for running machine learning models on browser",
    color: "#FF6F00",
  },
  {
    name: "Node js",
    icon: <SiNodeDotJs />,
    description: "I use it for creating backend functions",
    color: "#339933",
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    description: " I use it for prototyping and design",
    color: "#F24E1E ",
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    description: "I use it for preventing stupid bug in my app",
    color: "#3178C6",
  },
  {
    name: "VS code",
    icon: <SiVisualstudiocode />,
    description: "I use it to write code",
    color: "#007ACC",
  },
  {
    name: "Netlify",
    icon: <SiNetlify />,
    description: "I use it to host my webapp",
    color: "#00C7B7",
  },
];

export const projectsData = [
  {
    title: "Open Avalon",
    status: "Working On",
    isWorkingOn: true,
    description:
      " A web apps to play the popular board game Avalon, on browser",
    techUsed: ["react", "firebase", "figma"],
    link: "https://github.com/Jawkx/open-avalon",
  },
  {
    title: "Ngao Calculator",
    status: "Finished",
    isWorkingOn: false,
    description:
      " Calculator to calculate the best combination of a card game Ngao",
    techUsed: ["react"],
    link: "https://github.com/Jawkx/ngao-calculator-react",
  },
  {
    title: "Schneider pm5100 reader",
    status: "Finished",
    isWorkingOn: false,
    description: " Read and record meter reading through image processing",
    techUsed: ["python"],
    link: "https://github.com/Jawkx/schneider_pm5100_reader",
  },
  {
    title: "YOCCO js",
    status: "Working On",
    isWorkingOn: true,
    description:
      " This is a proof-of-concept online protoring webapp that is develop for our Year-3 Meng in Electrical and Electronic group project.",
    techUsed: ["react", "firebase", "tensorflow"],
    link: "https://github.com/Jawkx/yocco-js",
  },
  {
    title: "CV car",
    status: "Stop working On",
    isWorkingOn: false,
    description:
      " computer vision car for me and my team's year 2 group project.",
    techUsed: ["python"],
    link: "https://github.com/Jawkx/cv_car",
  },
];

export const contactsData = [
  {
    icon: <SiLinkedin />,
    link: "https://www.linkedin.com/in/kaixuan-jaw-5a6080148/",
    text: "Jaw kx",
  },
  {
    icon: <FiMail />,
    link: "mailto:j_kaixuan@live.com",
    text: "j_kaixuan@live.com",
  },
  {
    icon: <FiPhone />,
    link: null,
    text: "+600103798369",
  },
];
