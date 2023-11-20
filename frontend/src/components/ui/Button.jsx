import React from "react";

const Button = ({ children, variant, clickHandler, outlined }) => {
  return (
    <button
      onClick={clickHandler}
      className={`${
        outlined
          ? "text-[#f6ac7a] bg-white border-[#f6ac7a] border"
          : "bg-[#f6ac7a] text-white"
      } py-3.5 font-medium text-base flex items-center justify-center ${
        variant === "small" ? "rounded-lg pl-4 pr-6" : "rounded-xl w-full"
      } text-center cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
