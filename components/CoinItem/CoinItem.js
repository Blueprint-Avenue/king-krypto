import {StyleSheet, Text, View, Image, Pressable} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import styles from "./CoinItemStyle";
import {useNavigation} from "@react-navigation/native";
import {CoinItemStyle} from "./CoinItemStyle";

export default function CoinItem({marketCoin}) {
	const {
		name,
		current_price,
		market_cap_rank,
		price_change_percentage_24h,
		symbol,
		market_cap,
		image,
	} = marketCoin;

	const navigation = useNavigation();

	const prettierMarketCap = (marketCap) => {
		if (marketCap > 1_000_000_000_000) {
			return `${Math.floor(marketCap / 1_000_000_000_000)}T`;
		}
		if (marketCap > 1_000_000_000) {
			return `${Math.floor(marketCap / 1_000_000_000)}B`;
		}
		if (marketCap > 1_000_000) {
			return `${Math.floor(marketCap / 1_000_000)}M`;
		}
		if (marketCap > 1_000) {
			return `${Math.floor(marketCap / 1_000)}T`;
		}
		return marketCap;
	};

	const percentageChangeColor =
		price_change_percentage_24h < 0 ? "#ea3943" : "#32DBC6";

	return (
		<Pressable
			onPress={() => navigation.navigate("Details")}
			style={styles.coinsContainer}
		>
			<Image
				source={{uri: image}}
				style={{width: 35, height: 35, marginRight: 10, alignSelf: "center"}}
			/>
			<View>
				<Text style={styles.title}>{name}</Text>
				<View style={{flexDirection: "row"}}>
					<View style={styles.rankContainer}>
						<Text style={styles.rank}>{market_cap_rank}</Text>
					</View>
					<Text style={styles.text}>{symbol.toUpperCase()}</Text>
					<AntDesign
						name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
						size={14}
						color={percentageChangeColor}
						style={{alignSelf: "center", marginRight: 5}}
					/>
					<Text style={{color: percentageChangeColor}}>
						{price_change_percentage_24h.toFixed(2)}%
					</Text>
				</View>
			</View>
			<View style={{marginLeft: "auto", alignItems: "flex-end"}}>
				<Text style={styles.title}>${current_price.toFixed(5)}</Text>
				<Text style={styles.text}>MCap {prettierMarketCap(market_cap)}</Text>
			</View>
		</Pressable>
	);
}
