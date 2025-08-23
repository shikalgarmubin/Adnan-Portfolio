import { TypeAnimation } from "react-type-animation";
import image from "../../assets/adnan_pic.png";
import { FaDownload } from "react-icons/fa6";
import home from "../../assets/home.jpeg";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-between min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${home})`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="relative flex-col lg:flex-row items-center justify-center gap-8 w-full px-4 md:px-12">
        <div className="w-full lg:w-3/6 px-24 flex flex-col text-center items-center lg:items-start md:items-start justify-center gap-4 mb-10">
          <img
            src={image}
            alt=""
            className="w-[160px] md:w-[200px] rounded-full shadow-lg"
          />
          <h1 className="text-2xl md:text-5xl text-gray-800 font-bold">
            Hey, I’m Adnan.
          </h1>
          <div className="h-50 lg:w-220 md:h-auto lg:flex text-2xl md:text-3xl">
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
                display: "inline-block",
                textAlign: "center",
              }}
              className="text-gray-800 font-bold"
              repeat={Infinity}
            />
          </div>
          <p className="text-lg md:text-xl text-gray-800">
            I'm Available for Freelance Projects
          </p>
          <a
            href=""
            className="border-2 border-gray-700 px-3 py-2 md:px-4 rounded-2xl text-gray-800 items-center text-base lg:text-lg flex gap-2 md:gap-3"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
        <div className="w-full lg:w-3/6 flex items-center justify-center">
          {/* You can add more content here if needed */}
        </div>
        {/* Jumping Down Arrow for Scroll Down appeal */}
        <div className="md:hidden flex flex-col items-center">
          <span className="text-gray-700 text-base mb-2">Scroll Down</span>
          <svg
            className="animate-bounce w-4 h-4 text-zinc-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
