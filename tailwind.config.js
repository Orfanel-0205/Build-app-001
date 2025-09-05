/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // 
        background: {
          dark: "#0F172A",  // app bg
          light: "#FFFFFF", // cards, inputs
          muted: "#334155", // secondary bg
        },

        //  Brand & Accents
        primary: {
          DEFAULT: "#10B981", // CTA, buttons
          dark: "#059669",    
          light: "#6EE7B7",   
        },
        accent: {
          DEFAULT: "#F59E0B", 
          dark: "#D97706",
          light: "#FCD34D",
        },
        highlight: {
          DEFAULT: "#00E5FF", // "LOGIN" title 
        },

        // 🖋 Text
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
          placeholder: "#9CA3AF",
        },

        // for status colors
        success: "#22C55E",
        error: "#EF4444",
        warning: "#F97316",
        info: "#3B82F6",
      },
    },
  },
  plugins: [],
};
