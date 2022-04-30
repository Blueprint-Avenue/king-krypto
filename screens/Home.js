import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Dimensions,
	RefreshControl,
} from "react-native";
import React, {useEffect, useState} from "react";
import {MainLayout} from "./Main";
import CoinItem from "../components/CoinItem/CoinItem";
import cryptocurrencies from "../assets/data/cryptocurrencies.json";
import {SIZES, COLORS, dummyData, icons} from "../constants";
import {BalanceInfo} from "../components";
import {IconTextButton} from "../components";
import {LineChart} from "react-native-wagmi-charts";
import {getMarketData} from "../server/axios";

export default function Home({navigation}) {
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchCoins = async (pageNumber) => {
		if (loading) {
			return;
		}
		setLoading(true);
		const coinsData = await getMarketData(pageNumber);
		setCoins((existingCoins) => [...existingCoins, ...coinsData]);
		setLoading(false);
	};

	const refetchCoins = async () => {
		if (loading) {
			return;
		}
		setLoading(true);
		const coinsData = await getMarketData();
		setCoins(coinsData);
		setLoading(false);
	};

	useEffect(() => {
		fetchCoins();
	}, []);

	const screenWidth = Dimensions.get("window").width;
	const data = [
		{
			timestamp: 1638410441521,
			value: 47214.08,
		},
		{
			timestamp: 1638399794129,
			value: 57124.86,
		},
		{
			timestamp: 1638399794129,
			value: 0.86,
		},
		{
			timestamp: 1638403476369,
			value: 57169.37,
		},
		{
			timestamp: 1638410441521,
			value: 47214.08,
		},
		{
			timestamp: 1638410441521,
			value: 57214.08,
		},
		{
			timestamp: 1638403476369,
			value: 38497.37,
		},
		{
			timestamp: 1638407244512,
			value: 46916.55,
		},
		{
			timestamp: 1638410441521,
			value: 47214.08,
		},
		{
			timestamp: 1638410441521,
			value: 60000.08,
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
			<View>
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
						data={coins}
						renderItem={({item}) => <CoinItem marketCoin={item} />}
						keyExtractor={(item, index) => String(index)}
						onEndReached={() => fetchCoins(coins.length / 50 + 1)}
						refreshControl={
							<RefreshControl
								refrehing={loading}
								tintColor="#FF502F"
								onRefresh={refetchCoins}
							/>
						}
					/>
				</LineChart.Provider>
			</View>
		</MainLayout>
	);
}
