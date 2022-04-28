import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
	price: {
		color: "#32DBC6",
		fontSize: 30,
		fontWeight: "600",
		letterSpacing: 1,
	},
	name: {
		color: "#FF502F",
		fontSize: 15,
	},
	priceContainer: {
		padding: 15,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	text: {
		color: "#EBEFD0",
		fontSize: 18,
		fontWeight: "500",
	},
	// priceChangeContainer: {

	// },
	textInputContainer: {
		flexDirection: "row",
	},
	input: {
		width: 130,
		height: 40,
		margin: 12,
		borderBottomWidth: 2,
		borderBottomColor: "#32DBC6",
		padding: 10,
		fontSize: 16,
		color: "#1B1717",
	},
});

export default styles;
