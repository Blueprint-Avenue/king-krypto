import {View, Text, Image} from "react-native";
import React from "react";
import {SIZES, COLORS, FONTS, icons} from "../constants";

export default function BalanceInfo({
	title,
	displayAmount,
	changePct,
	containerStyle,
}) {
	return (
		<View style={{...containerStyle}}>
			{/* Title */}
			<Text
				style={{
					color: COLORS.black2,
					...FONTS.h3,
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
					{displayAmount.toLocaleString()}
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
				{changePct != 0 && (
					<Image
						source={icons.upArrow}
						style={{
							width: 10,
							height: 10,
							alignItems: "center",
							tintColor: changePct > 0 ? COLORS.Green : COLORS.red,
							transform:
								changePct > 0 ? [{rotate: "45deg"}] : [{rotate: "125deg"}],
						}}
					/>
				)}
				<Text
					style={{
						marginLeft: SIZES.base,
						alignSelf: "flex-end",
						color:
							changePct === 0
								? COLORS.black2
								: changePct > 0
								? COLORS.Green
								: COLORS.red,
						...FONTS.h4,
					}}
				>
					{changePct.toFixed(2)}%
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
