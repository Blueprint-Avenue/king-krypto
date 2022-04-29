import {View, Text, FlatList} from "react-native";
import React from "react";
import {MainLayout} from "./Main";
import PortfolioAssets from "../components/PortfolioAssets";

export default function Portfolio() {
	return (
		<MainLayout>
			<View>
				<PortfolioAssets />
			</View>
		</MainLayout>
	);
}
