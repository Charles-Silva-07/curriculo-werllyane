/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" }, screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        navy: { DEFAULT: "#17233C", deep: "#0F1829", soft: "#22324F" },
        brand: { DEFAULT: "#2F5D8C", deep: "#244A71" },
        sky: { DEFAULT: "#EAF2F8", line: "#D5E3EF" },
        mist: "#F5F7FA",
        slate: { text: "#5F6673" },
        // dourado discreto: "DEFAULT" só em detalhes/fundo escuro; "deep" para texto sobre fundo claro (contraste AA)
        gold: { DEFAULT: "#C7A86B", deep: "#8A6B31", soft: "#F6EFE1" },
      },
      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -14px rgba(23, 35, 60, 0.14)",
        lift: "0 24px 60px -22px rgba(23, 35, 60, 0.30)",
        photo: "0 40px 80px -30px rgba(15, 24, 41, 0.55)",
      },
    },
  },
  plugins: [],
};
