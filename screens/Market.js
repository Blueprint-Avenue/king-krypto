import React, {useState, useEffect} from "react";
import {View, Text, FlatList, RefreshControl} from "react-native";
import {MainLayout} from "./Main";
import {useWatchlist} from "../Contexts/WatchlistContext";
import CoinItem from "../components/CoinItem/CoinItem";
import {getWatchlistedCoins} from "../Contexts/WatchlistContext";

const Market = () => {
	const {watchlistCoinIds} = useWatchlist();
	console.log(watchlistCoinIds);

	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(false);

	const transformCoinIds = () => watchlistCoinIds.join("%2C");

	const fetchWatchlistedCoins = async () => {
		if (loading) {
			return;
		}
		setLoading(true);
		const watchlistedCoinsData = await getWatchlistedCoins(
			1,
			transformCoinIds()
		);
		setCoins(watchlistedCoinsData);
		setLoading(false);
	};

	useEffect(() => {
		if (watchlistCoinIds.length > 0) {
			fetchWatchlistedCoins();
		}
	}, [watchlistCoinIds]);

	return (
		<MainLayout>
			<FlatList
				data={coins}
				renderItem={({item}) => <CoinItem marketCoin={item} />}
				refreshControl={
					<RefreshControl
						refreshing={loading}
						tintColor="#FF502F"
						onRefresh={
							watchlistCoinIds.length > 0 ? fetchWatchlistedCoins : null
						}
					/>
				}
			/>
		</MainLayout>
	);
};

export default Market;
