import React from "react";
import { Link } from "react-router-dom";
import statueImage from "../assets/statue.jpg";

const Statue = () => {
  return (
    <div className="px-4 pt-1 pb-6 bg-misty">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Görsel */}
        <div className="flex justify-center">
          <img
            src={statueImage}
            alt="Statue"
            className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Quote + Butonlar */}
        <div className="flex flex-col justify-center h-full text-center md:text-left pl-4">
          <h2 className="font-bonanova text-3xl md:text-4xl text-raisin leading-snug">
            “It's about focusing on the fight, not the fright.”
          </h2>

          <p className="text-lg text-battleship mt-4">
            Remember you're not alone in this journey. <br />
            Find support via Support Groups or Hopebot.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/chatbot"
              className="bg-raisin text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-lavender hover:text-raisin transition"
            >
              Meet Hopebot
            </Link>
            <Link
              to="/support"
              className="bg-raisin text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-lavender hover:text-raisin transition"
            >
              Connect & Share
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statue;
