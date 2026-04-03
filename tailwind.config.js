/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "ted-red": "#E62B1E",
        "background": "#0A0A0A",
        "surface": "#131313",
        "surface-2": "#1a1a1a",
      },
      fontFamily: {
        headline: ["var(--font-bebas)"],
        body: ["var(--font-dm-sans)"],
        logo: ["var(--font-geist)"],
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        "2xl": "1.5rem",
        "3xl": "2.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
