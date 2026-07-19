import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors — matched exactly to the CarBlink logo
        primary: {
          blue: "#0C79D8",
          "blue-dark": "#0A63B0",
          navy: "#0B1220",
          "navy-light": "#16213E",
        },
        accent: {
          orange: "#FB6E01",
          "orange-dark": "#DD6101",
        },
        success: "#16A34A",
        danger: "#DC2626",
        warning: "#FACC15",
        neutral: {
          "hero-bg": "#EFF6FF",
          bg: "#F8FAFC",
          "text-muted": "#64748B",
          "text-dark": "#0F172A",
          white: "#FEFEFE",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {},
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;