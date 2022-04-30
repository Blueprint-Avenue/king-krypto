import {View, Text, TextInput, Pressable} from "react-native";
import React, {useState, useEffect} from "react";
import HeaderBar from "../components/HeaderBar";
import SearchableDropdown from "react-native-searchable-dropdown";
import {useNavigation} from "@react-navigation/native";
import {useRecoilState} from "recoil";
import {allPortfolioBoughtAssetsInStorage} from "../atoms/PortfolioAssets";
import {getAllCoins, getDatailedCoinData} from "../server/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddNewAsset() {
	const [allCoins, setAllCoins] = useState([]);
	const [boughtAssetQuantity, setBoughtAssetQuantity] = useState("");
	const [loading, setLoading] = useState(false);
	const [selectedCoinId, setSelectedCoinId] = useState(null);
	const [selectedCoin, setSelectedCoin] = useState(null);

	const [assetsInStorage, setAssetsInStorage] = useRecoilState(
		allPortfolioBoughtAssetsInStorage
	);

	const navigation = useNavigation();

	const isQuatityEntered = () => boughtAssetQuantity === "";

	const fetchAllCoins = async () => {
		if (loading) {
			return;
		}
		setLoading(true);
		const allCoins = await getAllCoins();
		setAllCoins(allCoins);
		setLoading(false);
	};

	const fetchCoinInfo = async () => {
		if (loading) {
			return;
		}
		setLoading(true);
		const coinInfo = await getDatailedCoinData(selectedCoinId);
		setSelectedCoin(coinInfo);
		setLoading(false);
	};

	useEffect(() => {
		fetchAllCoins();
	}, []);

	useEffect(() => {
		if (selectedCoinId) {
			fetchCoinInfo();
		}
	}, [selectedCoinId]);

	const onAddNewAsset = async () => {
		const newAsset = {
			id: selectedCoin.id,
			name: selectedCoin.name,
			image: selectedCoin.image.small,
			ticker: selectedCoin.symbol.toUpperCase(),
			quantityBought: parseFloat(boughtAssetQuantity),
			priceBought: selectedCoin.market_data.current_price.usd,
		};
		const newAssets = [...assetsInStorage, newAsset];
		const jsonValue = JSON.stringify(newAssets);
		await AsyncStorage.setItem("@portfolio_coins", jsonValue);
		setAssetsInStorage(newAssets);
		navigation.goBack();
	};

	return (
		<View style={{flex: 1}}>
			{/* Custom Header */}
			<HeaderBar title={"Add New Asset"} />

			{/* Assets */}
			<SearchableDropdown
				items={allCoins}
				onItemSelect={(item) => setSelectedCoinId(item.id)}
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
				placeholder={selectedCoinId || "Select a coin..."}
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
			{selectedCoin && (
				<>
					<View style={{alignItems: "center", marginTop: 50}}>
						<View style={{flexDirection: "row"}}>
							<TextInput
								style={{color: "#49BEB7", fontSize: 90}}
								value={boughtAssetQuantity}
								placeholder="0"
								keyboardType="numeric"
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
								{selectedCoin.symbol.toUpperCase()}
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
							${selectedCoin.market_data.current_price.usd} per coin
						</Text>
					</View>
					<Pressable
						style={{
							backgroundColor: isQuatityEntered() ? "#303030" : "#FF502F",
							padding: 10,
							alignItems: "center",
							marginVertical: 105,
							marginHorizontal: 15,
							borderRadius: 5,
						}}
						onPress={onAddNewAsset}
						disabled={isQuatityEntered}
					>
						<Text
							style={{
								fontSize: 17,
								color: isQuatityEntered() ? "grey" : "#EBEFD0",
								fontWeight: "600",
							}}
						>
							Add New Asset
						</Text>
					</Pressable>
				</>
			)}
		</View>
	);
}
