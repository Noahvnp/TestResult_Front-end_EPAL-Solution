/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTeal: "#59C8E0",
        primaryGray: "#F8F8F8",
        secondary: "#178EA8",
        secondaryLighter: "#59C8E0",
        secondaryLink: "#9CE4F2",
        secondaryLinkLighter: "#E0FAFF",
        ink: "#172B4D",
        inkTeal: "#178EA8",
        inkLight: "#6B778C",
        inkLighter: "#FFFFFF",
        backgroundLighter: "#F8F8F8",
        backgroundFooter: "#2C3749",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "6rem",
        },
      },
    },
  },
  plugins: [],
};
