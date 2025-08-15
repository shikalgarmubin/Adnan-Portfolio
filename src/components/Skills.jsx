import React from "react";

const Skills = () => {
  return (
    <div className="mt-4 lg:w-234 p-6 py-8 px-0 border-2 border-amber-50 rounded-2xl">
      <h1 className="text-2xl text-amber-50 font-bold">My Skills</h1>
      <div className="lg:columns-3 p-4 gap-4">
        <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold ">
          <img
            src="/icons/arrow-icon.svg"
            type="icon/svg"
            alt=""
            className="rotate-45 w-4"
          />
          Apex
          <img src="/icons/apex-icon.png" type="icon" alt="" className="w-5" />
        </span>
        <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold ">
          <img
            src="/icons/arrow-icon.svg"
            type="icon/svg"
            alt=""
            className="rotate-45 w-4"
          />
          LWC
          <img src="/icons/lwcc-icon.png" type="icon" alt="" className="w-5" />
        </span>
        <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold ">
          <img
            src="/icons/arrow-icon.svg"
            type="icon/svg"
            alt=""
            className="rotate-45 w-4"
          />
          SOQL & SOSL
          <img src="/icons/soql-icon.png" type="icon" alt="" className="w-5" />
        </span>
        <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold ">
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
        <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold ">
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
        <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold ">
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

        <span className="flex gap-2 mb-1.5 items-center text-xl text-white font-bold ">
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
  );
};

export default Skills;
