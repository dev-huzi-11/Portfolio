import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="w-full max-w-7xl min-h-screen mx-auto px-12 bg-neutral-50 text-black dark:text-white pt-20 dark:bg-slate-950">
      <h1 className="text-5xl font-bold text-center mt-10 mb-24">About me</h1>
      <div className="flex flex-col md:flex-row w-full justify-around items-center mt-12">
        <div className="h-[13rem] w-[12rem] bg-gradient-to-b from-[#5367ee] to-22% to-[#ccccef] to-92% rounded-t-full flex justify-center mb-12 md:mb-0">
          <Image src={"/portfolio.png"} width={170} height={100} alt="Author" />
        </div>
        <div>
          <p className="w-full max-w-md text-center sm:text-start">
            I am a passionate web developer currently enhancing my skills in
            Next.js through the Governor Sindh initiative. My journey in coding
            began with mastering the essentials like HTML, CSS, and JavaScript,
            which provided me with a strong foundation in front-end development.
            I later expanded my skill set to include TypeScript for more robust,
            scalable applications.
            My goal is to build dynamic, user-friendly web experiences that
            combine functionality with creativity, and I'm excited to see where
            my coding journey takes me.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
