import React from "react";
import statueImage from "../assets/statue.jpg";

const Statue = () => {
  return (
    <div className="relative h-[80vh]">
      <img
        src={statueImage}
        alt="Statue"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-black text-3xl md:text-5xl text-center px-4 font-semibold">
          "Your body is your story — protect it, honor it, love it."
        </h1>
      </div>
    </div>
  );
};

export default Statue;
