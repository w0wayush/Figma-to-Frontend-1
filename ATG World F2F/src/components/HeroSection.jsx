import React, { useState } from "react";
import HeroImg from "../assets/HeroImg.png";
import HeroGrad from "../assets/HeroGradient.png";
import { IoMdArrowBack, IoMdExit } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";

const HeroSection = () => {
  const [group, setGroup] = useState(false);

  const handleGroup = () => {
    setGroup(!group);
  };

  return (
    <div className="relative w-full h-[440px] lg:h-[540px]">
      {/* Hero Image  */}
      <img
        src={HeroImg}
        alt="Hero"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <img
        src={HeroGrad}
        alt="Hero Grad"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-16 left-12 lg:hidden">
        <IoMdArrowBack size={32} className="text-white" />
      </div>
      {/* Button's Shown only for mobiles  */}
      <div className="absolute top-16 right-12  lg:hidden">
        <button
          className={`flex items-center gap-2 p-2 px-3 rounded border `}
          onClick={handleGroup}
        >
          {!group ? (
            <span className="flex items-center gap-2 text-white">
              Join Group
            </span>
          ) : (
            <span className="flex items-center gap-2 text-white">
              Leave Group
            </span>
          )}
        </button>
      </div>
      <div className="absolute bottom-28 left-8 sm:left-16 md:left-24 lg:left-32 xl:left-40 transform translate-y-1/2">
        <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
          Computer Engineering
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-white">
          142,765 Computer Engineers follow this
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
