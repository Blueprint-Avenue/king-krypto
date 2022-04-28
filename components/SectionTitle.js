import {View, Text} from "react-native";
import React from "react";
import {FONTS, COLORS, SIZES} from "../constants";

export default function SectionTitle({title}) {
	return (
		<View
			style={{
				marginTop: SIZES.padding,
			}}
		>
			<Text style={{color: COLORS.lightGray3, ...FONTS.h4}}>{title}</Text>
		</View>
	);
}
