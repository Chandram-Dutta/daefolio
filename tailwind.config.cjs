/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			boxShadow: {
				'brutalism': '10px 10px 0px 0px rgb(0 0 0 / 0.25)',
			},
			fontFamily: {
				'abril-fatface': ['"Abril Fatface"', 'cursive'],
				'unbounded': ['"Unbounded"', 'cursive']
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
