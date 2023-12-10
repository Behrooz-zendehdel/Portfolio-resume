/** @type {import('tailwindcss').Config} */
// #
export default {
  //support file tailwind
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      //set color basic project
      colors: {
        primaryColor: "#8873ef",
        headingColor: "#081e21",
        smallTextColor: "#193256",
      },
    },
  },
  plugins: [],
};
