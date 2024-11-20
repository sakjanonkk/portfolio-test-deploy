import React, { useState } from "react";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import Type from "react-typed";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, Skills } from "./data";
import { BsInstagram } from "react-icons/bs";

// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import profile images
import Profile1 from "./images/ENP04243.jpg";
import Profile2 from "./images/beers.jpg";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      {/* Navbar */}
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center ">
        <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
          <p className="text-lg text-slate-200 font-medium">Sakjanon</p>

          <div className="hidden md:flex items-center w-full justify-between">
            <div className="flex items-center gap-6 justify-center mx-auto">
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
            </div>
            <a
              href="#download"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
            >
              Download Resume
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

      {/* Main Content */}
      <main className="w-[80%] mt-16" id="about">
        {/* Greeting */}
        <div className="flex justify-center items-center uppercase text-white text-6xl text-center mt-12">
          <Type
            strings={["Hi, I'm Sakjanon", "Welcome to my website"]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>

        {/* About Section */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {/* Profile Card Slider */}
          <div className="w-full h-420 flex items-center justify-center">
            <div className="w-275 h-340 rounded-md relative hover:scale-105 ease-in duration-300">
              <Swiper
                // modules={[Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                className="w-full h-full"
              >
                <SwiperSlide>
                  <img
                    src={Profile1}
                    alt="Profile 1"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Profile2}
                    alt="Profile 2"
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </SwiperSlide>
              </Swiper>
              <p className="text-sm text-gray-400 mt-2">
                Swipe to see more photos
              </p>
            </div>
          </div>

          {/* About Content */}
          <div className="w-full h-420 flex flex-col items-center justify-center">
            <p className="text-lg text-textBase text-center">
              <span className="">Hello</span>, I'm{" "}
              <span className="text-white">Sakjanon Kamoldung</span>, a junior
              web developer from Thailand. Currently, I am studying at Khon Kaen
              University in the Faculty of Computer Engineering and I have a
              preference for front-end web development. I have a strong interest
              in web development and I am currently learning React.js and
              Next.js to enhance my skills. I am actively seeking a job as a
              frontend web developer and would be delighted to discuss any
              potential opportunities that may be available.
            </p>
            {/* <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
              <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 sm:w-full">
                Download Resume
              </span>
            </button> */}
            <div className="flex mt-4 space-x-6">
              <a
                href="https://github.com/sakjanonkk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textBase hover:text-white text-3xl"
              >
                <IoLogoGithub />
              </a>
              <a
                href="https://www.instagram.com/sakjanonk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-textBase hover:text-white text-3xl"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </section>
        {/* Skills Section */}
        <section className="w-full my-24" id="skills">
          <h2 className="text-3xl text-white text-center mb-8">Skills</h2>
          {Skills.map((category, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl text-textBase mb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <div className="text-5xl text-white mb-2">{skill.icon}</div>
                    <p className="text-textBase">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
        {/* Timeline Section */}
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

        {/* Projects Section */}
        <section
          className="flex flex-wrap items-center justify-evenly my-24 gap-4"
          id="projects"
        >
          {Projects &&
            Projects.map((n) => (
              <div
                key={n.id}
                className="border border-zinc-800 rounded-md p-2 w-full md:w-[300px] hover:border-zinc-600 duration-100 ease-in-out cursor-pointer"
                onClick={() => {
                  setSelectedProject(n);
                  setIsModalOpen(true);
                }}
              >
                <p className="text-md text-textBase font-medium uppercase">
                  {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                </p>

                <img
                  src={n.imageSrc}
                  className="w-full h-52 object-cover rounded-md my-4"
                  alt={n.name}
                />
                <div className="flex flex-1 items-center justify-between">
                  <p className="text-lg text-gray-300">
                    {n.prob}
                    <span className="block text-sm text-gray-500">
                      {n.techs}
                    </span>
                  </p>
                  <a href={n.github} target="_blank" rel="noopener noreferrer">
                    <div>
                      <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                    </div>
                  </a>
                </div>
              </div>
            ))}
        </section>

        {/* Modal for Project Preview */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg max-w-5xl w-full">
              <div className="flex justify-end">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-black"
                >
                  Close
                </button>
              </div>
              {/* Display the project preview clip here */}
              {selectedProject.clip ? (
                <video
                  src={selectedProject.clip}
                  controls
                  className="w-full"
                ></video>
              ) : (
                <p>No preview available.</p>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
