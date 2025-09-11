import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nothing: ['nothingYouCanDo'],
        dynapuff: ['dynapuff'],
      },
      colors: {
        'tahiti': '#00ffec',
				'banana': '#ebd934',
        'midnight': '#121063',
        'primary': '#7367F0',
        'link': "#52a8ff",
      },
    },
  },
  plugins: [],
};
export default config;