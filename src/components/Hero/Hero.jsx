import React from "react";
import { TypeAnimation } from "react-type-animation";
import image from "../../assets/adnan_pic.png";
import { FaDownload } from "react-icons/fa6";
import home from "../../assets/home.jpeg";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center "
      style={{
        backgroundImage: `url(${home})`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 w-full px-4 md:px-12">
        <div className="w-full lg:w-3/6 px-24 flex flex-col text-center items-center lg:items-start justify-center gap-4 mb-12">
          <img
            src={image}
            alt=""
            className="w-[180px] md:w-[200px] rounded-full shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl text-gray-800 font-bold">
            Hey, I’m Adnan.
          </h1>
          <TypeAnimation
            sequence={[
              "A Salesforce Developer.",
              1000,
              "Certified Salesforce Developer & CRM Specialist.",
              1000,
              "Building smarter workflows with Salesforce.",
              1000,
              "I help businesses succeed with Salesforce solutions.",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2em",
              display: "inline-block",
              textAlign: "start",
            }}
            className="text-gray-800 font-bold"
            repeat={Infinity}
          />
          <p className="text-lg md:text-xl text-gray-800">
            I'm Available for Freelance Projects
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1Gl7KFuYZ9MAI6qRuTcvGlQ5A_HvsV8jn"
            className="border-2 border-gray-700 px-4 py-2 rounded-2xl text-gray-800 text-xl flex gap-3"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
        <div className="w-full lg:w-3/6 flex items-center justify-center">
          {/* You can add more content here if needed */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
