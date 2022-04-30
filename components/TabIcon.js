import {View, Text, Image} from "react-native";
import React from "react";
import {COLORS} from "../constants";

export default function TabIcon({focused, icon, iconStyle, label, isTrade}) {
	if (isTrade) {
		return (
			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
					height: 60,
					width: 60,
					borderRadius: 30,
					backgroundColor: COLORS.secondary,
				}}
			>
				<Image
					source={icon}
					resizeMode="contain"
					style={{
						width: 25,
						height: 25,
						tintColor: COLORS.white,
						...iconStyle,
					}}
				/>
				<Text style={{color: COLORS.white, fontSize: 16}}>{label}</Text>
			</View>
		);
	} else {
		return (
			<View style={{alignItems: "center", justifyContent: "center"}}>
				<Image
					source={icon}
					resizeMode="contain"
					style={{
						width: 25,
						height: 25,
						tintColor: focused ? COLORS.secondary : COLORS.white,
						...iconStyle,
					}}
				/>
				<Text
					style={{
						color: focused ? COLORS.secondary : COLORS.white,
						fontSize: 16,
					}}
				>
					{label}
				</Text>
			</View>
		);
	}
}
