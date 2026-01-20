/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        orbit: "orbit calc(var(--duration) * 1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(var(--angle, 0deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle, 0deg) * -1))",
          },
          "100%": {
            transform:
              "rotate(calc(var(--angle, 0deg) + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle, 0deg) + 360deg) * -1))",
          },
        },
      },
    },
  },
  plugins: [],
};