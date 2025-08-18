import React from "react";
import { Link } from "react-router-dom";

const Skill = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-r from-[#73BCDD] to-[#8CCCE7] flex flex-col items-center  py-12 gap-4 relative ">
        <h1 className="text-2xl  font-bold text-center px-3 py-2 text-black">
          My Skills
        </h1>
        <div className=" grid lg:grid-cols-2 md:grid-cols-1 gap-4  flex-col  border-2 border-cyan-600 p-4 rounded-lg ">
          <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold  hover:scale-105 transition-transform bg-cyan-600 px-6 py-4 rounded-lg">
            <img
              src="/icons/arrow-icon.svg"
              type="icon/svg"
              alt=""
              className="rotate-45 w-4"
            />
            Apex
            <img
              src="/icons/apex-icon.png"
              type="icon"
              alt=""
              className="w-5"
            />
          </span>
          <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold hover:scale-105 transition-transform bg-cyan-600 px-6 py-4 rounded-lg">
            <img
              src="/icons/arrow-icon.svg"
              type="icon/svg"
              alt=""
              className="rotate-45 w-4"
            />
            LWC
            <img
              src="/icons/lwcc-icon.png"
              type="icon"
              alt=""
              className="w-5"
            />
          </span>
          <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold hover:scale-105 transition-transform bg-cyan-600 px-6 py-4 rounded-lg">
            <img
              src="/icons/arrow-icon.svg"
              type="icon/svg"
              alt=""
              className="rotate-45 w-4"
            />
            SOQL & SOSL
            <img
              src="/icons/soql-icon.png"
              type="icon"
              alt=""
              className="w-5"
            />
          </span>
          <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold hover:scale-105 transition-transform bg-cyan-600 px-6 py-4 rounded-lg">
            <img
              src="/icons/arrow-icon.svg"
              type="icon/svg"
              alt=""
              className="rotate-45 w-4"
            />
            Salesforce APIs (REST, SOAP, Bulk)
            <img
              src="/icons/visualforce-icon.webp"
              type="icon"
              alt=""
              className="w-5"
            />
          </span>
          <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold hover:scale-105 transition-transform bg-cyan-600 px-6 py-4 rounded-lg">
            <img
              src="/icons/arrow-icon.svg"
              type="icon/svg"
              alt=""
              className="rotate-45 w-4"
            />
            Salesforce DX
            <img
              src="/icons/salesforce-dx.png"
              type="icon"
              alt=""
              className="w-5"
            />
          </span>
          <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold hover:scale-105 transition-transform bg-cyan-600 px-6 py-4 rounded-lg">
            <img
              src="/icons/arrow-icon.svg"
              type="icon/svg"
              alt=""
              className="rotate-45 w-4"
            />
            Visualforce
            <img
              src="/icons/visualforce-icon.webp"
              type="icon"
              alt=""
              className="w-5"
            />
          </span>

          <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold hover:scale-105 transition-transform bg-cyan-600 px-6 py-4 rounded-lg">
            <img
              src="/icons/arrow-icon.svg"
              type="icon/svg"
              alt=""
              className="rotate-45 w-4"
            />
            Wordpress
            <img
              src="/icons/wordpress-icon.svg"
              type="icon/svg"
              alt=""
              className="w-5"
            />
          </span>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#73BCDD] to-[#8CCCE7] flex flex-col items-center  py-12 gap-4">
        <h1 className="border-b-4 border-amber-800 px-6 py-3  text-2xl font-semibold ">
          Work Experience
        </h1>
        <div className="bg-cyan-200/45 flex items-center justify-between w-[80%] h-[20%] p-4 rounded-lg shadow-lg">
          {" "}
          <div className="flex flex-col gap-2 text-center">
            <h1 className="font-semibold text-3xl">Saleforce Devloper</h1>
            <span className="text-green-600 text-xl font-bold">2024-2025</span>
          </div>
          <div>
            <img src="https://shorturl.at/s0YJG" className="w-70" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
