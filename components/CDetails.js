import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	image: {
		width: 35,
		height: 35,
	},
	text: {
		color: "#EBEFD0",
		fontWeight: "bold",
		fontSize: 15,
	},
	textTicker: {
		color: "#FF502F",
		fontWeight: "bold",
		marginHorizontal: 5,
		fontSize: 17,
	},
	middleContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	rankView: {
		backgroundColor: "#49BEB7",
		paddingHorizontal: 5,
		paddingVertical: 2,
		borderRadius: 5,
	},
});

export default styles;
