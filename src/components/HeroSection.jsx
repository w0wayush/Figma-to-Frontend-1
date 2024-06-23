import React from "react";
import HeroImg from "../assets/HeroImg.png";
import HeroGrad from "../assets/HeroGradient.png";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[440px]">
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
      <div className="absolute top-[325px] left-[200px] transform -translate-y-1/2">
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
