import {
  IoCodeWorkingOutline,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io5";

import { BsInstagram } from "react-icons/bs";
import img1 from "./images/library.png";
import img2 from "./images/404.jpg";
export const Experience = [
  {
    id: 1,
    date: "2022 - present",
    iconsSrc: <IoCodeWorkingOutline />,
    title: "Computer Engineer Student",
    location: "Khon Kaen, Thailand",
    description: "Grade 3.XX",
  },
  {
    id: 2,
    date: "2019 - 2022",
    iconsSrc: <IoCodeWorkingOutline />,
    title: "Science Mathematics Student",
    location: "Watpapradoo Rayong, Thailand",
    description: "Grade 3.82",
  },
  {
    id: 3,
    date: "2016 - 2019",
    iconsSrc: <IoCodeWorkingOutline />,
    title: "Mini English Program Student",
    location: "Watpapradoo Rayong, Thailand",
    description: "Grade 3.75",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Booking Library Project",
    imageSrc: img1,
    techs: "Nextjs, TailwindCSS, NodeJS, FireBase",
    github: "https://github.com/sippam/myJect",
  },
  {
    id: 2,
    name: "Future Project",
    imageSrc: img2,
    techs: "ReactJS, TailwindCSS, NodeJS, MongoDB",
    github: "#",
  },
  {
    id: 3,
    name: "Future Project",
    imageSrc: img2,
    techs: "ReactJS, TailwindCSS, NodeJS, MongoDB",
    github: "#",
  },
  {
    id: 4,
    name: "Future Project",
    imageSrc: img2,
    techs: "ReactJS, TailwindCSS, NodeJS, MongoDB",
    github: "#",
  },
  {
    id: 5,
    name: "Future Project",
    imageSrc: img2,
    techs: "ReactJS, TailwindCSS, NodeJS, MongoDB",
    github: "#",
  },
  {
    id: 6,
    name: "Future Project",
    imageSrc: img2,
    techs: "ReactJS, TailwindCSS, NodeJS, MongoDB",
    github: "#",
  },
  // {
  //   id: 7,
  //   name: "Future Project",
  //   imageSrc: img2,
  //   techs: "ReactJS, TailwindCSS, NodeJS, MongoDB",
  //   github: "#",
  // },
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
    id: 1,
    iconSrc: (
      <IoLogoYoutube className="text-slate-100 text-3xl cursor-pointer" />
    ),
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCjQsjVBoj-qjQZMQtreWTcQ",
  },
  {
    id: 1,
    iconSrc: (
      <BsInstagram className=" text-slate-100 text-3xl cursor-pointer" />
    ),
    name: "Instagram",
    link: "https://www.instagram.com/sakjanonk/",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoFacebook className="text-slate-100 text-3xl cursor-pointer" />
    ),
    name: "Facebook",
    link: "https://www.facebook.com/sakjanon.kamoldung.9",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-slate-100 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "#",
  },
];
