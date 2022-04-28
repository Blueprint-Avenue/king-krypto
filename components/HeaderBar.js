import React from "react";
import {View, Text, Platform} from "react-native";

import {COLORS, FONTS, SIZES} from "../constants";

const HeaderBar = ({title}) => {
	return (
		<View
			style={{
				paddingHorizontal: SIZES.radius,
				marginTop: 60,
				justifyContent: "flex-end",
			}}
		>
			<Text style={{color: COLORS.white, fontSize: 40}}>{title}</Text>
		</View>
	);
};

export default HeaderBar;
