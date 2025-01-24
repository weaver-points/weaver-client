import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enable dark mode using the class strategy
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)", "sans-serif"],
      },
      textColor: {
        secondary: "#808080",
      },
    },
  },
  plugins: [],
} satisfies Config;
