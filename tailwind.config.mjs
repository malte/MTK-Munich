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
		fontSize: {
			'sm': ['0.8rem', '1rem'],
			'base': ['1rem', '1.25rem'],
			'lg': ['1.25rem', '1.5rem'],
			'xl': ['1.563rem', '1.75rem'],
			'2xl': ['1.935rem', '2rem'],
			'3xl': ['2.441rem', '3rem'],
			'4xl': ['3.052rem', '3.5rem'],
			'5xl': ['3.815rem', '4rem'],
		},
		extend: {
		    colors: {
			'terracotta': 'rgba(253,78,78,1.0)',
			'lazuli': 'rgba(78,78,198,1.0)',
		}
		}
	},
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
