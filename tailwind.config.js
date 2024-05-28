/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,tsx,js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#212529",
          secondary: "#999999",
          tertiary: "#151030",
          gold: "#C19D56",
          "black-100": "#100d25",
          "black-111": "#111111",
          "black-200": "#090325",
          "white-100": "#f3f3f3",
          navbar: "#f4f5f7",
        },
        boxShadow: {
          card: "0px 35px 120px -15px #211e35",
        },
        screens: {
          xs: "450px",
        },
        backgroundImage: {
        //   "hero-pattern": "url('/src/assets/herobg.png')",
          "hero-pattern": "black",
        },
      },
    },
    plugins: [],
  };