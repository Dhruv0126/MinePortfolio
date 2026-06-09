"use client";
import React, { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

const TextScramble = ({ text, className = "", duration = 1200 }) => {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.floor(duration / 30);
    const target = text;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setDisplay(
        target
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (progress > i / target.length) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (frame >= totalFrames) {
        setDisplay(target);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text, duration]);

  return <span className={className}>{display}</span>;
};

export default TextScramble;
