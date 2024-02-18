/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['"DM Sans"','ui-sans-serif', 'system-ui', ],
			'serif': ['ui-serif', 'Georgia', ],
			'mono': ['ui-monospace', 'SFMono-Regular', ],
			'display': ['Oswald', ],
		},
		extend: {
			// fontFamily: {
			// 	sans: ['"DM Sans"',sans-serif],
			// },
		}
	},
	plugins: [],
}
