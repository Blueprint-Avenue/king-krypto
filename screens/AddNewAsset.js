import {View, Text} from "react-native";
import React from "react";
import HeaderBar from "../components/HeaderBar";

export default function AddNewAsset() {
	return (
		<View>
			{/* Custom Header */}
			<HeaderBar title={"Add New Asset"} />
		</View>
	);
}
