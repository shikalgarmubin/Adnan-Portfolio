import adminBadge from "../assets/certificate-badge-admin.png";
import devBadge from "../assets/certificate-Platform-Developer-I.png";

const Experience = () => {
  return (
    <div className="py-8 px-8 lg:w-220">
      <h1 className="felx text-2xl text-red-100 font-bold">Certifications</h1>

      <div className="flex mt-6 items-center gap-10">
        <img src={adminBadge} alt="" className="w-40" />
        <img src={devBadge} alt="" className="w-40" />
      </div>
    </div>
  );
};

export default Experience;
