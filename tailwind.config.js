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
		extend: {
			fontFamily: {
				mali: ["Mali", "sans-serif"],
				grandstander: ["Grandstander", "sans-serif"],
				bitter: ["Bitter", "serif"],
				scopeOne: ["Scope One", "serif"],
				spectral: ["Spectral", "serif"],
			},
		},
	},
	plugins: [],
};
