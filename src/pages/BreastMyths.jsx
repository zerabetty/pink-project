import React from "react";

const BreastMyths = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-raisin mb-6">
        Breast Cancer Myths & Facts
      </h1>

      <p className="text-lg text-battleship mb-4">
        There are many misconceptions when it comes to breast cancer. Let's explore some common myths and clarify the facts:
      </p>

      <div className="mb-6">
        <p className="text-raisin font-semibold mb-1">MYTH: If I don’t have a family history of breast cancer, I won’t get it.</p>
        <p className="text-battleship">FACT: Most people diagnosed with breast cancer have no known family history.</p>
      </div>

      <div className="mb-6">
        <p className="text-raisin font-semibold mb-1">MYTH: Healthy lifestyle means no risk.</p>
        <p className="text-battleship">FACT: Healthy habits lower risk but cannot eliminate it entirely.</p>
      </div>

      <div className="mb-6">
        <p className="text-raisin font-semibold mb-1">MYTH: Wearing a bra causes breast cancer.</p>
        <p className="text-battleship">FACT: There is no scientific evidence linking bras to breast cancer.</p>
      </div>

      <div className="mb-6">
        <p className="text-raisin font-semibold mb-1">MYTH: Using underarm antiperspirants causes breast cancer.</p>
        <p className="text-battleship">FACT: No conclusive evidence supports this claim.</p>
      </div>

      <div className="mb-6">
        <p className="text-raisin font-semibold mb-1">MYTH: Mammograms always catch breast cancer early.</p>
        <p className="text-battleship">FACT: While useful, mammograms can sometimes miss cancer, especially in dense breast tissue.</p>
      </div>

      <p className="text-lg text-battleship mt-6">
        For more detailed information, visit:{" "}
        <a
          href="https://www.breastcancer.org/facts-statistics/myths-vs-facts"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyclamen underline hover:text-lavender"
        >
          Breastcancer.org – Myths vs Facts
        </a>
      </p>
    </div>
  );
};

export default BreastMyths;
