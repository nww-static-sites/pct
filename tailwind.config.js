/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pop300: ["poppins-300"],
        pop400: ["poppins-400"],
        pop500: ["poppins-500"],
        pop600: ["poppins-600"],
        pop700: ["poppins-700"],
        rob300: ["roboto-300"],
        rob400: ["roboto-400"],
        rob500: ["roboto-500"],
        rob700: ["roboto-700"],
        rob800: ["roboto-800"],
        playFair700: ["play-fair-700"],
      },
      colors: {
        primary: "var(--color-black)",
        primary45: "var(--color-black-45)",
        primary05: "var(--color-black-05)",
        primary10: "var(--color-black-10)",
        secondary: "var(--color-whitesmoke)",
        red: "var(--color-red)",
        darkRed: "var(--color-dark-red)",
        red32: "var(--color-red-32)",
        red80: "var(--color-red-80)",
        ["black-content"]: "var(--color-black-content)",
        ["white-content"]: "var(--color-white-content)",
        gret: "var(--color-gret)",
        gret28: "var(--color-gret-28)",
        white: "var(--color-white)",
        white200: "var(--color-white-200)",
        gray: "var(--color-borderGray)",
      },
      screens: {
        lg: "1124px",
      },
      height: {
        ["full-20"]: "calc(100% - 20px)",
      },
      boxShadow: {
        card: "0px 4px 24px rgba(0,0,0,0.16)",
      },
      
      
      animation: {
        ["from-top"]: "topToBottom 1s ease-in-out",
        ["from-right"]: "rightToLeft 1s ease-in-out",
      },
      keyframes: {
        topToBottom: {
          "0%": {
            opacity: 0,
            transform: "scale(20%)",
            // ["animation-timing-function"]: "cubic-bezier(0, 0, 1, 1)",
            ["transform-origin"]: "40px 40px",
          },
          "100%": {
            opacity: 1,
            transform: "scale(100%)",
            // ["animation-timing-function"]: "cubic-bezier(0, 0, 0.2, 1)",
            ["transform-origin"]: "40px 40px",
          },
        },
        rightToLeft: {
          "0%": {
            opacity: 0.5,
            // ["animation-timing-function"]: "cubic-bezier(0, 0, 1, 1)",
            transform: "translateX(40%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0%)",
            // ["animation-timing-function"]: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
