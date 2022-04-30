import {
	View,
	Text,
	Image,
	Dimensions,
	TextInput,
	ActivityIndicator,
} from "react-native";
import React, {useState, useEffect} from "react";
import CoinDetailHeader from "./CoinDetailHeader";
import styles from "./CDStyle";
import {AntDesign} from "@expo/vector-icons";
import {LineChart} from "react-native-wagmi-charts";
import {Ionicons, FontAwesome5} from "@expo/vector-icons";
import {useRoute} from "@react-navigation/native";
import {getDatailedCoinData, getCoinMarketChart} from "../../server/axios";

const CoinDetails = () => {
	const [coin, setCoin] = useState(null);
	const [coinMarketData, setCoinMarketData] = useState(null);
	const route = useRoute();
	const {
		params: {coinId},
	} = route;
	console.log(route);

	const [loading, setLoading] = useState(false);
	const [coinValue, setCoinValue] = useState("1");
	const [usdValue, setUsdValue] = useState("");

	const fetchCoinData = async () => {
		setLoading(true);
		const fetchedCoinData = await getDatailedCoinData(coinId);
		const fetchedCoinMarketDate = await getCoinMarketChart(coinId);
		setCoin(fetchedCoinData);
		setCoinMarketData(fetchedCoinMarketDate);
		setUsdValue(fetchedCoinData.market_data.current_price.usd.toString());
		setLoading(false);
	};

	useEffect(() => {
		fetchCoinData();
	}, []);

	if (loading || !coin || !coinMarketData) {
		return <ActivityIndicator size="large" />;
	}

	const {
		id,
		image: {small},
		name,
		symbol,
		market_data: {market_cap_rank, current_price, price_change_percentage_24h},
	} = coin;

	const {prices} = coinMarketData;

	const percentageChangeColor =
		price_change_percentage_24h < 0 ? "#ea3943" : "#32DBC6";

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

	const changeCoinValue = (value) => {
		setCoinValue(value);
		const floatValue = parseFloat(value.replace(",", ".")) || 0;
		setUsdValue((floatValue * current_price.usd).toString());
	};

	const changeUsdValue = (value) => {
		setUsdValue(value);
		const floatValue = parseFloat(value.replace(",", ".")) || 0;
		setCoinValue((floatValue / current_price.usd).toString());
	};

	return (
		<View style={{paddingHorizontal: 10}}>
			<LineChart.Provider data={data}>
				<CoinDetailHeader
					coinId={id}
					image={small}
					symbol={symbol}
					market_cap_rank={market_cap_rank}
				/>
				<View style={styles.priceContainer}>
					<View style={styles.priceDetails}>
						<Text style={styles.name}>{name}</Text>
						<Text style={styles.price}>${current_price.usd}</Text>
					</View>

					<View
						style={{
							backgroundColor: percentageChangeColor,
							backgroundColor: "#FF502F",
							paddingHorizontal: 5,
							borderRadius: 5,
							flexDirection: "row",
							paddingVertical: 8,
						}}
					>
						<AntDesign
							name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
							size={14}
							color={"#EBEFD0"}
							style={{alignSelf: "center", marginRight: 5}}
						/>
						<Text style={styles.text}>
							{price_change_percentage_24h.toFixed(2)}%
						</Text>
					</View>
				</View>
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
				<View style={styles.textInputContainer}>
					<View style={{flexDirection: "row", flex: 1}}>
						<Text style={{color: "#FF502F", alignSelf: "center"}}>
							{symbol.toLocaleUpperCase()}
						</Text>
						<TextInput
							style={styles.input}
							value={coinValue}
							keyboardType="numeric"
							onChangeText={changeCoinValue}
						/>
					</View>
					<View style={{flexDirection: "row", flex: 1}}>
						<Text style={{color: "#FF502F", alignSelf: "center"}}>USD</Text>
						<TextInput
							style={styles.input}
							value={usdValue}
							keyboardType="numeric"
							onChangeText={changeUsdValue}
						/>
					</View>
				</View>
			</LineChart.Provider>
		</View>
	);
};

export default CoinDetails;
