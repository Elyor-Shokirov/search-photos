// /** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandColor: "#85d1f6",
        customParagraphColor: "#000",
      },
      fontFamily: {
        monserat: "Montserrat, sans-serif",
      },
      backgroundImage: {
        loginPageBg:
          "url('/img/bg_img_loginPage.jpg'), linear-gradient(rgba(135, 80, 156, 0.9), rgba(135, 80, 156, 0.9))",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula", "winter"],
  },
};
