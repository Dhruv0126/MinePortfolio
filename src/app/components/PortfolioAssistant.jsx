"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { findAnswer } from "../data/portfolioKnowledge";

const PortfolioAssistant = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Dhruv's portfolio assistant. Ask me about projects, skills, education, or how to get in touch.",
    },
  ]);
  const [input, setInput] = useState("");

  const send = (text) => {
    if (!text.trim()) return;
    const userMsg = { role: "user", content: text.trim() };
    const reply = { role: "assistant", content: findAnswer(text) };
    setMessages((m) => [...m, userMsg, reply]);
    setInput("");
  };

  const suggestions = [
    "Tell me about RAG ChatFlow",
    "What are your skills?",
    "How can I contact you?",
  ];

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        aria-label="Open portfolio assistant"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full glass-card hover:border-primary-500/50 transition-colors shadow-lg"
      >
        <ChatBubbleLeftRightIcon className="w-5 h-5 text-accent-cyan" />
        <span className="text-sm font-medium text-white hidden sm:inline">
          Ask about my work
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md glass-card flex flex-col max-h-[70vh] shadow-2xl"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <div>
                  <p className="font-heading font-semibold text-white">Portfolio Assistant</p>
                  <p className="font-mono text-xs text-accent-cyan">{"// powered by knowledge base"}</p>
                </div>
                <button onClick={() => setOpen(false)} aria-label="Close chat">
                  <XMarkIcon className="w-5 h-5 text-[#ADB7BE] hover:text-white" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px]">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`text-sm rounded-xl px-3 py-2 max-w-[90%] ${
                      msg.role === "user"
                        ? "ml-auto bg-primary-500/30 text-white"
                        : "bg-white/5 text-[#ADB7BE]"
                    }`}
                  >
                    {msg.content}
                  </div>
                ))}
              </div>

              {messages.length === 1 && (
                <div className="px-4 pb-2 flex flex-wrap gap-2">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-[#ADB7BE] hover:text-white hover:border-primary-500/50 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send(input);
                }}
                className="flex gap-2 p-4 border-t border-white/10"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about projects, skills..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none focus:border-primary-500/50 placeholder:text-[#ADB7BE]"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="p-2 rounded-lg bg-primary-500 hover:bg-primary-600 transition-colors"
                >
                  <PaperAirplaneIcon className="w-5 h-5 text-white" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioAssistant;
