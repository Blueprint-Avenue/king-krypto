import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { MainLayout } from "./Main";
import { connect } from "react-redux";
import { getHoldings, getCoinMarket } from "../stores/market/marketActions";
import { useFocusEffect } from "@react-navigation/native";
import { dummyData, SIZES, COLORS, FONTS, icons } from "../constants/";
// import { holdings } from "../constants/dummydata";

const Home = ({ getHoldings, getCoinMarket, myHoldings, coins }) => {
	useFocusEffect(
		// triggered everytime the homescreen is being focused
		useCallback(() => {
			getHoldings((holdings = dummyData.holdings));
			getCoinMarket();
		}, [])
	);

	function renderWalletInfoSection() {
		return (
			<View
				style={{
					paddingHorizontal: SIZES.padding,
					borderBottomLeftRadius: 25,
					borderBottomRightRadius: 25,
					backgroundColor: COLORS.gray,
				}}
			>
				{/* Balance Info */}
				<BalanceInfo />
				{/* Buttons */}
			</View>
		);
	}

	return (
		<MainLayout>
			<View
				style={{
					flex: 1,
					backgroundColor: COLORS.secondary,
				}}
			>
				{/* Header Section */}
				{renderWalletInfoSection()}
				{/* Chart Section */}
				{/* Top Crypto Section */}
			</View>
		</MainLayout>
	);
};

function mapStateToProps(state) {
	return {
		myHoldings: state.marketReducer.myHoldings,
		coins: state.marketReducer.coins,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getHoldings: (
			holdings,
			currency,
			coinList,
			orderBy,
			sparkline,
			priceChangePerc,
			perPage,
			page
		) => {
			return;
			dispatch(
				getHoldings(
					holdings,
					currency,
					coinList,
					orderBy,
					sparkline,
					priceChangePerc,
					perPage,
					page
				)
			);
		},
		getCoinMarket: (
			currency,
			coinList,
			orderBy,
			sparkline,
			priceChangePerc,
			perPage,
			page
		) => {
			return;
			dispatch(
				getCoinMarket(
					currency,
					coinList,
					orderBy,
					sparkline,
					priceChangePerc,
					perPage,
					page
				)
			);
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
