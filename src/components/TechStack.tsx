import React from "react";
import { skillSet } from "../constants/Technologies";

const TechStack = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-center w-full">
        <div>
          <h1 className="text-center font-bold text-4xl">My Tech Stack</h1>
          <h1 className="text-center font-normal text-lg py-4">
            Technologies i've been working with recently
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-16">
        {skillSet?.map((skill) => (
          <div key={skill.id} className=" ">
            <img
              className="w-40 h-32 border-box object-contain border border-slate-500 p-6 rounded-3xl cursor-pointer shadow-2xl bg-gray-700 hover:bg-gray-500 hover:border-blue-600 hover:border-2 hover:shadow-blue-500 "
              src={skill.img}
              alt="skill"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
