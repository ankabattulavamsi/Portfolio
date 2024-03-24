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
      <div className="grid md:grid-cols-8 grid-cols-3 gap-6">
        {skillSet?.map((skill) => (
          <div key={skill.id} className="  rounded-xl ">
            <img
              className="rounded-xl md:h-[100px] h-[70px] w-[100px] px-3 py-2 bg-slate-500"
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
