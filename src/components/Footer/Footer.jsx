import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
const Footer = () => {
  // <-- Default to empty array
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Skills",
      link: "/skills",
    },
  ];
  return (
    <div className="bg-zinc-800 w-[100%] h-80 flex flex-col items-center  gap-4">
      {" "}
      <div className="  flex items-center justify-center w-full px-12 py-12">
        <div className="w-3/6 flex flex-col items-start justify-center px-8 gap-8">
          <h1 className="text-2xl text-cyan-500 font-bold ">ADNAN MANIYAR</h1>
          <p className="text-lg text-white">
            Certified Salesforce Developer & CRM Specialist.
          </p>
          <h1 className="text-lg text-cyan-500 font-bold ">SUPPORT</h1>

          <p className="text-lg text-white">email: ananmaniyar313@gmail.com</p>
        </div>
        <div className="w-3/6 flex items-center justify-center gap-8 ">
          <div className="flex flex-col items-center justify-center   ">
            <h1 className="text-zinc-400">Quick links</h1>
            <div className="text-white flex flex-col items-center justify-center mb-15 gap-2">
              {links.map((item, index) => (
                <div key={index} className="text-white">
                  {item.title}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-zinc-400">Social links</h1>
            <div>
              <div className="text-white flex flex-col items-center justify-center gap-2">
                <a
                  href=""
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="" className="flex items-center gap-2">
                  <FaSquareTwitter /> Twitter
                </a>
                <a href="" target="_blank" className="flex items-center gap-2">
                  <FaSquareGithub /> Github
                </a>
                <a href="" className="flex items-center gap-1">
                  <FaInstagramSquare /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
