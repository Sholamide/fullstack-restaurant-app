import React from "react";
import Coolio from "../img/coolio.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
const HomeContainer = () => {
  return (
    // <div className="flex min-h-screen w-full text-center" id="home">
    //   <div className="flex flex-col justify-center gap-6 py-2 text-center">
    //     <div className="flex items-center justify-center gap-2 px-6 py-2 bg-black w-max mx-auto rounded-full">
    //       <p className="text-base font-semibold text-[#e8b024]">
    //         Welcome to
    //       </p>
    //       <div className="h-8 w-8 overflow-hidden rounded-full drop-shadow-xl">
    //         <img
    //           src={Coolio}
    //           className="h-full w-full object-contain"
    //           alt="delivery"
    //         />
    //       </div>
    //     </div>

    //     <p className="text-[1.5rem] font-bold tracking-wide text-[#ba9f5d] lg:text-[2.5rem]">
    //       Club - Resto Lounge - Garden Bar
    //     </p>

    //     <p className="text-center text-base mx-auto text-textColor md:w-[80%]">
    //       Wonderful location with a serene environment for your best comfort and
    //       relaxation. Coolio offers you the best clubbing experience, giving you
    //       the party vibe you crave for. Coolio state of the art equipments and
    //       quality service delivery are in place to give you a mind blowing
    //       experience every time you visit coolio. What better way to relax and
    //       chill than to Coolio? Come cool off with us!
    //     </p>

    //     <button
    //       type="button"
    //       className="flex mx-auto rounded-lg bg-gradient-to-br from-[#ba9f5d] to-[#e8b024] px-4 py-2  transition-all duration-100 ease-in-out hover:shadow-lg md:w-auto w-max"
    //     >
    //       Make a reservation
    //     </button>
    //   </div>
    // </div>
    <section
      className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 "
      id="home"
    >
      <div className="flex flex-1 flex-col items-start justify-center gap-6 py-2">
        <div className="flex items-center justify-center gap-2 rounded-full bg-black px-4 py-1">
          <p className="text-base font-semibold text-white">Welcome to</p>
          <div className="h-8 w-8 overflow-hidden rounded-full drop-shadow-xl">
            <img
              src={Coolio}
              className="h-full w-full object-contain"
              alt="logo"
            />
          </div>
        </div>

        <p className="text-[2.5rem] font-bold tracking-wide text-headingColor lg:text-[3.5rem]">
          Club - Resto Lounge <br />
          <span className="text-[3rem] text-[#e8b024] lg:text-[5rem]">
            Garden Bar
          </span>
        </p>

        <p className="text-center text-base text-textColor md:w-[80%] md:text-left">
        Wonderful position in a tranquil setting for your maximum comfort and relaxation. Coolio provides the greatest partying experience. providing you with the desired party atmosphere Coolio's state-of-the-art equipment and excellent service delivery are in place to provide you with an unforgettable experience every time you come. What better way to unwind and unwind than with Coolio? Come chill with us!
        </p>

        <button
          type="button"
          className="w-full font-bold text-white rounded-lg bg-gradient-to-br from-[#e8b024] to-[#a17505] px-4 py-2  transition-all duration-100 ease-in-out hover:shadow-lg md:w-auto"
        >
          Make a reservation
        </button>
      </div>
      <div className="relative flex flex-1 items-center py-2">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:h-650 lg:w-auto"
          alt="hero-bg"
        />

        <div className="absolute top-0 left-0 flex h-full w-full flex-wrap items-center justify-center  gap-4 py-4 lg:px-32">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  flex  flex-col items-center justify-center rounded-3xl bg-cardOverlay p-4 drop-shadow-lg backdrop-blur-md lg:w-190"
              >
                <img
                  src={n.imageSrc}
                  className="-mt-10 w-20 lg:-mt-20 lg:w-40 "
                  alt="I1"
                />
                <p className="mt-2 text-base font-semibold text-textColor lg:mt-4 lg:text-xl">
                  {n.name}
                </p>

                <p className="my-1 text-[12px] font-semibold text-lighttextGray lg:my-3 lg:text-sm">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">₦</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
