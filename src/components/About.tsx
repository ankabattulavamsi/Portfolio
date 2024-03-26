import React from "react";
import { skills } from "../constants/Skills";

const About = () => {
  return (
    <div className="md:mx-10 mx-4 w-full">
      <div className="flex justify-center">
        <h1 className="font-bold text-center text-4xl leading-loose inline-block after:block after:border-b-4 after:border-pink-600">
          About Me
        </h1>
      </div>
      <div className="flex justify-center py-6">
        <h1 className="text-center text-slate-300 text-xl md:w-6/12">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </h1>
      </div>

      <div className="md:flex md:justify-around md:space-x-10 py-10">
        <div className="w-full">
          <h1 className="text-3xl font-bold pb-10 ">Get to know me!</h1>
          <div className=" text-lg text-gray-300">
            <p className="py-2">
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
            <p className="py-4">
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </div>

          <button className="py-4 font-mono">
            Let's talk{" "}
            <a
              href="#contact"
              className="hover:translate-x-8  transform duration-300 text-2xl"
            >
              {"->"}
            </a>
          </button>
        </div>

        <div className="w-full">
          <h1 className="text-3xl font-bold pb-10 ">My Skills</h1>
          <div className=" flex flex-wrap">
            {skills?.map((skill) => (
              <h1
                key={skill.id}
                className="m-2 inline-block bg-slate-800 px-4 py-6 rounded-lg"
              >
                {skill.title}
              </h1>
            ))}
          </div>
        </div>
      </div>

      <div className="block md:none  md:flex md:justify-around lg:flex lg:justify-around py-10 pb-24 ">
        <div>
          <h1 className="text-center font-bold font-serif text-3xl my-6">
            Education
          </h1>

          <div className="relative text-white border-s-4 border-gray-200 ">
            <div className="mb-8 ms-10 ">
              <span className="absolute flex items-center justify-center w-4 h-4 -start-14">
                2019
              </span>
              <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white "></span>
              <div className="bg-neutral-800 p-4 hover:shadow-xl  hover:shadow-neutral-600 transition duration-500 cursor-pointer ">
                <h3 className="font-medium leading-tight">
                  Bachelor of Engineering (MECH)
                </h3>
                <p className="text-sm">
                  Avanthi reseach and technological academy
                </p>
                <p>I completed my BE degree with 63%.</p>
              </div>
            </div>
            <div className="mb-10 ms-10 ">
              <span className="absolute flex items-center justify-center w-4 h-4 -start-14">
                2015
              </span>
              <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white "></span>
              <div className="bg-neutral-800 p-4 hover:shadow-xl hover:shadow-neutral-600 transition duration-500 cursor-pointer">
                <h3 className="font-medium leading-tight">
                  Intermediate 12th (M.P.C)
                </h3>
                <p className="text-sm">Vijnana jyothi junior college</p>
                <p>I completed my +2 with 66%.</p>
              </div>
            </div>
            <div className="mb-10 ms-10 ">
              <span className="absolute flex items-center justify-center w-4 h-4 -start-14">
                2013
              </span>
              <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white "></span>
              <div className="bg-neutral-800 p-4 hover:shadow-xl hover:shadow-neutral-600 transition duration-500 cursor-pointer">
                <h3 className="font-medium leading-tight">SSC (state board)</h3>
                <p className="text-sm">Z.P.High School (Makkuva)</p>
                <p>I completed my SSC with 83%.</p>
              </div>

              <span className="absolute flex items-center justify-center w-4 h-4 -start-14">
                2012
              </span>
              <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white "></span>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-center font-bold font-serif text-3xl my-6">
            Experience
          </h1>

          <div className="relative text-white border-s-4 border-gray-200 ">
            <div className="mb-10 ms-10 ">
              <span className="absolute flex items-center justify-center w-4 h-4 -start-14">
                2024
              </span>
              <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white "></span>
              <div className="bg-neutral-800 p-4 hover:shadow-xl hover:shadow-neutral-600 transition duration-500 cursor-pointer">
                <h3 className="font-medium leading-tight">Namaste React</h3>
                <p className="text-sm">
                  namaste.dev foundation by akshay saini
                </p>
                <p>I build major web application projects like netflix</p>
              </div>
            </div>
            <div className="mb-10 ms-10 ">
              <span className="absolute flex items-center justify-center w-4 h-4 -start-14">
                2023 may
              </span>
              <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white "></span>
              <div className="bg-neutral-800 p-4 hover:shadow-xl hover:shadow-neutral-600 transition duration-500 cursor-pointer">
                <h3 className="font-medium leading-tight">
                  Frontend Developer
                </h3>
                <p className="text-sm">Extended web app tech LLP</p>
                <p>I'm working on React Js and React Native.</p>
              </div>
            </div>
            <div className="mb-10 ms-10 ">
              <span className="absolute flex items-center justify-center w-4 h-4 -start-14">
                2022 april
              </span>
              <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white "></span>
              <div className="bg-neutral-800 p-4 hover:shadow-xl hover:shadow-neutral-600 transition duration-500 cursor-pointer">
                <h3 className="font-medium leading-tight">
                  Continuous Capacity Building program Intensive Bootcamp
                  Trainee
                </h3>
                <p className="text-sm">NxtWave Disruptive Technologies</p>
                <p>I trained with MERN stack technologies</p>
              </div>
              <span className="absolute flex items-center justify-center w-4 h-4 -start-14">
                2021
              </span>
              <span className="absolute flex items-center justify-center w-2 h-2 bg-green-200 rounded-full -start-1.5 ring-4 ring-white "></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
