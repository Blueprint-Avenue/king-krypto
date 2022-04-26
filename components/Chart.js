import {View, Text} from "react-native";
import React from "react";
import {
	ChartDot,
	ChartPath,
	ChartPathProvider,
	ChartXLabel,
	ChartYLabel,
	monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";
import {COLORS, SIZES, FONTS} from "../constants";

export default function Chart({containerStyle, chartPrices}) {
	return (
		<View>
			<Text
				style={{
					color: COLORS.black2,
				}}
			>
				Chart
			</Text>
		</View>
	);
}
