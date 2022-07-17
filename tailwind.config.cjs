/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
			fontFamily: {
				suisse: ["Suisse", "sans-serif"]
			  },
		}
  },
  plugins: [],
}
