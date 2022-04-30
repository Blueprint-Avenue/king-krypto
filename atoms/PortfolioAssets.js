import {atom, selector} from "recoil";

export default allPortfolioBoughtAssets = selector({
	key: "allPortfolioBoughtAssets",
	// Taking data from async storage
	get: async () => {
		const jsonValue = await AsyncStorage.getItem("@portfolio_coins");
		return jsonValue != null ? JSON.parse(jsonValue) : [];
	},
});

export const allPortfolioAssets = atom({
	key: "allPortfolioAssets",
	default: allPortfolioBoughtAssets,
});
