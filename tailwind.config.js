/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Include the main HTML file
    './src/**/*.{js,jsx,ts,tsx}', // Specify all paths where Tailwind CSS will be applied
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
