import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-[#73BCDD] to-[#8CCCE7] py-12">
      <div className="border-2 shadow-black rounded-2xl shadow-md max-w-2xl w-full px-8 py-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-amber-800 mb-6 border-b-4 border-amber-800 pb-2 px-8">
          About Me
        </h1>
        <div className="flex flex-col gap-6 text-center">
          <p className="text-lg text-zinc-700 font-semibold">
            I am a Salesforce professional specializing in administration, configuration, and process optimization, with additional expertise in custom development.
          </p>
          <p className="text-lg text-zinc-700 font-semibold">
            My core strengths lie in managing Salesforce environments, streamlining workflows, creating reports and dashboards, and ensuring data accuracy to support business decision-making. Alongside my administrative expertise, I apply development skills in Apex and Lightning Web Components to deliver tailored solutions when customization is needed. My goal is to align Salesforce capabilities with organizational objectives, enabling efficiency, scalability, and measurable results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;