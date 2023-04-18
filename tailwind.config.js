/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cblack: "#242424",
        cmain: "#EC442D",
        cgray: "#ADADAD",
        cbg: "#F5F5F5",
      },
      screens: {
        xsm: "329px",
        mobile: "410px",

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      height: {
        heroimg: "400px",
      },
    },
  },
  plugins: [],
};
