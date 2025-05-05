import React from "react";
import riskFactorsImage from "../assets/education/risk-factors.jpeg";

const RiskFactors = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-raisin mb-6">
        Understanding Breast Cancer Risk Factors
      </h1>

      <img
        src={riskFactorsImage}
        alt="Risk Factors"
        className="rounded-lg shadow-md mb-6 w-full h-auto"
      />

      <p className="text-lg text-battleship mb-4">
        Studies have shown that breast cancer is due to a combination of
        factors, but some women will get breast cancer even without any other
        risk factors that they know of. Most women have some risk factors, but
        most women also do not get breast cancer. There are some risk factors
        you can change, and some you can’t.
      </p>

      <h2 className="text-xl font-semibold text-raisin mb-2">
        Risk Factors You Can’t Change
      </h2>
      <ul className="list-disc list-inside text-lg text-battleship mb-4 space-y-2">
        <li>Gender – more common in women</li>
        <li>Age – higher risk after age 55</li>
        <li>Race – more common in Caucasian women</li>
        <li>Family history and genetic factors (BRCA1/BRCA2)</li>
        <li>Personal health history</li>
        <li>Reproductive history</li>
        <li>Certain genome mutations</li>
        <li>Dense breast tissue</li>
      </ul>

      <h2 className="text-xl font-semibold text-raisin mb-2">
        Risk Factors You Can Change
      </h2>
      <ul className="list-disc list-inside text-lg text-battleship mb-4 space-y-2">
        <li>Lack of physical activity</li>
        <li>Poor diet</li>
        <li>Being overweight or obese</li>
        <li>Alcohol consumption</li>
        <li>Radiation exposure</li>
        <li>Hormone replacement therapy (HRT)</li>
      </ul>

      <p className="text-lg text-battleship mb-4">
        When we understand the risk factors that are in our control, we can do
        something to lower them. For a lifetime of breast health:
      </p>

      <ul className="list-disc list-inside text-lg text-battleship mb-4 space-y-2">
        <li>Age 20 – Begin monthly breast self-exams</li>
        <li>Age 25 – Develop risk factor plan with your doctor</li>
        <li>Age 40 – Begin annual mammography screenings</li>
      </ul>

      <p className="text-lg text-battleship">
        Further info:
        <br />
        <a
          href="https://www.nationalbreastcancer.org/breast-cancer-risk-factors/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyclamen underline hover:text-lavender"
        >
          National Breast Cancer Foundation
        </a>
        <br />
        <a
          href="https://www.cdc.gov/breast-cancer/risk-factors/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyclamen underline hover:text-lavender"
        >
          CDC – Breast Cancer Risk Factors
        </a>
        <br />
        <a
          href="https://www.solismammo.com/insights/risk-factors-breast-cancer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyclamen underline hover:text-lavender"
        >
          Solis Mammography
        </a>
      </p>
    </div>
  );
};

export default RiskFactors;
