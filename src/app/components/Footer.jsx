import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">DG</span>
        <p className="text-slate-600">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
