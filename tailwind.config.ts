import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050505",
        card: "#111111",
        "card-hover": "#161616",
        border: "rgba(255, 255, 255, 0.08)",
        "border-glow": "rgba(0, 229, 153, 0.3)",
        emerald: {
          accent: "#00E599",
          glow: "rgba(0, 229, 153, 0.15)",
        },
        cyan: {
          accent: "#06B6D4",
        },
        purple: {
          accent: "#8B5CF6",
        },
        muted: {
          DEFAULT: "#9CA3AF",
          foreground: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(0, 229, 153, 0.3)",
        "purple-glow": "0 0 40px -10px rgba(139, 92, 246, 0.25)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 20%, rgba(0, 229, 153, 0.12) 0%, rgba(139, 92, 246, 0.08) 35%, transparent 70%)",
        "card-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
