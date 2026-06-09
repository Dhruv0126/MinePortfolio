"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { scrollReveal } from "../lib/animations";
import SectionHeading from "./SectionHeading";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setEmailSubmitted(true);
        setFormValues({ email: "", subject: "", message: "" });
      } else {
        const body = await response.json().catch(() => ({}));
        setError(
          body.error ||
            "Failed to send message. Please try again or email dhruv06012@gmail.com directly."
        );
      }
    } catch {
      setError(
        "Network error. Please try again or email dhruv06012@gmail.com directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-8 md:py-12">
      <SectionHeading
        label="// contact"
        title="Let's Connect"
        subtitle="Open to internships and AI/ML opportunities — my inbox is always open"
        align="left"
      />

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-[#ADB7BE] mb-6 max-w-md text-pretty">
            Whether you have a question, a project idea, or just want to say hi —
            I&apos;ll do my best to get back to you promptly.
          </p>
          <div className="socials flex flex-row gap-3">
            <Link
              href="https://github.com/Dhruv0126"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 hover:border-primary-500/50 transition-colors text-[#ADB7BE] hover:text-white"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/dhruvgupta0126"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-2 hover:border-primary-500/50 transition-colors"
            >
              <Image src="/linkedin-icon.svg" alt="Linkedin Icon" width={28} height={28} />
            </Link>
          </div>
          <p className="mt-6 font-mono text-sm text-accent-cyan">
            dhruv06012@gmail.com
          </p>
        </motion.div>

        <motion.div
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          {emailSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
              <p className="font-heading text-xl font-semibold text-white">
                Message sent!
              </p>
              <p className="text-[#ADB7BE] text-sm mt-2">
                Thanks for reaching out. I&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setEmailSubmitted(false)}
                className="mt-6 text-sm font-mono text-accent-cyan hover:text-white transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="text-white block mb-1.5 text-sm font-medium">
                  Your email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-white/5 border border-white/10 placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5 focus:border-primary-500/50 outline-none"
                  placeholder="your-email@example.com"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="subject" className="text-white block text-sm mb-1.5 font-medium">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-white/5 border border-white/10 placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5 focus:border-primary-500/50 outline-none"
                  placeholder="Just saying hi"
                  value={formValues.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="message" className="text-white block text-sm mb-1.5 font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="bg-white/5 border border-white/10 placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-2.5 focus:border-primary-500/50 outline-none resize-none"
                  placeholder="Let's talk about..."
                  value={formValues.message}
                  onChange={handleInputChange}
                />
              </div>
              {error && (
                <p className="text-sm text-red-400" role="alert">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-primary-500 to-accent-cyan hover:shadow-lg hover:shadow-primary-500/20 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-all disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;
