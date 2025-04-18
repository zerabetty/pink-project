import React from "react";
import statueImage from "../assets/statue.jpg";

const Statue = () => {
  return (
    <div className="relative h-screen w-full">
      <img
        src={statueImage}
        alt="Statue"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>

      <div className="absolute bottom-10 w-full text-center px-4">
        <h1 className="text-white text-3xl md:text-5xl font-semibold">
          "Your body is your story — protect it, honor it, love it."
        </h1>
      </div>
    </div>
  );
};

export default Statue;
