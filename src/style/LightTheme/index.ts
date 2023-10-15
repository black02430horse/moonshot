import { createTheme } from '@mui/material/styles';

const themeColor = {
	colors: {
		white: '#ffffff',
		black: '#000000',
		primary00: "#ffffff",
		primary10: "#F9F5FF",
		primary20: "#EEF4FF",
		primary30: "#FDF2FA",
		primary40: "#ECFDF3",
		primary50: "#F0F9FF",
		primary60: "#FEF6EE",
		secondary10: "#7F56D9",
		secondary00: "#6941C6",
	}
};

const themeFont = {
	fonts: {
		mainFont: 'Inter'
	},
	fontWeights: {
		semibold: 900,
		regular: 600,
		semiLight: 500,
		light: 400
	},
	fontColors: {
		primary00: "#475467",
		primary10: "#D6BBFB",
	}
};

export const LightTheme = createTheme({
	...themeColor,
	...themeFont,
	palette: {
		mode: 'light'
	}
});