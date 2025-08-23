import { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FaArrowRight, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    if (!show) return;
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [show]);
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
    <div className="fixed top-0 z-50 w-full lg:w-[100%] h-18 bg-gradient-to-r from-[#73BCDD] to-[#8CCCE7] flex items-center justify-between gap-4 px-10">
      <div>
        <Link to={"/"} className="text-2xl font-semibold text-zinc-800">
          Adnan Maniyar
        </Link>
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
        <div className="lg:hidden block" ref={buttonRef}>
          <button
            onClick={() => setShow(!show)}
            className="transition-all duration-300"
          >
            {show ? (
              <FaTimes className="w-[20px] h-[20px] transition-all duration-300" />
            ) : (
              <FaBars className="w-[20px] h-[20px] transition-all duration-300" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {show && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-gradient-to-r from-[#73BCDD] to-[#8CCCE7] flex flex-col items-center gap-5 z-50 lg:hidden shadow-xl py-22"
        >
          {links.map((items, i) => (
            <Link
              key={i}
              to={items.link}
              className="flex text-gray-700 hover:text-black text-lg font-semibold border-2 px-4 py-2 gap-2 items-center text-center transition-all duration-300 "
              onClick={() => setShow(false)}
            >
              <FaArrowRight />
              {items.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
