/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: { max: "400px" },
    },
    extend: {
      fontFamily: {
        "dm-sans": "DM Sans",
      },
    },
  },
  plugins: [],
};
