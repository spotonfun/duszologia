const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		// fontFamily: {
		// 	sans: ["Grandstander", "sans-serif"],
		// 	serif: ["Bitter", "serif"],
		// },
		fontFamily: {
			serif: ["Mali", ...defaultTheme.fontFamily.serif],
			sans: ["Arima", ...defaultTheme.fontFamily.sans],
		},
		extend: {
			fontFamily: {
				mali: ["Mali", ...defaultTheme.fontFamily.serif],
				grandstander: ["Grandstander", ...defaultTheme.fontFamily.sans],
				bitter: ["Bitter", ...defaultTheme.fontFamily.sans],
				scopeOne: ["Scope One", ...defaultTheme.fontFamily.serif],
				spectral: ["Spectral", ...defaultTheme.fontFamily.serif],
				arima: ["Arima", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				purple100: "#D8B3DD",
				purple150: "#BB83CD",
				purple200: "#B362BC",
				purple250: "#B24997",

				purple300: "#93489E",
				purple350: "#A43985",
				purple400: "#8D327D",
				purple450: "#7B3D7E",

				purple500: "#86306B",
				purple550: "#5A407C",
				purple600: "#772964",
				purple650: "#57365D",

				purple700: "#652757",
				purple750: "#4B2A4B",
				purple800: "#2D3252",
				purple850: "#38233B",

				purple900: "#302333",
				// 'purple400': '#301D31',
				// 'purple400': '#261C2A',
				// 'purple400': '#241B27',

				purple950: "#1B1620",
				// 'purple400': '#161319,
				// 'purple400': '#151119,
				// 'purple400': '#141014,

				// 'purple400': '#100F14',
				// 'purple400': '#0F0D10',
				// 'purple400': '#0E0D11',
				// #0B0B0E,
				// #0A090B, #07080A, #070809,

				purple999: "#090708",
			},
		},
	},
	plugins: [],
};
