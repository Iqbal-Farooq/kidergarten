/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        light: 'var(--light)',
        dark: 'var(--dark)',
        success:'var(--success)',
        danger:'var(--danger)',
        warning:'var(--warning)',
      },
    },
  },
  plugins: [],
};
