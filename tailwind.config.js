/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        bermuda: "#78dcca",
        bluecredis: "#13263C",
        whitecredis: "#f1f1f1",
        blackcredis: "#1e1e1e",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        DEFAULT: "4px",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
        namikaze: "100%",
      },
      backgroundImage: {
        "banner-pattern": "url('/img/Banner.svg')",
        "hero-pattern": "url('/img/Hero.svg')",
        "jangkauan-pattern": "url('/img/JangkauanBg.png')",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
