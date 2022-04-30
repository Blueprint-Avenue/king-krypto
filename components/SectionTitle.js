import {View, Text} from "react-native";
import React from "react";
import {COLORS, SIZES} from "../constants";

export default function SectionTitle({title}) {
	return (
		<View
			style={{
				marginTop: SIZES.padding,
			}}
		>
			<Text
				style={{
					color: COLORS.lightGray3,
					fontSize: 16,
				}}
			>
				{title}
			</Text>
		</View>
	);
}
