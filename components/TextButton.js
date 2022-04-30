import React from "react";
import {View, Text, Platform} from "react-native";

import {COLORS, SIZES} from "../constants";

const HeaderBar = ({title}) => {
	return (
		<View
			style={{
				paddingHorizontal: SIZES.radius,
				justifyContent: "flex-end",
			}}
		>
			<Text style={{color: COLORS.white, fontSize: 30}}>{title}</Text>
		</View>
	);
};

export default HeaderBar;
