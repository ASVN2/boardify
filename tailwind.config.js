/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-res': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-small': 'repeat(auto-fit, minmax(120px, 1fr))',
        'auto-brands': 'repeat(auto-fit, minmax(220px, 1fr))',
      },
    },
  },
  plugins: [],
};
