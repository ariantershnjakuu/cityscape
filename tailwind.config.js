/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    },
    // Other loaders for different file types...
  ],
  plugins: [],
};
