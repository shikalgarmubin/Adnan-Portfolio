import React, { useState } from "react";
import { FaBarsProgress } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Skills",
      link: "/skill",
    },
  ];  //  
  return (
    <div className="w-full lg:w-[100%] h-18 bg-gradient-to-r from-[#73BCDD] to-[#8CCCE7] flex items-center justify-between gap-4 px-12 relative ">
      <div>
        <Link to={"/"} className="text-2xl font-semibold text-zinc-800">Adnan Maniyar</Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        {/* Desktop Links */}
        {links.map((items, i) => (
          <Link
            key={i}
            to={items.link}
            className="text-gray-600 hover:text-black transition-all duration-300 text-lg font-semibold hidden lg:block cursor-pointer border border-transparent px-2 py-1 rounded-lg"
          >
            {items.title}
          </Link>
        ))}
        {/* Hamburger Icon */}
        <div className="lg:hidden block">
          <button onClick={() => setShow(!show)} className="transition-all duration-300">
            <FaBarsProgress className="w-[25px] h-[25px] transition-all duration-300" />
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {show && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-[#73BCDD] to-[#8CCCE7] flex flex-col items-center gap-3 z-50 lg:hidden shadow-md py-12">
          {links.map((items, i) => (
            <Link
              key={i}
              to={items.link}
              className="text-gray-700 hover:text-black text-lg font-semibold px-4 py-2 w-full text-center transition-all duration-300 "
              onClick={() => setShow(false)}
            >
              {items.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;