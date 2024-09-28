import React from "react";
import { GrEdit } from "react-icons/gr";

const CustomButton = () => {
  return (
    <button
      style={{
        width: "60px",
        height: "60px",
        gap: "0px",
        opacity: "0px",
        boxShadow: "0px 0px 2px 0px #00000014, 0px 2px 4px 0px #0000002E",
        background: "linear-gradient(180deg, #FF5C5C 0%, #F0568A 100%)",
        borderRadius: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <GrEdit size={24} />
    </button>
  );
};

export default CustomButton;
