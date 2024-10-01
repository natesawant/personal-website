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
		},
	},
	plugins: [],
}
