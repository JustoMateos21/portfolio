/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "100px",
        md: "750px",
      },
    },
    fontFamily: {
      signature: ["Edu TAS Beginner"],
    },
  },
  plugins: [],
};
