import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
	primary: "#FF502F",
	secondary: "#32DBC6",

	white: "#EBEFD0",
	Green: "#116530",
	red: "#E40017",
	black: "#000000",
	black2: "#1B1717",
	gray: "#212125",
	gray1: "#1f1f1f",
	lightGray: "#3B3B3B",
	lightGray2: "#212125",
	lightGray3: "#757575",
	transparentWhite: "rgba(255, 255, 255, 0.2)",
	transparentPrimary: "rgba(255,132, 109, 1.0)",
	transparentSecondary: "rgba(111, 229, 215,1.0)",
};
export const SIZES = {
	// global sizes
	base: 8,
	font: 14,
	radius: 12,
	padding: 24,

	// font sizes
	largeTitle: 40,
	h1: 30,
	h2: 22,
	h3: 16,
	h4: 14,
	h5: 12,
	body1: 30,
	body2: 22,
	body3: 16,
	body4: 14,
	body5: 12,

	// app dimensions
	width,
	height,
};
export const FONTS = {
	largeTitle: { fontFamily: "Roboto-Black", fontSize: SIZES.largeTitle },
	h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
	h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
	h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
	h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
	h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 22 },
	body1: {
		fontFamily: "Roboto-Regular",
		fontSize: SIZES.body1,
		lineHeight: 36,
	},
	body2: {
		fontFamily: "Roboto-Regular",
		fontSize: SIZES.body2,
		lineHeight: 30,
	},
	body3: {
		fontFamily: "Roboto-Regular",
		fontSize: SIZES.body3,
		lineHeight: 22,
	},
	body4: {
		fontFamily: "Roboto-Regular",
		fontSize: SIZES.body4,
		lineHeight: 22,
	},
	body5: {
		fontFamily: "Roboto-Regular",
		fontSize: SIZES.body5,
		lineHeight: 22,
	},
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
