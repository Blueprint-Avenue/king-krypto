import {View, Text, FlatList, StyleSheet, Pressable} from "react-native";
import React from "react";
import {AntDesign} from "@expo/vector-icons";
import PortfolioAssetItem from "./PortfolioAssetItem";

export default function PortfolioAssets() {
	return (
		<View>
			<FlatList
				data={[{id: "bitcoin"}]}
				renderItem={({item}) => <PortfolioAssetItem assetItem={item} />}
				ListHeaderComponent={
					<>
						<View style={styles.balanceContainer}>
							<View>
								<Text style={styles.currentBalance}>Current Balance</Text>
								<Text style={styles.currentBalanceValue}>$15,000,000</Text>
								<Text style={styles.valueChange}>$1000(All Time)</Text>
							</View>
							<View style={styles.priceChangePercentageContainer}>
								<AntDesign
									name={"caretup"}
									size={14}
									color={"#EBEFD0"}
									style={{alignSelf: "center", marginRight: 5}}
								/>
								<Text style={styles.percentage}>1.2%</Text>
							</View>
						</View>
						<View>
							<Text style={styles.assetsLabel}>Your Assets</Text>
						</View>
					</>
				}
				ListFooterComponent={
					<Pressable style={styles.buttonContainer}>
						<Text style={styles.buttonText}>Add New Asset</Text>
					</Pressable>
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	currentBalance: {
		color: "#FF502F",
		fontWeight: "600",
		marginTop: 60,
		fontSize: 15,
	},
	currentBalanceValue: {
		color: "#32DBC6",
		fontSize: 40,
		fontWeight: "700",
		letterSpacing: 1,
	},
	valueChange: {
		fontWeight: "600",
		fontSize: 16,
		color: "#FF502F",
	},
	percentage: {
		color: "#EBEFD0",
		fontWeight: "500",
		fontSize: 17,
	},
	balanceContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 10,
		marginBottom: 5,
		marginHorizontal: 10,
	},
	priceChangePercentageContainer: {
		flexDirection: "row",
		backgroundColor: "#32DBC6",
		paddingHorizontal: 3,
		paddingVertical: 8,
		borderRadius: 5,
	},
	assetsLabel: {
		color: "#49BEB7",
		fontSize: 25,
		fontWeight: "700",
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
	buttonContainer: {
		backgroundColor: "#FF502F",
		padding: 10,
		alignItems: "center",
		marginVertical: 25,
		marginHorizontal: 15,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 17,
		color: "#EBEFD0",
		fontWeight: "600",
	},
});
