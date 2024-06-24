import React from "react";
import HeroImg from "../assets/HeroImg.png";
import HeroGrad from "../assets/HeroGradient.png";
import { IoMdArrowBack } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[440px]">
      <img
        src={HeroImg}
        alt="Hero"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="lg:p-2 md:border">
        <IoMdArrowBack size={24} />
      </div>
      <img
        src={HeroGrad}
        alt="Hero Grad"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute md:top-[325px] md:left-[200px] top-[325px] left-[80px] transform -translate-y-1/2">
        <p className="text-4xl font-bold text-white mb-2">
          Computer Engineering
        </p>
        <p className="text-xl text-white">
          142,765 Computer Engineers follow this
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
