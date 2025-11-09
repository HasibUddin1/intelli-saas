const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: { extend: {} },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
