import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa6";
import { GiFactory } from "react-icons/gi";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: <FaPlusSquare className="text-3xl text-cyan-500" />,
    title: "Health Care Industry",
    challenge:
      "A healthcare provider struggled with slow referral processing, manual data entry, and no centralized way to track partnerships with insurance companies and corporate wellness clients.",
    solution: [
      "Implemented Salesforce Sales Cloud with automated lead capture from referral forms.",
      "Built workflows to assign cases to the right department instantly.",
      "Created dashboards for patient referral volume and conversion metrics.",
    ],
    results: [
      "Referral processing time reduced by 50%",
      "Increased lead-to-partnership conversion by 30%",
      "Management gained real-time performance insights",
    ],
  },
  {
    icon: <FaTruckMoving className="text-3xl text-cyan-500" />,
    title: "Manufacturing – Dealer & Order Management",
    challenge:
      "A manufacturing firm needed to track dealer sales, manage bulk order approvals, and forecast inventory demand accurately.",
    solution: [
      "Customized Sales Cloud to manage dealer pipelines and track order progress.",
      "Integrated with SAP ERP for real-time inventory visibility.",
      "Automated approval process for high-value orders.",
    ],
    results: [
      "Order approval reduced from 3 days to less than 24 hours",
      "Forecasting accuracy improved by 40%",
      "Sales and inventory data unified in one system",
    ],
  },
  {
    icon: <GiFactory className="text-3xl text-cyan-500" />,
    title: "Logistics: Process Automation & Data Insights",
    challenge:
      "A logistics company struggled with manual approval processes, inconsistent data entry, and lack of visibility into sales and delivery performance.",
    solution: [
      "Created workflows to automate approval for large freight orders.",
      "Built flows for guided shipment booking and error-proof data entry.",
      "Set up validation rules to ensure accurate customer and delivery data.",
      "Designed custom reports & dashboards for shipment status, delivery times, and sales.",
    ],
    results: [
      "Reduced approval delays by 70%",
      "Improved data accuracy by 90%",
      "Management gained real-time insights for faster decision-making",
    ],
  },
];

const Card = () => {
  return (
    <div className="w-full py-10 bg-gradient-to-r from-[#6fc1e4] to-[#73BCDD] flex flex-col items-center relative overflow-hidden">
      
      <h2 className="text-black text-3xl font-bold mb-8">Case Studies</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="w-[80%] lg:w-110 bg-zinc-800 rounded-xl shadow-lg p-5 py-10 flex flex-col gap-8 hover:scale-105 transition-transform"
          >
            <div className="flex flex-col items-center gap-2 ">
              {card.icon}
              <h3 className="text-lg font-semibold text-white text-center">{card.title}</h3>
            </div>
            <div className="text-zinc-300 text-sm">
              <span className="font-bold text-cyan-400">Challenge:</span>
              <p className="mb-5">{card.challenge}</p>
              <span className="font-bold text-cyan-400">Solution:</span>
              <ul className="list-disc ml-5 mb-5">
                {card.solution.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
              <span className="font-bold text-cyan-400">Results:</span>
              <ul className="list-disc ml-5">
                {card.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;