import React from "react";
import { Link } from "react-router-dom";
import selfexam from "../assets/education/selfexam.jpg";
import earlysigns from "../assets/education/earlysigns.png";
import riskfactors from "../assets/education/riskfactors.jpeg";
import treatment from "../assets/education/treatment.jpeg";
import support from "../assets/education/support.jpeg";
import myths from "../assets/education/myths.jpg";

const contents = [
  {
    title: "How to Perform a Breast Self-Examination?",
    image: selfexam,
    link: "/education/self-exam",
  },
  {
    title: "Early Signs and Symptoms of Breast Cancer",
    image: earlysigns,
    link: "/education/early-signs",
  },
  {
    title: "Understanding Breast Cancer Risk Factors",
    image: riskfactors,
    link: "/education/risk-factors",
  },
  {
    title: "Breast Cancer Treatment Options",
    image: treatment,
    link: "/education/treatment-options",
  },
  {
    title: "Supporting a Loved One with Breast Cancer",
    image: support,
    link: "/education/support-loved-one",
  },
  {
    title: "Breast Cancer Myths & Facts",
    image: myths,
    link: "/education/breast-myths",
  },
];

const Education = () => {
  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-raisin mb-8">Education Center</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contents.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition transform hover:scale-[1.01]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-raisin">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Education;
