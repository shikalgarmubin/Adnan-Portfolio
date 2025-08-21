const Skill = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-r from-[#73BCDD] to-[#8CCCE7] flex flex-col items-center py-10 gap-4 relative ">
        <h1 className="text-2xl font-semibold text-center py-2 text-black">
          My Skills
        </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-1 md:gap-4  flex-col  md:border-2 border-b-cyan-900 md:p-8 md:px-30 rounded-lg w-80 md:w-auto">
          <span className="flex gap-2 mb-1.5 items-center text-base md:text-xl text-white font-bold hover:scale-105 transition-transform bg-cyan-700 px-6 py-4 rounded-lg">
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
          <span className="flex gap-2 mb-1.5 items-center text-base md:text-xl text-white font-bold hover:scale-105 transition-transform bg-cyan-700 px-6 py-4 rounded-lg">
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
          <span className="flex gap-2 mb-1.5 items-center text-base md:text-xl text-white font-bold hover:scale-105 transition-transform bg-cyan-700 px-6 py-4 rounded-lg">
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
          <span className="flex gap-2 mb-1.5 items-center text-base md:text-xl text-white font-bold hover:scale-105 transition-transform bg-cyan-700 px-6 py-4 rounded-lg">
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
          <span className="flex gap-2 mb-1.5 items-center text-base md:text-xl text-white font-bold hover:scale-105 transition-transform bg-cyan-700 px-6 py-4 rounded-lg">
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
          <span className="flex gap-2 mb-1.5 items-center text-base md:text-xl text-white font-bold hover:scale-105 transition-transform bg-cyan-700 px-6 py-4 rounded-lg">
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
          <span className="flex gap-2 mb-1.5 items-center text-base md:text-xl text-white font-bold hover:scale-105 transition-transform bg-cyan-700 px-6 py-4 rounded-lg">
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

      <div id="certificate" className="w-full bg-gradient-to-r from-[#73BCDD] to-[#8CCCE7] flex flex-col items-center py-12 gap-4 relative ">
        <h1 className="text-2xl font-semibold text-center py-2 text-black">
          My Certifications
        </h1>

        <div className="md:flex gap-10">
          <div className="flex w-80 md:w-100 shadow-md items-center gap-4 mb-5 bg-gradient-to-r from-[#d4f2ff] to-[#299ed0] p-4">
            <img
              src="/certificate-badge-admin.png"
              className="w-25"
              alt="Salesforce admin badge"
            />
            <h1 className="text-lg md:text-xl font-mono font-bold">Salesforce Certified Admin</h1>
          </div>
          <div className="flex w-80 md:w-100 shadow-md items-center gap-4 mb-5 bg-gradient-to-r from-[#d4f2ff] to-[#299ed0] p-4">
            <img
              src="/certificate-Platform-Developer-I.png"
              className="w-25"
              alt="Salesforce developer badge"
            />
            <h1 className="text-lg md:text-xl font-mono font-bold">Salesforce Platform Developer - I</h1>
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-[#73BCDD] to-[#8CCCE7] flex flex-col items-center  py-12 gap-4">
        <h1 className="py-3 text-2xl font-semibold ">Work Experience</h1>

        <div className="bg-cyan-200/45 flex w-[80%] p-3 rounded-lg shadow-lg">
          <div className="">
            <img src="/setlerz_logo.jpeg" className="w-18 md:w-20" alt="logo" />
          </div>
          <div className="flex flex-col ml-4 gap-1">
            <h1 className="font-semibold text-xl md:text-2xl">
              Salesforce Developer
            </h1>
            <p className="text-base md:text-xl">
              Setlerz IT Solution{" "}
              <span className="bg-blue-100 rounded-3xl px-1.5 ml-1 text-base font-bold">
                1 yr
              </span>
            </p>
            <span className="text-gray-500 text-base font-bold">
              Aug 2024 - Sep 2025
            </span>
          </div>
        </div>
        <div className="bg-cyan-200/45 flex w-[80%] p-3 rounded-lg shadow-lg">
          <div className="">
            <img src="/shamiit_logo.jpeg" className="sm:w-20 w-30" alt="logo" />
          </div>
          <div className="flex flex-col ml-4 gap-1">
            <h1 className="font-semibold text-xl md:text-2xl">
              Wordpress Developer
            </h1>
            <p className="text-base md:text-xl">
              Shami Innovation and Technologies Pvt Ltd{" "}
              <span className="bg-blue-100 rounded-3xl px-1.5 ml-1 text-base font-bold">
                6 mo
              </span>
            </p>
            <span className="text-gray-500 text-base font-bold">
              Oct 2023 - March 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
