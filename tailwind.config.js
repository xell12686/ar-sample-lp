/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        // sm: '0.8rem',
        // base: '1rem',
        // xl: '1.25rem',
        '2xl': '25px',
        '4xl': '35px',
        '5xl': '50px',
      },
      colors: {
        primary: "#22333B",
        secondary: "#ECE8E3",
      },
    },
  },
  plugins: [],
};
