import {View, Text, FlatList, StyleSheet, Dimensions} from "react-native";
import React from "react";
import {MainLayout} from "./Main";
import CoinItem from "../components/CoinItem/CoinItem";
import cryptocurrencies from "../assets/data/cryptocurrencies.json";
import {SIZES, COLORS, FONTS, dummyData, icons} from "../constants";
import {BalanceInfo} from "../components";
import {IconTextButton} from "../components";
import {LineChart} from "react-native-wagmi-charts";

export default function Home({navigation}) {
	const screenWidth = Dimensions.get("window").width;

	const data = [
		{
			timestamp: 1625945400000,
			value: 33575.25,
		},
		{
			timestamp: 1625946300000,
			value: 0,
		},
		{
			timestamp: 1625947200000,
			value: 15000,
		},
		{
			timestamp: 1625948100000,
			value: 33215.25,
		},
	];

	function renderWalletInfoSection() {
		return (
			<View
				style={{
					paddingHorizontal: SIZES.padding,
					borderBottomLeftRadius: 25,
					borderBottomRightRadius: 25,
					backgroundColor: COLORS.secondary,
				}}
			>
				{/* Balance Info */}
				<BalanceInfo title="My Wallet" />

				{/* Buttons */}
				<View
					style={{
						flexDirection: "row",
						marginTop: 30,
						marginBottom: -15,
						paddingHorizontal: SIZES.radius,
					}}
				>
					<IconTextButton
						label="Transfer"
						icon={icons.send}
						containerStyle={{
							flex: 1,
							height: 40,
							marginRight: SIZES.radius,
						}}
						onPress={() => console.log("Transfer")}
					/>

					<IconTextButton
						label="Withdraw"
						icon={icons.withdraw}
						containerStyle={{
							flex: 1,
							height: 40,
						}}
						onPress={() => console.log("Withdraw")}
					/>
				</View>
			</View>
		);
	}
	return (
		<MainLayout>
			<View style={styles.container}>
				<LineChart.Provider data={data}>
					{/* Header */}
					{renderWalletInfoSection()}

					{/* Chart */}
					<View>
						<LineChart height={screenWidth / 2} width={screenWidth}>
							<LineChart.Path
								color="#32DBC6"
								// style={{
								// 	secondary: "#32DBC6",
								// 	backgroundColor:
								// 		chartColor
								// }}
							>
								<LineChart.Dot
									// style={{
									// 	secondary: "#32DBC6",
									// 	backgroundColor:
									// 		chartColor
									// }}
									color="#FF502F"
									at={10}
									hasPulse
								/>
								<LineChart.Gradient />
								<LineChart.HorizontalLine at={{value: 3027.84}} />
							</LineChart.Path>
							<LineChart.CursorCrosshair color="#32DBC6" />
						</LineChart>
					</View>
					{/*  Top Cryptocurrency */}
					<FlatList
						data={cryptocurrencies}
						renderItem={({item}) => <CoinItem marketCoin={item} />}
					/>
				</LineChart.Provider>
			</View>
		</MainLayout>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#EBEFD0",
		paddingTop: 50,
	},
});
