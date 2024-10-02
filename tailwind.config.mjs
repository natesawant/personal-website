/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'long-exposure': "url('/img/longexposure.jpg')",
				'skyline': "url('/img/skyline.png')",
				'franconia': "url('/img/franconia.png')",
			},
			colors: {
				'off-white': "#C5C5C5",
				'accent-red': "#F30600",
				'skill-red': "#BE0500",
				'card-select': '#141414'
			}
		},
	},
	plugins: [require('tailwindcss-font-inter')]
}
