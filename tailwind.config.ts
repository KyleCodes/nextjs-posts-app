import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",

        // New colors
        red: "#ff4d4d",
        black: "#000000",
        white: "#ffffff",
        brown: "#a52a2a",
        "brown-light": "#d2b48c",
        "brown-dark": "#654321",
        beige: "#f5f5dc",
        "blue-dark": "#0056b3",
        "blue-light": "#a3d8ff",
        "green-light": "#b0e57c",
        "green-dark": "#006400",
        "orange-dark": "#cc5500",
        "orange-light": "#ffd280",
        "pink-light": "#ffccff",
        "purple-light": "#dcd0ff",
        "red-light": "#ff9999",
        "yellow-light": "#fff8b3",
        "yellow-dark": "#b8860b",
      },
    },
  },
  plugins: [],
} satisfies Config;
