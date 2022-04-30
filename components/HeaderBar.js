import React from "react";
import {View, Text, Platform} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {COLORS, SIZES} from "../constants";
import {useNavigation} from "@react-navigation/native";

const HeaderBar = ({title}) => {
	const navigation = useNavigation();

	return (
		<View
			style={{
				paddingHorizontal: SIZES.radius,
				marginTop: 50,
				marginBottom: 25,
				flexDirection: "row",
				justifyContent: "space-end",
				alignItems: "center",
				borderTopLeftRadius: 25,
				borderTopRightRadius: 25,
				borderBottomLeftRadius: 25,
				borderBottomRightRadius: 25,
				backgroundColor: COLORS.primary,
				marginHorizontal: 7,
			}}
		>
			<Ionicons
				onPress={() => navigation.goBack(null)}
				name="chevron-back-sharp"
				size={44}
				color="#EBEFD0"
			/>
			<Text style={{color: "#EBEFD0", fontSize: 40, marginLeft: 25}}>
				{title}
			</Text>
		</View>
	);
};

export default HeaderBar;
