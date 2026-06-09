"use client";
import React, { useRef } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  gitLabel,
  previewUrl,
  previewLabel,
  caseStudySlug,
}) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-200 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="glass-card overflow-hidden h-full">
        <div
          className="h-52 md:h-56 relative group"
          style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#0a0a0f]/0 group-hover:bg-[#0a0a0f]/70 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
            <Link
              href={gitUrl}
              target="_blank"
              aria-label={gitLabel || "View source code on GitHub"}
              title={gitLabel || "View on GitHub"}
              className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center hover:border-accent-cyan hover:bg-white/10 transition-colors"
            >
              <CodeBracketIcon className="h-6 w-6 text-white" />
            </Link>
            {previewUrl ? (
              <Link
                href={previewUrl}
                target="_blank"
                aria-label="View live preview"
                className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center hover:border-accent-cyan hover:bg-white/10 transition-colors"
              >
                <EyeIcon className="h-6 w-6 text-white" />
              </Link>
            ) : previewLabel ? (
              <span className="px-3 py-1.5 rounded-full border border-white/20 text-xs font-mono text-accent-cyan max-w-[140px] text-center">
                {previewLabel}
              </span>
            ) : null}
          </div>
        </div>
        <div className="p-5">
          <h5 className="font-heading text-lg font-semibold text-white mb-2">
            {title}
          </h5>
          <p className="text-[#ADB7BE] text-sm line-clamp-3">{description}</p>
          {!previewUrl && previewLabel && (
            <p className="mt-2 text-xs font-mono text-accent-cyan">
              {previewLabel}
            </p>
          )}
          {caseStudySlug && (
            <Link
              href={`/projects/${caseStudySlug}`}
              className="inline-block mt-3 text-xs font-mono text-accent-cyan hover:text-white transition-colors"
            >
              Read case study →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
