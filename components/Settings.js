import {View, Text, TouchableOpacity, Image, Switch} from "react-native";
import React from "react";
import {COLORS, SIZES, icons} from "../constants";

export default function Settings({title, value, type, onPress}) {
	if (type == "button") {
		return (
			<TouchableOpacity
				style={{
					flexDirection: "row",
					height: 50,
					alignItems: "center",
				}}
				onPress={onPress}
			>
				<Text style={{flex: 1, color: COLORS.white, fontSize: 18}}>
					{title}
				</Text>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<Text
						style={{
							marginRight: SIZES.radius,
							color: COLORS.lightGray3,
							fontSize: 18,
						}}
					>
						{value}
					</Text>
					<Image
						source={icons.rightArrow}
						style={{
							height: 15,
							width: 15,
							tintColor: COLORS.white,
						}}
					/>
				</View>
			</TouchableOpacity>
		);
	} else {
		return (
			<View
				style={{
					flexDirection: "row",
					height: 50,
					alignItems: "center",
				}}
			>
				<Text style={{flex: 1, color: COLORS.white, fontSize: 18}}>
					{title}
				</Text>
				<Switch
					trackColor={{false: COLORS.white, true: COLORS.primary}}
					value={value}
					onValueChange={(value) => onPress(value)}
				/>
			</View>
		);
	}
}
