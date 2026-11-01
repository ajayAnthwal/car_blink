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
        shimmer: {
          "0%": { transform: "translateX(-150%) skewX(-15deg)" },
          "100%": { transform: "translateX(250%) skewX(-15deg)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(12, 121, 216, 0.45), 0 4px 14px rgba(12, 121, 216, 0.3)",
            transform: "translateY(0)",
          },
          "50%": {
            boxShadow: "0 0 0 8px rgba(12, 121, 216, 0), 0 8px 24px rgba(12, 121, 216, 0.45)",
            transform: "translateY(-1.5px)",
          },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;