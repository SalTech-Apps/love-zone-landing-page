/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    theme: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ['"Itim" cursive'],
        body: ['"Sniglet", system-ui'],
      },
    },
    extend: {
      colors: {
        primary: "#FF5672",
        pink: "#FF56720F",
        "text-black": "#21201F",
      },
    },
  },
  plugins: [],
};
