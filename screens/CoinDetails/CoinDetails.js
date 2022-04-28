import {View, Text, Image, Dimensions, TextInput} from "react-native";
import React, {useState, useEffect} from "react";
import cryptoCoin from "../../assets/data/crypto.json";
import CoinDetailHeader from "../../components/CoinDetailHeader";
import styles from "./CDStyle";
import {AntDesign} from "@expo/vector-icons";
import {LineChart} from "react-native-wagmi-charts";
import {useNavigation} from "@react-navigation/native";
import {Ionicons, FontAwesome5} from "@expo/vector-icons";
import {useRoute} from "@react-navigation/native";

const CoinDetails = () => {
	const {
		image: {small},
		name,
		symbol,

		prices,
		market_data: {market_cap_rank, current_price, price_change_percentage_24h},
	} = cryptoCoin;

	const [coinValue, setCoinValue] = useState("1");
	const [usdValue, setUsdValue] = useState(current_price.usd.toString());

	const route = useRoute();

	const {
		params: {coinId},
	} = route;

	console.log(route);

	const navigation = useNavigation();
	const percentageChangeColor =
		price_change_percentage_24h < 0 ? "#ea3943" : "#32DBC6";

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
	// map thorugh the price
	// points:prices.map((price) =>({x:price[0], y:[1]}))

	// Changes the price
	// const formatCurrency = (value) => {
	// only if the value is empty
	//     "worklet";
	//     if(value === ''){
	//         return `${current_price.usd.toFixed(2)}`
	// //     }
	//     return 1${parseFloat(value).toFixed(2)}
	// }

	// const chartColor = current_price.usd > [0][1] ? "#FF502F" : "#32DBC6";

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
				<Ionicons
					onPress={() => navigation.goBack(null)}
					name="chevron-back-sharp"
					size={33}
					color="#32DBC6"
				/>
				<CoinDetailHeader
					image={small}
					name={name}
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
