/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        mint: {
          50: "#F0FAF8",
          100: "#E0F5F0",
          200: "#C0EBE1",
          300: "#90D9CC",
          400: "#5EC4B5",
          500: "#3AADA0",
        },
        sage: {
          50: "#EAF7F4",
          100: "#D4EFE9",
          200: "#AADFD4",
          300: "#7BCEC2",
        },
        peach: {
          50: "#FFF4F0",
          100: "#FFE8DF",
          200: "#FFD0BC",
        },
        lavender: {
          50: "#F6F2FF",
          100: "#EDE6FF",
          200: "#D8CCFF",
        },
        warm: {
          50: "#FAFAF8",
          100: "#F5F3EE",
          200: "#EDE8DF",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
}
