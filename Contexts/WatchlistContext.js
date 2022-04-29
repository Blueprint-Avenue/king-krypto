import React, {useContext, createContext, useState, useEffect} from "react";
import {View, Text} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Access data in file and manipulate throughout whole application

const WatchListContext = createContext();

// Custom Hook -
export const useWatchlist = () => useContext(WatchListContext);

const WatchlistProvider = ({children}) => {
	const [watchlistCoinIds, setWatchListCoinIds] = useState([]);

	const getWatchlistData = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem("@watchlist_coins");
			setWatchListCoinIds(jsonValue != null ? JSON.parse(jsonValue) : []);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		getWatchlistData();
	}, []);

	// ADDING WATCHLIST COINS
	const storeWatchlistCoinId = async (coinId) => {
		try {
			const newWatchList = [...watchlistCoinIds, coinId];
			// Store the data
			const jsonValue = JSON.stringify("@watchlist_coins", newWatchList);
			await AsyncStorage.setItem("@watchlist_coins", jsonValue);
			setWatchListCoinIds(newWatchList);
		} catch (e) {
			console.log(e);
		}
	};

	// REMOVING WATCHLIST COINS

	const removeWatchlistCoinId = async (coinId) => {
		const newWatchList = watchlistCoinIds.filter(
			(coinIdValue) => coinIdValue !== coinId
		);
		const jsonValue = JSON.stringify(newWatchList);
		await AsyncStorage.setItem("@watchlist_coins", jsonValue);
		setWatchListCoinIds(newWatchList);
	};

	return (
		<WatchListContext.Provider
			value={{watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId}}
		>
			{children}
		</WatchListContext.Provider>
	);
};

export default WatchlistProvider;
