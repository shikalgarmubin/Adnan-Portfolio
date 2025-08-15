import myPic from "../assets/adnan_pic-yellow.png";

const ProfileHead = () => {
  return (
    <div className="lg:mt-6 lg:p-8 min-w-min lg:w-250">
      <div className="flex justify-between mb-10">
        <span className="flex text-2xl text-amber-50 font-bold">
          Adnan Maniyar
        </span>
        <span className="flex text-2xl text-amber-50 font-bold">
          <img src="/icons/resume-icon.svg" alt="" className="w-5" /> Resume
        </span>
      </div>
      <div className="profile-head lg:flex lg:border-2 border-amber-50 rounded-xl p-6 gap-16">
        <img
          src={myPic}
          alt="profile-pic"
          className="justify-self-center h-42 border-2 border-white rounded-full"
        />
        <div className="head-links">
          <h1 className="mt-6 mb-4 text-2xl justify-self-center lg:justify-self-start  font-extrabold text-white md:text-3xl lg:text-3xl">
            Hey, I’m Adnan.
            <br /> A Salesforce Developer.
          </h1>
          <ul className="flex sm:text-red-600 md:text-blue-700 lg:text-blue-100 text-base md:text-base lg:text-xl lg:font-bold gap-2 lg:gap-8 items-center">
            <li className="flex gap-1">
              <img
                src="/icons/square-linkedin.svg"
                alt="Icon"
                className="w-5 h-5 lg:w-7 lg:h-7"
              />
              LinkedIn
            </li>
            <li className="flex gap-1">
              <img
                src="/icons/twitter-icon.svg"
                alt="Icon"
                className="w-7 h-7"
              />
              Twitter
            </li>
            <li className="flex gap-1">
              <img
                src="/icons/square-github.svg"
                alt="Icon"
                className="w-7 h-7"
              />
              Github
            </li>
            <li className="flex gap-1">
              <img
                src="/icons/square-instagram.svg"
                alt="Icon"
                className="w-7 h-7"
              />
              Instagram
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileHead;
