/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    boxShadow: {
      big: "0px 7px 32px rgb(0 0 0 / 35%);",
      massive:
        "0px 64px 64px rgba(0, 0, 0, 0.15), 0px 32px 32px rgba(0, 0, 0, 0.15), 0px 16px 16px rgba(0, 0, 0, 0.15), 0px 8px 8px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.15);",
    },
    colors: {
      white: colors.white,
      black: colors.black,
      pink: colors.pink,
      indigo: colors.blue,
      transparent: colors.transparent,
      onyx: {
        50: "#F1F1F4",
        100: "#E3E3E8",
        200: "#C8C6D2",
        300: "#AFADBE",
        400: "hsl(73, 70%, 45%)",  // green
        500: "hsl(175, 64%, 35%)", // teal
        600: "#605D75",
        700: "#4B485B",
        800: "#34323F",
        900: "#1f1e26",
        950: "#1c1b22",
      },
      blue: {
        50: "#20948b",
        100: "#ECEDFD",
        200: "#D0D1FB",
        300: "hsl(196, 72%, 52%)",
        400: "hsl(203, 61%, 30%)",
        500: "hsl(203, 62%, 19%)",
        600: "hsl(203, 62%, 9%)",
      },
    },

    fontFamily: {
      sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
      display: [
        ["Satoshi", ...defaultTheme.fontFamily.sans],
        { fontVariationSettings: '"wdth" 125' },
      ],
    },
    extend: {
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),

    require("@tailwindcss/aspect-ratio"),
  ],
};
