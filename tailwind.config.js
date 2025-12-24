/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md", "./static/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#E53E3E", // Red-600
        secondary: "#1a1a1a", // Dark for contrast elements
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Oswald", "sans-serif"], // Popular gaming font
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@iconify/tailwind")],
};
