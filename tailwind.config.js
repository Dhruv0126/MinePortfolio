/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Replace deprecated color names with updated values
        primary: { "400": "#9333ea", "500": "#7e22ce" },
        secondary: { "500": "#3b82f6", "600": "#2563eb" },
        // Add modern color palette (formerly blueGray)
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          // ...other shades can be added as needed
        },
      },
    },
  },
  plugins: [],
};
