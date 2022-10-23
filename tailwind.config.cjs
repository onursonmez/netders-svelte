/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/**/*.{html,js,svelte,ts}',
      './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    boxShadow: {
      md: '0 0.25rem 0.75rem rgb(0 0 0 / 5%)',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}
