import {
  IoCodeWorkingOutline,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoYoutube,
} from "react-icons/io5";
import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiSupabase,
  SiMongodb,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiVisualstudio,
  SiMicrosoftoffice,
} from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import img1 from "./images/library.png";
import img2 from "./images/serieguides.png";

// Import project preview clips
import clip1 from "./images/library-preview.mp4";
import clip2 from "./images/demo.mp4";

export const Experience = [
  {
    id: 1,
    date: "2023 - present",
    iconsSrc: <IoCodeWorkingOutline />,
    title: "Part-Time Front-end Developer",
    location: "Khon Kaen, Thailand",
    description: "Currently working on a project with Zentrix Co., Ltd.",
  },
  {
    id: 2,
    date: "2022 - present",
    iconsSrc: <IoCodeWorkingOutline />,
    title: "Computer Engineer Student",
    location: "Khon Kaen, Thailand",
    description: "I'm currently learning front-end web development",
  },
  {
    id: 3,
    date: "2016 - 2022",
    iconsSrc: <IoCodeWorkingOutline />,
    title: "Science Mathematics Student",
    location: "Rayong, Thailand",
    description: "Practiced programming",
  },
];

export const Projects = [
  {
    id: 1,
    name: "ENLibrary| 2023",
    imageSrc: img1,
    prob: "EN | BOOKING LIBRARY",
    techs: "Next.js, TailwindCSS, Node.js, Firebase",
    github: "https://github.com/sippam/myJect",
    clip: clip1, // Path to your project preview clip
  },
  {
    id: 2,
    name: "SeriesGuide| 2024",
    imageSrc: img2,
    prob: "SeriesGuide Project",
    techs: "Next js, TailwindCSS, Supabase + PrismaORM",
    github: "https://github.com/sakjanonkk/SerieGuiderProject",
    clip: clip2, // Path to your future project preview clip
  },
];
export const Skills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS and Tailwind CSS", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Databases and Backend",
    skills: [
      { name: "SQL", icon: <SiMysql /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Software Skills",
    skills: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Adobe Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Adobe Illustrator", icon: <SiAdobeillustrator /> },
      { name: "Microsoft Office", icon: <SiMicrosoftoffice /> },
      { name: "Visual Studio", icon: <SiVisualstudio /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
  },
];
export const SocialLinks = [
  {
    id: 1,
    iconSrc: (
      <IoLogoGithub className="text-slate-100 text-3xl cursor-pointer" />
    ),
    name: "GitHub",
    link: "https://github.com/sakjanonkk",
  },
  {
    id: 2,
    iconSrc: (
      <IoLogoYoutube className="text-slate-100 text-3xl cursor-pointer" />
    ),
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCjQsjVBoj-qjQZMQtreWTcQ",
  },
  {
    id: 3,
    iconSrc: (
      <BsInstagram className=" text-slate-100 text-3xl cursor-pointer" />
    ),
    name: "Instagram",
    link: "https://www.instagram.com/sakjanonk/",
  },
  {
    id: 4,
    iconSrc: (
      <IoLogoFacebook className="text-slate-100 text-3xl cursor-pointer" />
    ),
    name: "Facebook",
    link: "https://www.facebook.com/sakjanon.kamoldung.9",
  },
];
