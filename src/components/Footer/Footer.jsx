import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
} from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  // <-- Default to empty array
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
  ];
  return (
    <div className="bg-zinc-800 w-[100%] h-auto flex flex-col items-center gap-4">
      {" "}
      <div className="  flex items-center justify-center w-full px-12 py-12">
        <div className="w-3/6 flex flex-col items-start justify-center px-8 gap-8">
          <h1 className="text-2xl text-cyan-500 font-bold ">ADNAN MANIYAR</h1>
          <p className="text-lg text-white">
            Certified Salesforce Developer & CRM Specialist.
          </p>
          <h1 className="text-lg text-cyan-500 font-bold ">SUPPORT</h1>

          <span className="text-lg flex items-center gap-2 text-white">
            <FaEnvelope />{" "}
            <a href="mailto:adnanmaniyar313@gmail.com">
              adnanmaniyar313@gmail.com
            </a>
          </span>
        </div>
        <div className="w-3/6 flex items-center justify-center gap-8 ">
          <div className="flex flex-col items-center justify-center   ">
            <h1 className="text-zinc-400 text-lg">Quick links</h1>
            <div className="text-white text-lg flex flex-col items-center justify-center mb-15 gap-2">
              {links.map((item, index) => (
                <Link key={index} to={item.link} className="text-white">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-zinc-400 text-lg mb-2">Social links</h1>
            <div className="text-white flex-col items-center justify-center">
              <a
                href="https://www.linkedin.com/in/adnan-maniyar-40658418a/"
                target="_blank"
                className="flex text-lg items-center gap-1 mb-1"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a href="" className="text-lg flex items-center gap-2 mb-1">
                <FaSquareTwitter /> Twitter
              </a>
              <a
                href=""
                target="_blank"
                className="text-lg flex items-center gap-2 mb-1"
              >
                <FaSquareGithub /> Github
              </a>
              <a href="" className="text-lg flex items-center gap-1 mb-1">
                <FaInstagramSquare /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
