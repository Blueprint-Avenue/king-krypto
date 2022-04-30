import {View, Text, Image, StyleSheet} from "react-native";
import {COLORS} from "../constants/theme";
import React from "react";
import {AntDesign} from "@expo/vector-icons";

export default function PortfolioAssetItem({assetItem}) {
	const {
		currentPrice,
		image,
		name,
		priceBought,
		priceChangePercentage,
		quantityBought,
		ticker,
	} = assetItem;

	const isChangePositive = () => priceChangePercentage >= 0;

	const renderHoldings = () => (quantityBought * currentPrice).toFixed(2);

	return (
		<View style={styles.AssetItemContainer}>
			<Image
				source={{uri: image}}
				style={{height: 30, width: 30, marginRight: 10, alignSelf: "center"}}
			/>
			<View>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.ticker}>{ticker}</Text>
			</View>
			<View style={{marginLeft: "auto"}}>
				<Text style={styles.title}>${currentPrice}</Text>
				<View style={{flexDirection: "row"}}>
					<AntDesign
						name={isChangePositive() ? "caretup" : "caretdown"}
						size={14}
						color={isChangePositive() ? "#32DBC6" : "#FF502F"}
						style={{alignSelf: "center", marginRight: 5}}
					/>
					<Text
						style={{
							color: isChangePositive() ? "#32DBC6" : "#FF502F",
							fontWeight: "600",
						}}
					>
						{priceChangePercentage.toFixed(2)}%
					</Text>
				</View>
			</View>
			<View style={styles.quantityContainer}>
				<Text style={styles.title}>$80000</Text>
				<Text style={styles.ticker}>
					{quantityBought}
					{ticker}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		color: "#FF502F",
		fontWeight: "bold",
		fontSize: 15,
		alignSelf: "flex-end",
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
