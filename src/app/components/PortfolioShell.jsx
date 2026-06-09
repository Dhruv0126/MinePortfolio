"use client";
import React from "react";
import ThemeProvider from "./ThemeProvider";
import PageLoader from "./PageLoader";
import BackgroundEffects from "./BackgroundEffects";
import CursorSpotlight from "./CursorSpotlight";
import CommandPalette from "./CommandPalette";
import PortfolioAssistant from "./PortfolioAssistant";
import BackToTop from "./BackToTop";
import EasterEgg from "./EasterEgg";

const PortfolioShell = ({ children }) => {
  return (
    <ThemeProvider>
      <PageLoader />
      <BackgroundEffects />
      <CursorSpotlight />
      {children}
      <CommandPalette />
      <PortfolioAssistant />
      <BackToTop />
      <EasterEgg />
    </ThemeProvider>
  );
};

export default PortfolioShell;
