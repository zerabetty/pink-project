import React from "react";
import treatmentImage from "../assets/education/treatment-options.jpeg";

const TreatmentOptions = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-raisin mb-6">
        Breast Cancer Treatment Options
      </h1>

      <img
        src={treatmentImage}
        alt="Treatment Options"
        className="rounded-lg shadow-md mb-6 w-full h-auto"
      />

      <p className="text-lg text-battleship mb-4">
        There are many options for breast cancer treatment. Your treatment plan
        will depend on your particular breast cancer, and the stage of it. Your
        healthcare team will consider all of the treatment options and discuss
        their goals and possible side effects, and decide on a treatment with
        you based on your needs and what will be best for you.
      </p>

      <p className="text-lg text-battleship mb-4">
        There are several treatment options for breast cancer. Let’s overview
        some of them:
      </p>

      <ul className="list-disc list-inside text-lg text-battleship mb-4 space-y-2">
        <li>
          <strong>Surgery:</strong> Doctors remove the cancer through an
          operation.
        </li>
        <li>
          <strong>Chemotherapy:</strong> Uses special medicines to shrink or
          kill the cancer.
        </li>
        <li>
          <strong>Hormonal therapy:</strong> Blocks cancer cells from getting
          the hormones they need to grow.
        </li>
        <li>
          <strong>Biological therapy:</strong> Helps your immune system fight
          cancer or reduce side effects.
        </li>
        <li>
          <strong>Radiation therapy:</strong> Uses high-energy rays to kill
          cancer cells.
        </li>
      </ul>

      <p className="text-lg text-battleship mb-4">
        For more detailed information and treatment options based on the type of
        breast cancer, check:
      </p>

      <ul className="list-disc list-inside text-lg text-cyclamen space-y-2 underline">
        <li>
          <a
            href="https://www.mayoclinic.org/diseases-conditions/breast-cancer/diagnosis-treatment/drc-20352475"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mayo Clinic – Treatment
          </a>
        </li>
        <li>
          <a
            href="https://www.cancer.gov/types/breast/patient/breast-treatment-pdq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cancer.gov – Breast Treatment PDQ
          </a>
        </li>
        <li>
          <a
            href="https://www.cancer.org/cancer/types/breast-cancer/treatment.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            American Cancer Society – Treatment Options
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TreatmentOptions;
