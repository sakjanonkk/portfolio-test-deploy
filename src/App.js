import React from "react";
import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import Beerss from "./images/beers.jpg";
import Type from "react-typed";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, SocialLinks } from "./data";
import { Projects } from "./data";
import { BsFillTelephoneFill } from "react-icons/bs";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      <nav className="w-full px-6 z-50  fixed inset-x-0 top-2 flex justify-center items-center ">
        <div className=" w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-200 font-medium">Sakjanon</p>

          <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
            <a
              href="#home"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Project
            </a>
            <a
              href="#contacts"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Contact
            </a>
            <a
              href="#download"
              className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
            >
              Donwload Resume
            </a>
          </div>
          <div
            className="block md:hidden ml-auto cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <IoMenu className="text-2xl text-textBase" />
          </div>
          {isActive && (
            <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                Projects
              </a>
              <a
                href="#contacts"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                Contact
              </a>
              <a
                href="#download"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in"
                onClick={() => setIsActive(false)}
              >
                Download
              </a>
            </div>
          )}
        </div>
      </nav>

      <div
        className="relative w-full h-screen flex items-center justify-center flex-col"
        id="home"
      >
        <Spline
          className="w-[80%] h-[80%]"
          scene="https://prod.spline.design/zOwPYoyVLNuAIN82/scene.splinecode"
        />
        <div className="absolute bottom-10 w-full flex justify-center items-center">
          <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
            <p className="text-white">Press and drag to orbit</p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-12">
          <p className="text-white text-6xl text-center mt-12 ">
            {/* Hi, I'm Sakjanon */}
          </p>
        </div>
      </div>

      {/* Main */}
      <main className="w-[80%] mt-5" id="about">
        {/* About */}
        <div className="flex justify-center items-center  uppercase  text-white text-6xl text-center mt-12">
          <Type
            strings={["Hi, I'm Sakjanon", "Welcome to my website"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {/* Image box */}
          <div className="w-full h-420 flex items-center justify-center">
            <div>
              <div className="w-275 h-340  rounded-md relative  hover:scale-105 ease-in duration-300 bg-[#ffe901] bg-gradient-to-r from-[#ffa000]">
                <img
                  className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-md"
                  src={Beerss}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
          {/* Content box */}

          <div className="w-full h-420 flex flex-col items-center justify-center">
            <p className="text-lg text-textBase text-center">
              <span className="">Hello</span>, I'm{" "}
              <span className="text-white">Sakjanon Kamoldung</span>, a junior
              web developer from Thailand. Currently, I am studying at Khon Kaen
              University in the Faculty of Computer Engineering and I have a
              preference for front-end web development. I have a strong interest
              in web development and I am currently learning React.js and
              Next.js to enhance my skills. I am actively seeking a job as a web
              developer and would be delighted to discuss any potential
              opportunities that may be available.
            </p>
            <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
              <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download Resume
              </span>
            </button>
          </div>
        </section>
        {/*  Timeline  */}
        <div className="py-10">
          <p className="flex justify-center items-center text-white text-lg uppercase ">
            {/* My Education */}
          </p>
        </div>
        <section className="w-full flex items-center justify-center">
          <VerticalTimeline>
            {Experience &&
              Experience.map((n) => (
                <VerticalTimelineElement
                  key={n.id}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(21, 24, 31)",
                    color: "white",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(21, 24, 31)",
                  }}
                  date={n.date}
                  iconStyle={{ background: "rgb(21, 24, 31)", color: "white" }}
                  icon={n.iconsSrc}
                >
                  <h3 className="vertical-timeline-element-title">{n.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {n.location}
                  </h4>
                  <p>{n.description}</p>
                </VerticalTimelineElement>
              ))}
          </VerticalTimeline>
        </section>

        {/* Projects */}
        <section
          className="flex flex-wrap items-center justify-evenly my-24 gap-4"
          id="projects"
        >
          {Projects &&
            Projects.map((n) => (
              <div
                key={n.id}
                className="border border-zinc-800 rounded-md p-2 min-w-[27px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
              >
                <p className="text-md text-textBase font-medium uppercase">
                  {n.name.Length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                </p>

                <img
                  src={n.imageSrc}
                  className="w-full h-full object-cover rounded-md my-4"
                  alt=""
                ></img>
                <div className="flex flex-1 items-center justify-between">
                  <p className="text-lg text-gray-300">
                    {n.prob}
                    <span className="block text-sm text-gray-500">
                      {n.techs}
                    </span>
                  </p>
                  <a href={n.github} target="blank">
                    <div>
                      <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                    </div>
                  </a>
                </div>
              </div>
            ))}
        </section>

        {/* Contact */}

        <section
          id="contacts"
          className="flex flex-col items-center justify-evenly w-full my-24"
        >
          <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
          <div className="flex items-center justify-evenly w-full my-4 flex-wrap gap-4">
            {SocialLinks &&
              SocialLinks.map((n) => (
                <a
                  whileTap={{ scale: 0.8 }}
                  href={n.link}
                  key={n.id}
                  target="blank"
                  className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                >
                  {n.iconSrc}
                  <p className="text-lg text-textBase">{n.name}</p>
                </a>
              ))}
            <a
              whileTap={{ scale: 0.8 }}
              href="tel:0949750112"
              target="blank"
              className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
            >
              <BsFillTelephoneFill className="text-white" />
              <p className="text-lg text-textBase">Phone Number</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
