import {View, Text, TextInput, Pressable} from "react-native";
import React, {useState} from "react";
import HeaderBar from "../components/HeaderBar";
import SearchableDropdown from "react-native-searchable-dropdown";
import {useNavigation} from "@react-navigation/native";

export default function AddNewAsset() {
	const [boughtAssetQuantity, setBoughtAssetQuantity] = useState("");
	const navigation = useNavigation();
	return (
		<View style={{flex: 1}}>
			{/* Custom Header */}
			<HeaderBar title={"Add New Asset"} />

			{/* Assets */}
			<SearchableDropdown
				items={[]}
				onItemSelect={(item) => console.log(item)}
				containerStyle={{
					width: "100%",
					paddingHorizontal: 10,
					paddingVerticle: 20,
				}}
				itemStyle={{
					padding: 10,
					marginTop: 2,
					backgroundColor: "#49BEB7",
					borderWidth: 1,
					borderColor: "#32DBC6",
					borderRadius: 5,
				}}
				itemTextStyle={{color: "#EBEFD0"}}
				resetValue={false}
				placeholder={"Select a coin..."}
				placeholderTextColor="#32DBC6"
				textInputProps={{
					underLineColorAndroid: "transparent",
					style: {
						padding: 12,
						borderWidth: 1.5,
						borderColor: "#32DBC6",
						borderRadius: 5,
						backgroundColor: "#49BEB7",
						color: "#EBEFD0",
					},
				}}
			/>
			<View style={{alignItems: "center", marginTop: 50}}>
				<View style={{flexDirection: "row"}}>
					<TextInput
						style={{color: "#49BEB7", fontSize: 90}}
						value={boughtAssetQuantity}
						placeholder="0"
						keyBoardType="numeric"
						onChangeText={setBoughtAssetQuantity}
					/>
					<Text
						style={{
							color: "#49BEB7",
							fontWeight: "700",
							fontSize: 20,
							marginTop: 25,
							marginLeft: 5,
						}}
					>
						BTC
					</Text>
				</View>
				<Text
					style={{
						color: "#49BEB7",
						fontWeight: "600",
						fontSize: 17,
						letterSpacing: 0.5,
					}}
				>
					$15,000 Per Coin
				</Text>
			</View>
			<Pressable
				style={{
					backgroundColor: "#FF502F",
					padding: 10,
					alignItems: "center",
					marginVertical: 105,
					marginHorizontal: 15,
					borderRadius: 5,
				}}
				onPress={() => navigation.navigate("AddNewAsset")}
			>
				<Text style={{fontSize: 17, color: "#EBEFD0", fontWeight: "600"}}>
					Add New Asset
				</Text>
			</Pressable>
		</View>
	);
}
