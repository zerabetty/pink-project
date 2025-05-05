import React from "react";
import selfExamImage from "../assets/education/self-exam.jpg";

const SelfExam = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-raisin mb-6">
        How to Perform a Breast Self-Examination?
      </h1>

      <img
        src={selfExamImage}
        alt="Breast Self Exam"
        className="rounded-lg shadow-md mb-6 w-full h-auto"
      />

      <p className="text-lg text-battleship mb-4">
        Learning how to perform a breast self-examination is crucial for women.
        It is recommended to self-examine at least once a month, ideally a few
        days after your menstrual cycle ends. Looking for any types of lumps,
        changes in size, shape and texture is also crucial for breast
        self-examination.
      </p>

      <p className="text-lg text-battleship mb-4">
        Breast Self-Examination consists of 3 steps:
      </p>

      <ol className="list-decimal list-inside text-lg text-battleship mb-4">
        <li className="mb-2">
          <strong>In the Shower:</strong> Use the pads of your 3 middle fingers
          to check the entire breast and armpit area with light, medium, and
          firm pressure. Look for lumps or changes.
        </li>
        <li className="mb-2">
          <strong>In Front of a Mirror:</strong> Visually inspect both breasts
          for changes in contour, dimpling, or swelling. Press your hands on
          your hips to flex your chest muscles and observe.
        </li>
        <li className="mb-2">
          <strong>Lying Down:</strong> Lay flat with a pillow under your
          shoulder and check your breast with the opposite hand using all three
          levels of pressure. Don’t forget to check the nipple for discharge.
        </li>
      </ol>

      <p className="text-lg text-battleship mb-4">
        To ensure if you have breast cancer or not, combining the results of
        your self-examination and your mammography results is the most healthy
        way to proceed with this process.
      </p>

      <p className="text-lg text-battleship mt-4">
        For more information, visit:{" "}
        <a
          href="https://www.nationalbreastcancer.org/breast-self-exam/"
          className="text-cyclamen underline hover:text-lavender"
          target="_blank"
          rel="noopener noreferrer"
        >
          National Breast Cancer Foundation
        </a>
      </p>
    </div>
  );
};

export default SelfExam;
