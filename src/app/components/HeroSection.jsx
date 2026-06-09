"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import TextScramble from "./TextScramble";
import NeuralNetworkCanvas from "./NeuralNetworkCanvas";

const HeroSection = () => {
  return (
    <section className="lg:py-16 relative overflow-hidden">
      <NeuralNetworkCanvas />

      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="flex items-center gap-2 justify-center sm:justify-start mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="font-mono text-xs text-accent-cyan">
              {"// available for opportunities"}
            </span>
          </div>

          <h1 className="font-heading text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-bold text-balance">
            <span className="gradient-text gradient-text-animated">
              Hello, I&apos;m
            </span>
            <br />
            <TextScramble
              text="Dhruv Gupta"
              className="text-white"
              duration={1400}
            />
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#ADB7BE]">
              <TypeAnimation
                sequence={[
                  "AI/ML Engineer",
                  2000,
                  "Generative AI Builder",
                  2000,
                  "RAG & Vision Systems",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl text-pretty max-w-xl">
            I build RAG systems, computer vision pipelines, and ML products
            that ship.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://mail.google.com/mail/?view=cm&to=dhruv06012@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-center bg-gradient-to-r from-primary-500 to-accent-cyan text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 hover:scale-105 transition-all duration-200"
            >
              Hire Me
            </a>
            <a
              href="/DhruvGupta__Resume.pdf"
              download="DhruvGupta__Resume.pdf"
              className="px-6 py-3 rounded-full text-center border border-white/20 text-white font-medium hover:border-accent-cyan hover:scale-105 transition-all duration-200"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative w-[250px] h-[250px] lg:w-[320px] lg:h-[320px]">
            <div className="absolute inset-0 rounded-full conic-border p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
            </div>
            <div className="absolute inset-[3px] bg-gradient-to-br from-purple-500/30 to-cyan-500/20 rounded-full blur-2xl animate-pulse-glow" />

            <div className="absolute inset-[6px] z-10 rounded-full overflow-hidden border border-white/10">
              <Image
                src="/images/DG.png"
                alt="Dhruv Gupta Profile"
                className="object-cover w-full h-full"
                width={400}
                height={400}
                priority
                quality={100}
              />
            </div>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 glass-card px-4 py-1.5 text-xs font-mono text-accent-cyan whitespace-nowrap">
              AI/ML · Python · RAG
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
