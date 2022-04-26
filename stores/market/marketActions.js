import axios from "axios";

export const GET_HOLDINGS_BEGIN = "GET_HOLDINGS_BEGIN";
export const GET_HOLDINGS_SUCCESS = "GET_HOLDINGS_SUCCESS";
export const GET_HOLDINGS_FAILURE = "GET_HOLDINGS_FAILURE";
export const GET_COIN_MARKET_BEGIN = "GET_COIN_MARKET_BEGIN";
export const GET_COIN_MARKET_SUCCESS = "GET_COIN_MARKET_SUCCESS";
export const GET_COIN_MARKET_FAILURE = "GET_COIN_MARKET_FAILURE";

// Our Holdings - Return Data of Own Holdings - Portfolio
export const getHoldingsBegin = () => ({
	type: GET_HOLDINGS_BEGIN,
});

export const getHoldingsSuccess = (myHoldings) => ({
	type: GET_HOLDINGS_SUCCESS,
	payload: {myHoldings},
});

export const getHoldingsFailure = (error) => ({
	type: GET_HOLDINGS_FAILURE,
	payload: {error},
});

export function getHoldings(
	holdings = [],
	currency = "usd",
	orderBy = "market_cap_desc",
	sparkline = true,
	priceChangePerc = "7d",
	perPage = 10,
	page = 1
) {
	return async (dispatch) => {
		dispatch(getHoldingsBegin());

		let id = holdings
			.map((item) => {
				return item.id;
			})
			.join(",");

		let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}&ids=${id}`;

		try {
			const response = await axios({
				url: apiUrl,
				method: "GET",
				headers: {
					Accept: "application/json",
				},
			});
			console.log("GetHoldings");
			console.log("Response");
			if (response.status == 200) {
				// juggles the data
				let myHoldings = response.data.map((item_1) => {
					//Retrive current holdings - quantity
					let coin = holdings.find((a) => a.id == item_1.id);

					// Price from 7 days ago
					let price7d =
						item_1.current_price /
						(1 + item_1.price_change_percentage_7d_in_currency * 0.01);

					return {
						id: item_1.id,
						symbol: item_1.symbol,
						name: item_1.name,
						image: item_1.image,
						current_price: item_1.current_price,
						qty: coin.qty,
						total: coin.qty * item_1.current_price,
						price_change_percentage_7d_in_currency:
							item_1.price_change_percentage_7d_in_currency,
						holding_value_change_7d:
							(item_1.current_price - price7d) * coin.qty,
						sparkline_in_7d: {
							value: item_1.sparkline_in_7d.price.map((price) => {
								return price * coin.qty;
							}),
						},
					};
				});
				dispatch(getHoldingsSuccess(myHoldings));
			} else {
				dispatch(getHoldingsFailure(response.data));
			}
		} catch (error_1) {
			dispatch(getHoldingsFailure(error_1));
		}
	};
}

// Coin Market - Home screen and market screen
export const getCoinMarketBegin = () => ({
	type: GET_COIN_MARKET_BEGIN,
});

export const getCoinMarketSuccess = (coins) => ({
	type: GET_COIN_MARKET_SUCCESS,
	payload: {coins},
});

export const getCoinMarketFailure = (error) => ({
	type: GET_COIN_MARKET_FAILURE,
	payload: {error},
});

export function getCoinMarket(
	currency = "usd",
	orderBy = "market_cap_desc",
	sparkline = true,
	priceChangePerc = "7d",
	perPage = 10,
	page = 1
) {
	return (dispatch) => {
		dispatch(getCoinMarketBegin());

		let apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${perPage}&page=${page}&sparkline=${sparkline}&price_change_percentage=${priceChangePerc}
`;
		return axios({
			url: apiUrl,
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				console.log("GetCoinMarket");
				console.log("Response");
				if (response.status == 200) {
					dispatch(getCoinMarketSuccess(response.data));
				} else {
					dispatch(getCoinMarketFailure(response.data));
				}
			})
			.catch((error) => {
				dispatch(getCoinMarketFailure(error));
			});
	};
}
