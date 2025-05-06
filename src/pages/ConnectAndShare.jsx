import React from "react";

const ConnectAndShare = () => {
  return (
    <div className="bg-misty min-h-screen px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-raisin mb-10 text-center">
        Connect & Share Support Resources
      </h1>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12 space-y-8 text-battleship text-[18px] leading-relaxed">
        <p className="text-center">
        Navigating breast cancer can feel overwhelming — but you don’t have to go through it alone.  
        This page brings together trusted organizations and communities where you can connect, share, and find comfort.  
        Whether you're looking for emotional support, a listening ear, or guidance for your loved ones, there's a place here for you.
        </p>

        {/* Susan G. Komen */}
        <p className="flex items-start gap-4">
          <img src="/src/assets/komen.png" alt="Komen Logo" className="max-h-12 w-auto flex-shrink-0 mt-1" />
          <span>
            <a
              href="https://www.komen.org/support-resources/support/social-support/#finding-local-online-and-telephone-support"
              className="text-cyclamen underline decoration-cyclamen hover:text-lavender"
              target="_blank"
              rel="noopener noreferrer"
            >
              Susan G. Komen Foundation
            </a>{" "}
            – The Susan G. Komen Foundation offers an extensive range of emotional support services.
            They help you connect with nearby support groups, navigate you to their helpline and if you need any further assistance 
            they also guide you to reliable medical professionals. Their main aim is to help people who are looking for guidance and/or 
            have just received a diagnosis. For further information, you can visit their website.

          </span>
        </p>

        {/* Komen Family Support */}
        <p className="flex items-start gap-4">
          <img src="/src/assets/komen.png" alt="Komen Logo" className="max-h-12 w-auto flex-shrink-0 mt-1" />
          <span>
            <a
              href="https://www.komen.org/support-resources/support/social-support/#family"
              className="text-cyclamen underline decoration-cyclamen hover:text-lavender"
              target="_blank"
              rel="noopener noreferrer"
            >
              Komen Family Support
            </a>{" "}
            – The Susan G. Komen Foundation also offers social support resources dedicated to help families so that they can get a 
            better understanding of the situation their loved one is going through. They offer practical advice for caregivers, 
            how to communicate and understand the emotions of their loved ones, and guidance for families. The resources also include 
            self-care reminders and advice so while the family provides help and support for their loved one, they remember to also take 
            care of themselves and their emotions, struggles are also valid.
          </span>
        </p>

        {/* NBCF */}
        <p className="flex items-start gap-4">
          <img src="/src/assets/nbcf.png" alt="NBCF Logo" className="max-h-12 w-auto flex-shrink-0 mt-1" />
          <span>
            <a
              href="https://www.nationalbreastcancer.org/nbcf-programs/breast-cancer-support-group/"
              className="text-cyclamen underline decoration-cyclamen hover:text-lavender"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Breast Cancer Foundation
            </a>{" "}
            – National Breast Cancer Foundation offers virtual and in-person group sessions so that the patients and the survivors 
            of breast cancer have a safe, secure and welcoming place to share, listen and heal. These groups are led by either peers 
            who have experienced the same things before or by medical experts. They are filled with care and compassion for another. 
            Through the same platform, you can also access programs about educational workshops and mental health. National Breast Cancer
            Foundation’s aim is that there is always someone there for you, whether you are at your home or a nearby location. 
          </span>
        </p>

        {/* CSC */}
        <p className="flex items-start gap-4">
          <img src="/src/assets/csc.png" alt="CSC Logo" className="max-h-12 w-auto flex-shrink-0 mt-1" />
          <span>
            <a
              href="https://www.cancersupportcommunity.org/"
              className="text-cyclamen underline decoration-cyclamen hover:text-lavender"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cancer Support Community
            </a>{" "}
            – Cancer Support Community provides an experience that is highly customized for you and adapts to your own needs as a patient,
            caregiver, or a survivor. This platform offers instructional programs, community forums, licensed mental health counseling
            and live chat alternatives. You can also create your own support system according to your needs. They provide a cozy and 
            comforting space that values mental health equally as physical well-being. 
          </span>
        </p>

        {/* GriefShare */}
        <p className="flex items-start gap-4">
          <img src="/src/assets/gs_color.png" alt="GriefShare Logo" className="max-h-12 w-auto flex-shrink-0 mt-1" />
          <span>
            <a
              href="https://www.griefshare.org/"
              className="text-cyclamen underline decoration-cyclamen hover:text-lavender"
              target="_blank"
              rel="noopener noreferrer"
            >
              GriefShare
            </a>{" "}
            – GriefShare platform is created to help people who are dealing with the emotional aftermath of losing a loved one. 
            Their aim is to provide emotional support and healing regardless of whether you have experienced loss with a loved one 
            to breast cancer or are experiencing loss of any kind. The sessions planned are structured but deeply personal.
            They provide video materials, group discussions and journaling prompts to help you with your healing journey. 
            They are there to remind you that you don’t have to deal with grief alone, there is a community that is waiting to support you.
          </span>
        </p>

        {/* METAvivor */}
        <p className="flex items-start gap-4">
          <img src="/src/assets/metavivorlogo.png" alt="METAvivor Logo" className="max-h-12 w-auto flex-shrink-0 mt-1" />
          <span>
            <a
              href="https://www.metavivor.org/support/peer-to-peer-support-groups/"
              className="text-cyclamen underline decoration-cyclamen hover:text-lavender"
              target="_blank"
              rel="noopener noreferrer"
            >
              METAvivor
            </a>{" "}
            – METAvivor platform has given attention to the struggles and special difficulties faced by people who have stage 4 
            breast cancer. They promote funding and medical research for metastatic disease, and offer support groups that are led by 
            peers. It’s an environment where there is no space for discrimination, but lots of space for care and love. They are aiming 
            to provide a safe space for people to share their experiences, have discussions about breast cancer, and get resources 
            designed for them without experiencing any judgment. Their objective is to provide patients with advocacy, knowledge and
             emotional support to help them feel heard and recognized.
          </span>
        </p>
      </div>
    </div>
  );
};

export default ConnectAndShare;
