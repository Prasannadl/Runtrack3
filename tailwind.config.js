/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Specify the files where Tailwind will be used
  ],
  theme: {
    extend: {
      colors: {
        netflixRed: '#e50914', // Example custom color
      },
    },
  },
  plugins: [],
};

