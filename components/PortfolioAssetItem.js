import {View, Text, Image, StyleSheet} from "react-native";
import {COLORS} from "../constants/theme";
import React from "react";
import {AntDesign} from "@expo/vector-icons";

export default function PortfolioAssetItem() {
	return (
		<View style={styles.AssetItemContainer}>
			<Image source={{uri: ""}} style={{height: 30, width: 30}} />
			<View>
				<Text style={styles.title}>Bitcoin</Text>
				<Text style={styles.ticker}>BTC</Text>
			</View>
			<View style={{marginLeft: "auto"}}>
				<Text style={styles.title}>$5000</Text>
				<View style={{flexDirection: "row"}}>
					<AntDesign
						name={"caretup"}
						size={14}
						color={"#FF502F"}
						style={{alignSelf: "center", marginRight: 5}}
					/>
					<Text style={{color: "#32DBC6", fontWeight: "600"}}>64.6%</Text>
				</View>
			</View>
			<View style={styles.quantityContainer}>
				<Text style={styles.title}>$80000</Text>
				<Text style={styles.ticker}>2 BTC</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		color: "#FF502F",
		fontWeight: "bold",
		fontSize: 15,
	},
	ticker: {
		color: "#32DBC6",
		fontWeight: "600",
	},
	AssetItemContainer: {
		flexDirection: "row",
		padding: 17,
	},
	quantityContainer: {
		marginLeft: "auto",
		alignItems: "flex-end",
	},
});
