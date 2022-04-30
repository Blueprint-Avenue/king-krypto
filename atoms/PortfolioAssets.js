import {atom, selector} from "recoil";
import {getWatchlistedCoins} from "../server/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// What's stored in loacl storage
export const allPortfolioBoughtAssets = selector({
	key: "allPortfolioBoughtAssets",
	// Taking data from async storage
	get: async () => {
		const jsonValue = await AsyncStorage.getItem("@portfolio_coins");
		return jsonValue != null ? JSON.parse(jsonValue) : [];
	},
});

export const allPortfolioBoughtAssetsFromApi = selector({
	key: "allPortfolioBoughtAssetsFromApi",
	get: async ({get}) => {
		const boughtPorfolioAssets = get(allPortfolioBoughtAssetsInStorage);
		// Get The most updated data!
		const portfolioAssetsMarketData = await getWatchlistedCoins(
			1,
			boughtPorfolioAssets.map((porfolioAsset) => porfolioAsset.id).join(",")
		);
		const boughtAssets = boughtPorfolioAssets.map((boughtAsset) => {
			const portfolioAsset = portfolioAssetsMarketData.filter(
				(item) => boughtAsset.id === item.id
			)[0];
			return {
				...boughtAsset,
				currentPrice: portfolioAsset.current_price,
				priceChangePercentage: portfolioAsset.price_change_percentage_24h,
			};
		});
		return boughtAssets.sort(
			(item1, item2) =>
				item1.quantityBought * item1.currentPrice <
				item2.quantityBought * item2.currentPrice
		);
	},
});

export const allPortfolioAssets = atom({
	key: "allPortfolioAssets",
	default: allPortfolioBoughtAssetsFromApi,
});

export const allPortfolioBoughtAssetsInStorage = atom({
	key: "allPortfolioBoughtAssetsInStorage",
	// Storage
	default: allPortfolioBoughtAssets,
});
