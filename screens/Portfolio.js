import {View, Text, FlatList} from "react-native";
import React, {Suspense} from "react";
import {MainLayout} from "./Main";
import PortfolioAssets from "../components/PortfolioAssets";

export default function Portfolio() {
	return (
		<MainLayout>
			<View>
				<Suspense
					fallback={<Text style={{color: "#FF502F"}}>Loading Please Wait</Text>}
				>
					<PortfolioAssets />
				</Suspense>
			</View>
		</MainLayout>
	);
}
