import React from "react";
import { RiBuilding4Fill } from "react-icons/ri";
import { FaSnowflake, FaPaperPlane } from "react-icons/fa";

const FeatureContainer = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center gap-10 px-10">
      <div className="lg:w-200 w-2/4 flex flex-col items-center justify-center rounded-3xl bg-cardOverlay px-4 shadow-xl drop-shadow-lg backdrop-blur-md">
        <RiBuilding4Fill className="-mt-5 h-40 w-10 text-[#927733]  lg:-mt-20 lg:w-32 " />
        <p className="mt-2 text-base font-semibold text-textColor lg:mt-4 lg:text-xl">
          Magical Atmosphere
        </p>

        <p className="my-1 lg:max-w-2xl w- text-[12px] font-semibold text-lighttextGray lg:my-3 lg:text-sm">
          Wonderful location with a serene environment for your best comfort and
          relaxation .
        </p>
      </div>
      {/* <div className="lg:w-250 flex gap-y-6  flex-col items-center justify-center rounded-3xl bg-cardOverlay p-4 shadow-xl drop-shadow-lg backdrop-blur-md">
        <FaSnowflake className="-mt-10 h-40 w-10 text-[#927733] lg:-mt-20 lg:w-32 " />

        <p className="mt-2 text-base font-semibold text-textColor lg:mt-4 lg:text-xl">
          Awesome Experience
        </p>

        <p className="my-1 max-w-2xl text-[12px] font-semibold text-lighttextGray lg:my-3 lg:text-sm">
          Coolio offers you the best clubbing experience. giving you the party
          vibe you crave for.
        </p>
      </div>

      <div className="lg:w-250 flex flex-col items-center justify-center rounded-3xl bg-cardOverlay p-4 shadow-xl drop-shadow-lg backdrop-blur-md">
        <FaPaperPlane className="-mt-10 h-40 w-10 text-[#927733] lg:-mt-20 lg:w-32" />

        <p className="mt-2 text-base font-semibold text-textColor lg:mt-4 lg:text-xl">
          Excellent Services
        </p>

        <p className="my-1 max-w-2xl text-[12px] font-semibold text-lighttextGray lg:my-3 lg:text-sm">
          Coolio state of the art equipments and quality service delivery are in
          place to give you a mind blowing experience every time you visit
          coolio
        </p>
      </div> */}
    </section>
  );
};

export default FeatureContainer;
