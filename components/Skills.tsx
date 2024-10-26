import React from "react";
import Education from "./Education";

function Skills() {
  const skills = {
    HTML: "90%",
    CSS: "80%",
    JavaScript: "75%",
    TypeScript: "70%",
    NextJS: "47%",
  };
  return (
    <div className="w-full py-16 px-12 dark:bg-slate-900">
      <h1 className="text-5xl font-bold text-center mb-12">Skills & Education</h1>
      <div className="flex justify-around items-center flex-col md:flex-row">
        <div className="flex w-full justify-center md:justify-start">
          <Education></Education>

          <div className="h-[500px] w-4/5 max-[450px]:pl-4">
            <h1 className="pt-[113px] text-xl text-start max-[450px]:text-lg">
              Matric 2011 - 2023
            </h1>
            <h1 className="pt-[66px] text-xl text-start max-[450px]:text-lg">
              Intermediate 2023 - 2025
            </h1>
            <h1 className="pt-[65px] text-xl text-start max-[450px]:text-lg">
              Software Engineering from NED 2025 ....
            </h1>
          </div>
        </div>
        <div className="h-[30rem] w-full max-w-lg">
          {Object.entries(skills).map((skill, index) => {
            return (
              <div key={index} className="h-14 w-full max-w-md mt-5">
                <div className="h-[30%] w-[90%] flex m-auto justify-between text-xl">
                  <h3>{skill[0]}</h3>
                  <h3>{skill[1]}</h3>
                </div>
                <div className="h-[20px] w-[90%] border border-primary dark:border-neutral-500 rounded-[100px] m-auto mt-2">
                  <div
                    className="h-full bg-[#4a60f0] rounded-[100px]"
                    style={{ width: skill[1] }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
