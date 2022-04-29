import React from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";
import CoinDetails from "./screens/CoinDetails/CoinDetails";
import {COLORS} from "./constants";
import WatchlistProvider from "./Contexts/WatchlistContext";
import Tabs from "./navigation/tabs";
import {StatusBar} from "expo-status-bar";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer
				theme={{
					colors: {
						background: COLORS.white,
					},
				}}
			>
				<WatchlistProvider>
					<StatusBar style="auto" />
					<Stack.Navigator
						screenOptions={{
							headerShown: false,
							...TransitionPresets.ModalPresentationIOS,
						}}
						initialRouteName={"MainLayout"}
					>
						<Stack.Screen name="MainLayout" component={Tabs} />
						<Stack.Screen name="Details" component={CoinDetails} />
					</Stack.Navigator>
				</WatchlistProvider>
			</NavigationContainer>
		</Provider>
	);
};

export default App;
