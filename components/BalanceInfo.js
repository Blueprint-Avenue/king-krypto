import {View, Text, Image} from "react-native";
import React from "react";
import {SIZES, COLORS, FONTS, icons} from "../constants";

export default function BalanceInfo({title, containerStyle}) {
	return (
		<View style={{...containerStyle}}>
			{/* Title */}
			<Text
				style={{
					color: COLORS.black2,
					...FONTS.h3,
					marginTop: 40,
				}}
			>
				{title}
			</Text>
			{/* Figures */}
			<View
				style={{
					flexDirection: "row",
					alignItems: "flex-end",
				}}
			>
				<Text
					style={{
						color: COLORS.white,
						...FONTS.h3,
					}}
				>
					$
				</Text>
				<Text
					style={{
						color: COLORS.white,
						...FONTS.h2,

						marginLeft: SIZES.base,
					}}
				>
					15,000,000
				</Text>
				<Text
					style={{
						color: COLORS.white,
						...FONTS.h3,
					}}
				>
					USD
				</Text>
			</View>
			{/* Change Percentage */}
			<View
				style={{
					flexDirection: "row",
					alignItems: "flex-end",
				}}
			>
				<Image
					source={icons.upArrow}
					style={{
						width: 10,
						height: 10,
						alignItems: "center",
						tintColor: COLORS.Green,
					}}
				/>

				<Text
					style={{
						marginLeft: SIZES.base,
						alignSelf: "flex-end",
						color: COLORS.Green,
						...FONTS.h4,
					}}
				>
					1000.00%
				</Text>
				<Text
					style={{
						marginLeft: SIZES.radius,
						alignSelf: "flex-end",
						color: COLORS.white,
						...FONTS.h5,
					}}
				>
					7d change
				</Text>
			</View>
		</View>
	);
}
