import {View, Text, Image} from "react-native";
import React from "react";
import styles from "./CDetails";
import {Ionicons, FontAwesome5} from "@expo/vector-icons";

const CoinDetailHeader = (props) => {
	const {image, symbol, market_cap_rank} = props;
	return (
		<View style={styles.headerContainer}>
			<Ionicons name="chevron-back-sharp" size={33} color="#32DBC6" />
			<View style={styles.middleContainer}>
				<Image source={{uri: image}} style={styles.image} />
				<Text style={styles.textTicker}>{symbol.toLocaleUpperCase()}</Text>
				<View style={styles.rankView}>
					<Text style={styles.text}>#{market_cap_rank}</Text>
				</View>
			</View>
			<FontAwesome5 name="user" size={30} color="#32DBC6" />
		</View>
	);
};

export default CoinDetailHeader;
