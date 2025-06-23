"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  useEffect(() => {
    // Removed floating text animation logic
  }, []);

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left Content Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "",
                1000,
                "Dhruv Gupta",
                1000,
                "AI/ML Engineer",
                1000,
                "Generative AI Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m a passionate IT student with expertise in data analytics, machine learning, and web development. 
            I love crafting innovative solutions to real-world problems.
          </p>
          <div>
          <a
  href="mailto:dhruv06012@gmail.com"
  className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-200"
>
  Hire Me
</a>

            <a
    href="/DhruvGupta_Resume(U).pdf"
    download="DhruvGupta_Resume(U).pdf"
    className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 hover:transform hover:scale-105 hover:shadow-lg transition-transform duration-200"
  >
    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
      Download CV
    </span>
  </a>
          </div>
        </motion.div>
  {/* Image Section with Enhanced Purple Effects */}
  <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: [0, -12, 0], // Vertical floating motion
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 relative"
        >
<div className="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]"> {/* Reduced size */}            {/* Primary Purple Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-2xl animate-pulse" />
            
            {/* Image Container */}
            <div className="relative z-10 rounded-full overflow-hidden border-2 border-purple-500/30 w-full h-full">
              <Image
                src="/images/DG.png"
                alt="Dhruv Gupta Profile"
                className="object-cover w-full h-full"
                width={400}
                height={400}
                priority
                quality={100}
                onError={(e) => {
                  console.error("Image load error:", e.target.src);
                  e.target.src = '/fallback-image.png';
                }}
              />
            </div>

            {/* Secondary Glow Layer */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-700/20 to-transparent rounded-full blur-lg animate-pulse-slow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;