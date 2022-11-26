import React from "react";
import Coolio from "../img/coolio.png";


const HomeContainer = () => {
  return (
    <div className="flex min-h-screen w-full text-center" id="home">
      <div className="flex flex-col justify-center gap-6 py-2 text-center">
        <div className="flex items-center justify-center gap-2 px-6 py-2 bg-black w-max mx-auto rounded-full">
          <p className="text-base font-semibold text-[#e8b024]">
            Welcome to
          </p>
          <div className="h-8 w-8 overflow-hidden rounded-full drop-shadow-xl">
            <img
              src={Coolio}
              className="h-full w-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[1.5rem] font-bold tracking-wide text-[#ba9f5d] lg:text-[2.5rem]">
          Club - Resto Lounge - Garden Bar
        </p>

        <p className="text-center text-base mx-auto text-textColor md:w-[80%]">
          Wonderful location with a serene environment for your best comfort and
          relaxation. Coolio offers you the best clubbing experience, giving you
          the party vibe you crave for. Coolio state of the art equipments and
          quality service delivery are in place to give you a mind blowing
          experience every time you visit coolio. What better way to relax and
          chill than to Coolio? Come cool off with us!
        </p>

        <button
          type="button"
          className="flex mx-auto rounded-lg bg-gradient-to-br from-[#ba9f5d] to-[#e8b024] px-4 py-2  transition-all duration-100 ease-in-out hover:shadow-lg md:w-auto w-max"
        >
          Make a reservation
        </button>
      </div>
    </div>
  );
};

export default HomeContainer;
