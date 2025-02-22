"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const achievementsList = [
  { metric: "Projects", value: 5, postfix: "+" },
  { metric: "Internships", value: 2},
  { metric: "Certifications", value: 3, postfix: "+"},
  { metric: "Years", value: 2, postfix: "+" },
];

const AchievementsSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" ref={ref}>
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <div className="text-white text-4xl font-bold">
              {isInView && (
                <CountUp
                  end={achievement.value}
                  duration={2}
                  suffix={achievement.postfix || ""}
                />
              )}
            </div>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;