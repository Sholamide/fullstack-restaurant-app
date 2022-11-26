import React from "react";
import story1 from "../img/story1.jpeg";
import story2 from "../img/story2.jpeg";

const StoryContainer = () => {
  return (
    <section className="mt-12 px-6 flex w-full justify-between">
      <div className="flex-col items-start space-y-4">
        <h1 className="flex justify-center text-center font-bold text-2xl text-[#bf8114]">Our Story</h1>
        <h3 className="flex font-bold text-xl text-[#292323]">Welcome To Restaurant</h3>
        <p className="flex leading-relaxed max-w-2xl">
          A Nigerian nomad who travelled around the world; sought exquisiteness
          wherever he goes, with a deep inner desire to create and express his
          multicultural background in one place, with dreams that one day he
          might create a safe, classy and entertaining environment for
          sophisticated minds looking for a relaxation spot after a long day,
          then COOLIO was found. Where different people meet, yet share an
          experience of a lifetime.
        </p>
        <h1 className="flex justify-center text-center font-bold text-2xl text-[#bf8114]">Enjoy your stay</h1>
      </div>
      <div className="grid grid-cols-2 gap-x-3 grid-rows-2">
        <img
          src={story1}
          className="h-full rounded-lg w-full object-contain"
          alt="delivery"
        />
         <img
          src={story2}
          className="h-full rounded-lg w-full object-contain"
          alt="delivery"
        />{" "}
      </div>
    </section>
  );
};

export default StoryContainer;
