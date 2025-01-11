import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: "#1c1c22",
			accent: {
				DEFAULT: '#00ff99',
				hover: "#00e187",
			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '960px',
			'xl': '1200px',
			'2xl': '1536px',
		},
		fontFamily: {
			primary: "var(--font-jetbrainsMono)",
		},
		// keyframes: {
		// 	"accordion-down": {
		// 		from:  { heigth: "0" },
		// 		to: { heigth: "var(--radix-accordion-content-height)" },
		// 	},
		// 	"accordion-up": {
		// 		from: { heigth: "var(--radix-accordion-content-height)" },
		// 		to: { heigth: "0" },
		// 	},
		// },
		// animation: {
		// 	"accordion-down": "accordion-down 0.2s ease-out",
		// 	"accordion-up": "accordion-up 0.2s ease-out"
		// }
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
