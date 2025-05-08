import React from "react";
import supportImage from "../assets/education/supporting-loved-one.jpg";

const SupportLovedOne = () => {
  return (
    <div className="px-6 py-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-raisin mb-6">
        Supporting a Loved One with Breast Cancer
      </h1>

      <img
        src={supportImage}
        alt="Supporting a Loved One"
        className="rounded-lg shadow-md mb-6 w-full md:w-3/4 lg:w-2/3 mx-auto h-auto"
      />

      <p className="text-lg text-battleship mb-4">
        Watching someone you love and care deeply about go through breast cancer
        is one of the most emotionally challenging things a person can
        experience. Even small gestures like holding their hand or simply being
        present can mean everything.
      </p>

      <ul className="list-disc list-inside text-lg text-battleship mb-4 space-y-2">
        <li>Be available to listen — even in silence.</li>
        <li>
          Let them know they can reach out to you anytime, even late at night.
        </li>
        <li>Offer practical help: bring meals, do chores, run errands.</li>
        <li>Have normal conversations, not always focused on cancer.</li>
        <li>Just be yourself — consistency and normalcy are comforting.</li>
        <li>Offer to attend doctor’s appointments with them.</li>
      </ul>

      <p className="text-lg text-battleship mb-4">
        Simply being there, offering love and companionship, is one of the
        greatest supports you can give.
      </p>

      <p className="text-lg text-battleship">
        For more information and guidance:
      </p>

      <ul className="list-disc list-inside text-lg text-cyclamen space-y-2 underline mt-2">
        <li>
          <a
            href="https://www.bcna.org.au/resources/articles/helping-a-friend-or-colleague-with-breast-cancer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BCNA – Helping a Friend
          </a>
        </li>
        <li>
          <a
            href="https://www.cancerresearchuk.org/about-cancer/coping/family-friends-caregivers/how-support-someone-with-cancer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cancer Research UK – Support Tips
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SupportLovedOne;
