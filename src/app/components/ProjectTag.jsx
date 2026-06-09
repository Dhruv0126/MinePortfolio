"use client";
import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500 bg-primary-500/10"
    : "text-[#ADB7BE] border-white/10 hover:border-white/30 hover:text-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border px-5 py-2 text-sm font-medium cursor-pointer transition-all duration-200`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
