import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#40566D",
        "primary-100": "#58728D",
        "primary-200": "#0F553E",
        "primary-300": "#7ABFA8",
        "primary-400": "#51E2B2",
        "secondary": "#2F4256",
        "secondary-100": "#192839",
        "white": "#ffffff",
        "white-700": "#FFFFFFB2",
        "white-500": "#F5F8FF",
        "white-200": "#FFFFFFCC",
        "white-600": "#FFFFFF99",
        "white-800": "#FFFFFF99",
        "white-900": "#FFFFFFE5",
        "green-600": "#167B59",
        "green-700": "#136449",
        "grey-900": "#40566D",
        "dark": '#243547',
        "blue": '#2243B6',
      },
      borderColor:{
        "gray-light-10": '#E6E6E6',
        "primary-200": '#167B5952',
        "primary-300": '#167B593D',
        "primary-400": '#6C849D2E',
        "white-700": "#FFFFFFB2",
      },
      backgroundColor:{
        "green-600": "#167B59",
        "primary-300": '#167B593D',
        "mint-cream": "#F2FFFB",
        "green-700": "#136449",
        "dark-100": "#0C1927",
        "white-100": "#FFFFFF1A",
        
      }
    },
  },
  plugins: [],
} satisfies Config;
