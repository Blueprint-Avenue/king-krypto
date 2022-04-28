import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#EBEFD0",
		paddingTop: 50,
	},
	title: {
		color: "#FF502F",
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 3,
	},
	text: {
		color: "#1B1717",
		marginRight: 5,
		fontSize: 13,
		fontWeight: "bold",
	},
	coinsContainer: {
		flexDirection: "row",
		borderBottomWidth: 5,
		borderBottomColor: "#32DBC6",
		padding: 15,
		justifyContent: "space-between",
	},
	rank: {
		fontWeight: "bold",
		color: "#EBEFD0",
	},
	rankContainer: {
		backgroundColor: "#32DBC6",
		borderRadius: 5,
		paddingHorizontal: 5,
		marginRight: 5,
	},
});

export default styles;
