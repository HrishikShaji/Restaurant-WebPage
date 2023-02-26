/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-white": "#FFE6E6",
      "primary-red": "#FF2626",
      "secondary-red": "#BD1616",
      "primary-black": "#000000",
    },
    extend: {
      backgroundImage: {
        hero: "url('/assets/hero.jpg')",
        about1: "url('/assets/1.jpg')",
        about2: "url('/assets/2.jpg')",
        about3: "url('/assets/3.jpg')",
        about4: "url('/assets/4.jpg')",
        about5: "url('/assets/5.jpg')",
        about6: "url('/assets/6.jpg')",
      },
    },
  },
  plugins: [],
};
