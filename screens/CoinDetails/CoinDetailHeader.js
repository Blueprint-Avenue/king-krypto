import {View, Text, Image} from "react-native";
import React from "react";
import styles from "./CDetails";
import {Ionicons, FontAwesome5, FontAwesome} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

const CoinDetailHeader = (props) => {
	const {coinId, image, symbol, market_cap_rank} = props;
	const navigation = useNavigation();

	return (
		<View style={styles.headerContainer}>
			<Ionicons
				onPress={() => navigation.goBack(null)}
				name="chevron-back-sharp"
				size={33}
				color="#32DBC6"
			/>
			<View style={styles.middleContainer}>
				<Image source={{uri: image}} style={styles.image} />
				<Text style={styles.textTicker}>{symbol.toLocaleUpperCase()}</Text>
				<View style={styles.rankView}>
					<Text style={styles.text}>#{market_cap_rank}</Text>
				</View>
			</View>
			<FontAwesome name={"star-o"} size={27} color={"#32DBC6"} />
		</View>
	);
};

export default CoinDetailHeader;
