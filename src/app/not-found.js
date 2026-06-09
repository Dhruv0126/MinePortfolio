"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#0a0a0f]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="font-mono text-accent-cyan text-sm mb-4">{"// 404"}</p>
        <h1 className="font-heading text-6xl md:text-8xl font-bold gradient-text mb-4">
          Lost in the embedding space
        </h1>
        <p className="text-[#ADB7BE] max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-cyan text-white font-medium hover:scale-105 transition-transform"
        >
          Back to portfolio
        </Link>
      </motion.div>
    </main>
  );
}
