import daisyui from "daisyui";
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        menu: "1fr 1fr 1fr 1fr",
      },
      colors: {
        Light: {
          primary: "#6e7074",
          secondary: "#4F4F4F",
          accent: "#4ade80",
          loginBtn: "#2F80ED",
        },
        Dark: {
          primary: "#121412",
          secondary: "#040204",
          accent: "#6366f1",
        },
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [["light", "dark", "cupcake"]],
  },
};
