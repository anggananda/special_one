/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5F264A",
      },
      fontFamily: {
        "poppins": "Poppins",
        "great-vibes": "Great Vibes",
        "pinyon-script": "Pinyon Script",
      },
    },
  },
  plugins: [],
};
