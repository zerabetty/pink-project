import React from "react";
import earlySignsImage from "../assets/education/early-signs.jpeg";

const EarlySigns = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-raisin mb-6">
        Early Signs and Symptoms of Breast Cancer
      </h1>

      <img
        src={earlySignsImage}
        alt="Early Signs"
        className="rounded-lg shadow-md mb-6 w-full h-auto"
      />

      <p className="text-lg text-battleship mb-4">
        While we talk about what may be early signs and symptoms of breast
        cancer, it is also important to remember that there are other signs to
        breast cancer other than lump/lumps in your breast. Having some of these
        symptoms or breast changes doesn’t necessarily mean you have breast
        cancer. Many other factors go into a diagnosis, not just outward signs.
      </p>

      <p className="text-lg text-battleship mb-4">
        Symptoms for breast cancer vary for each person. But some common, early
        warnings include:
      </p>

      <ul className="list-disc list-inside text-lg text-battleship mb-4 space-y-2">
        <li>Skin changes, such as swelling, redness, or visible differences</li>
        <li>Change in size or shape of the breast(s)</li>
        <li>Changes in the appearance of one or both nipples</li>
        <li>Nipple discharge other than breast milk</li>
        <li>General pain in/on any part of the breast</li>
        <li>Lumps or nodes felt on or inside of the breast</li>
      </ul>

      <p className="text-lg text-battleship mb-4">
        These symptoms also vary depending on breast cancer type. For a better
        visual explanation, you can visit:
      </p>

      <a
        href="https://www.cancercenter.com/cancer-types/breast-cancer/symptoms#Q1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyclamen underline hover:text-lavender text-lg"
      >
        cancercenter.com – Symptoms of Breast Cancer
      </a>
    </div>
  );
};

export default EarlySigns;
