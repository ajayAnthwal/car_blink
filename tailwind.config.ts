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
        primary: {
          orange: "#FF7A1A",
          "orange-dark": "#F26B00",
          navy: "#0B1739",
          "navy-light": "#111C44",
        },
        secondary: {
          blue: "#2563EB",
        },
        success: "#16A34A",
        danger: "#DC2626",
        warning: "#FACC15",
        neutral: {
          bg: "#F8FAFC",
          "text-muted": "#64748B",
          "text-dark": "#0F172A",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #FF7A1A 0%, #2563EB 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

